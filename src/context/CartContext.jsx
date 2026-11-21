import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getProductById } from '../data/products.js'

const CartContext = createContext(null)
const STORAGE_KEY = 'kalikha-cart'

// Cart items are stored as { id, quantity } and joined with product data when read.
function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (!Array.isArray(saved)) return []
    return saved.filter((item) => getProductById(item.id) && item.quantity > 0)
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)
  const [toast, setToast] = useState(null)

  // Save to localStorage whenever the cart changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* storage unavailable: cart still works for this visit */
    }
  }, [items])

  const addToCart = (id, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === id)
      if (existing) {
        return prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + quantity } : item))
      }
      return [...prev, { id, quantity }]
    })
    setToast({ product: getProductById(id), quantity, key: Date.now() })
  }

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeFromCart = (id) => setItems((prev) => prev.filter((item) => item.id !== id))

  const clearCart = () => setItems([])

  const value = useMemo(() => {
    const detailed = items.map((item) => {
      const product = getProductById(item.id)
      return { ...product, quantity: item.quantity, subtotal: product.price * item.quantity }
    })
    return {
      items: detailed,
      itemCount: detailed.reduce((sum, i) => sum + i.quantity, 0),
      total: detailed.reduce((sum, i) => sum + i.subtotal, 0),
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      toast,
      dismissToast: () => setToast(null),
    }
  }, [items, toast])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
