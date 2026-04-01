import { useState, useEffect, useMemo } from 'react'

// Confetti shape — small colorful rectangle
function ConfettiPiece({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute"
      style={style}
    />
  )
}

// Star sparkle
function StarSparkle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full"
      style={style}
    />
  )
}

const confettiColors = [
  'rgba(255, 176, 136, 0.25)',   // Peach
  'rgba(255, 126, 179, 0.2)',    // Coral/pink
  'rgba(184, 169, 240, 0.2)',    // Lavender
  'rgba(255, 209, 102, 0.2)',    // Gold
  'rgba(126, 214, 196, 0.18)',   // Mint
  'rgba(255, 198, 217, 0.2)',    // Soft pink
]

const sparkleColors = [
  'rgba(255, 209, 102, 0.1)',
  'rgba(255, 176, 136, 0.08)',
  'rgba(184, 169, 240, 0.08)',
]

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(max-width: 600px)').matches
    }
    return false
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(max-width: 600px)')
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isMobile
}

export function FallingPetals() {
  const isMobile = useIsMobile()

  const particles = useMemo(() => {
    const confettiCount = isMobile ? 6 : 12
    const sparkleCount = isMobile ? 3 : 6

    const confetti = Array.from({ length: confettiCount }).map((_, i) => ({
      type: 'confetti' as const,
      left: getRandom(0, 100),
      width: getRandom(6, 14),
      height: getRandom(4, 8),
      duration: getRandom(18, 32),
      delay: getRandom(0, 20),
      color: confettiColors[i % confettiColors.length],
      rotation: getRandom(-45, 45),
      borderRadius: getRandom(0, 1) > 0.5 ? '50%' : `${getRandom(1, 3)}px`,
    }))

    const sparkles = Array.from({ length: sparkleCount }).map((_, i) => ({
      type: 'sparkle' as const,
      left: getRandom(0, 100),
      size: getRandom(4, 10),
      duration: getRandom(20, 30),
      delay: getRandom(0, 18),
      color: sparkleColors[i % sparkleColors.length],
    }))

    return [...confetti, ...sparkles]
  }, [isMobile])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {particles.map((p, i) =>
        p.type === 'confetti' ? (
          <ConfettiPiece
            key={`confetti-${i}`}
            style={{
              left: `${p.left}%`,
              width: `${p.width}px`,
              height: `${p.height}px`,
              background: p.color,
              borderRadius: p.borderRadius,
              animation: `petal-fall ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
              transform: `rotate(${p.rotation}deg)`,
              willChange: 'transform',
            }}
          />
        ) : (
          <StarSparkle
            key={`sparkle-${i}`}
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              animation: `petal-fall ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
              willChange: 'transform',
            }}
          />
        )
      )}
    </div>
  )
}
