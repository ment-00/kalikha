// KALIKHA logo: a leaf inside an open circle (nature + cycle), with the wordmark beside it.
export function LogoMark({ size = 40, color = '#245B45', leafColor, accent = '#A8BFA3' }) {
  const leaf = leafColor || color
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="logo-mark">
      <path d="M32 4a28 28 0 1 1-24.2 14" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <circle cx="7.8" cy="18" r="3.2" fill={accent} />
      <path d="M32 52C18 44 16 26 32 13c16 13 14 31 0 39z" fill={leaf} />
      <path d="M32 18v34" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M32 32l-7-6M32 40l8-7" stroke={accent} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Logo({ size = 40, light = false, tagline = false }) {
  const color = light ? '#FFFDF5' : '#245B45'
  return (
    <span className="logo d-inline-flex align-items-center gap-2">
      <LogoMark size={size} color={color} accent={light ? '#A8BFA3' : '#A8BFA3'} />
      <span className="d-flex flex-column lh-1">
        <span className="logo-word" style={{ color }}>KALIKHA</span>
        {tagline && <span className="logo-sub" style={{ color: light ? '#A8BFA3' : '#70543E' }}>Sustainable Essentials</span>}
      </span>
    </span>
  )
}
