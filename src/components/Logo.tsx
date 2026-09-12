type LogoProps = {
  /** Display height in CSS pixels */
  size?: number
  className?: string
  alt?: string
  /** Pre-rendered crisp asset set for the placement */
  variant?: 'header' | 'footer' | 'full'
}

const ASSETS = {
  header: {
    src: '/jacs_logo_header.png',
    src2x: '/jacs_logo_header@2x.png',
    nativeW: 145,
    nativeH: 128,
  },
  footer: {
    src: '/jacs_logo_footer.png',
    src2x: '/jacs_logo_footer@2x.png',
    nativeW: 199,
    nativeH: 176,
  },
  full: {
    src: '/jacs_logo.png',
    src2x: '/jacs_logo.png',
    nativeW: 1333,
    nativeH: 1180,
  },
} as const

export function Logo({
  size = 48,
  className = '',
  alt = 'JACS',
  variant = 'full',
}: LogoProps) {
  const asset = ASSETS[variant]
  const width = Math.round(size * (asset.nativeW / asset.nativeH))

  return (
    <img
      className={`jacs-logo ${className}`.trim()}
      src={asset.src}
      srcSet={`${asset.src} 1x, ${asset.src2x} 2x`}
      alt={alt}
      width={asset.nativeW}
      height={asset.nativeH}
      decoding="async"
      draggable={false}
      style={{
        width,
        height: size,
        objectFit: 'contain',
        display: 'block',
        flexShrink: 0,
      }}
    />
  )
}
