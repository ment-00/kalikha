import { Link } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi'
import QuantitySelector from './QuantitySelector.jsx'
import { useCart } from '../context/CartContext.jsx'
import { formatPeso } from '../data/products.js'
import ProductImg from './ProductImg.jsx'

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="cart-item">
      <Link to={`/shop/${item.id}`} className="cart-item-img">
        <ProductImg product={item} />
      </Link>

      <div className="cart-item-info">
        <Link to={`/shop/${item.id}`} className="cart-item-name">{item.name}</Link>
        <div className="cart-item-cat">{item.category}</div>
        <div className="cart-item-unit">
          <span className="label">Unit price:</span> {formatPeso(item.price)}
        </div>
      </div>

      <div className="cart-item-qty">
        <QuantitySelector value={item.quantity} onChange={(q) => updateQuantity(item.id, q)} size="sm" />
      </div>

      <div className="cart-item-subtotal">
        <span className="label d-md-none">Subtotal: </span>
        {formatPeso(item.subtotal)}
      </div>

      <button type="button" className="cart-remove" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name} from cart`}>
        <FiTrash2 size={18} />
        <span className="d-md-none ms-1">Remove</span>
      </button>
    </div>
  )
}
