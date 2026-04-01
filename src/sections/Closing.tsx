import { useRef, useState, useEffect } from 'react'
import { LilyDivider } from '../components/LilyDivider'
import { LilyClosing } from '../components/LilyClosing'
import { WaxSeal } from '../components/WaxSeal'
import { ScrollReveal } from '../components/ScrollReveal'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { CONFIG } from '../config'

export function Closing() {
  const closingRef = useRef<HTMLDivElement>(null)
  const { isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 })
  const [runHeartbeat, setRunHeartbeat] = useState(false)

  useEffect(() => {
    if (!isVisible) return
    const t = setTimeout(() => setRunHeartbeat(true), 1000)
    return () => clearTimeout(t)
  }, [isVisible])

  return (
    <section ref={closingRef} className="relative z-10 py-12 md:py-24 px-4 md:px-8">
      <div className="max-w-[720px] mx-auto text-center">
        <LilyDivider />
        <ScrollReveal variant="fade-in" delay={0}>
          <p className="text-[#f5f0e8]/90 text-[0.9375rem] sm:text-[1rem] md:text-[1.1rem] leading-[1.9] mb-6 sm:mb-8" style={{ fontFamily: '"Lora", serif' }}>
            {CONFIG.closing.text}
          </p>
        </ScrollReveal>
        <ScrollReveal variant="scale-up" delay={200}>
          <div className="closing-signature">
            <span
              className="inline-block"
              style={
                runHeartbeat
                  ? {
                    animation: 'heartbeat 2s cubic-bezier(0.4, 0, 0.2, 1) 3',
                  }
                  : undefined
              }
            >
              <p
                className="text-[#c9a0a0] text-lg sm:text-xl md:text-2xl mb-0"
                style={{ fontFamily: '"Dancing Script", cursive' }}
              >
                {CONFIG.closing.signature}
              </p>
            </span>
          </div>
        </ScrollReveal>
        <WaxSeal />
        <LilyClosing visible={isVisible} />
      </div>
    </section>
  )
}
