import { FiMinus, FiPlus } from 'react-icons/fi'

export default function QuantitySelector({ value, onChange, min = 1, max = 99, size = 'md' }) {
  const set = (n) => onChange(Math.min(max, Math.max(min, n)))

  return (
    <div className={`qty-selector qty-${size}`} role="group" aria-label="Quantity">
      <button type="button" onClick={() => set(value - 1)} disabled={value <= min} aria-label="Decrease quantity">
        <FiMinus />
      </button>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        aria-label="Quantity"
        onChange={(e) => {
          const n = parseInt(e.target.value, 10)
          if (!Number.isNaN(n)) set(n)
        }}
      />
      <button type="button" onClick={() => set(value + 1)} disabled={value >= max} aria-label="Increase quantity">
        <FiPlus />
      </button>
    </div>
  )
}
