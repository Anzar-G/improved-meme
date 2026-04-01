import { useState, useEffect } from 'react'
import { LilyDivider } from '../components/LilyDivider'
import { ScrollReveal } from '../components/ScrollReveal'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { CONFIG } from '../config'

type PullQuoteRevealState = 'hidden' | 'line-top' | 'text' | 'line-bottom' | 'complete'

export function LoveLetter() {
  const [revealState, setRevealState] = useState<PullQuoteRevealState>('hidden')
  const [isPullQuoteActive, setIsPullQuoteActive] = useState(false)
  const [showFloatingPetals, setShowFloatingPetals] = useState(false)
  const { ref: quoteSectionRef, isVisible: quoteSectionVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  })

  // Dramatic pull quote reveal sequence
  useEffect(() => {
    if (!quoteSectionVisible) return
    if (revealState === 'hidden') {
      const t1 = setTimeout(() => setRevealState('line-top'), 1000)
      return () => clearTimeout(t1)
    }
    if (revealState === 'line-top') {
      const t2 = setTimeout(() => setRevealState('text'), 600 + 300)
      return () => clearTimeout(t2)
    }
    if (revealState === 'text') {
      const t3 = setTimeout(() => setRevealState('line-bottom'), 400)
      return () => clearTimeout(t3)
    }
    if (revealState === 'line-bottom') {
      const t4 = setTimeout(() => setRevealState('complete'), 600)
      return () => clearTimeout(t4)
    }
  }, [quoteSectionVisible, revealState])

  const handlePullQuoteEnter = () => {
    setIsPullQuoteActive(true)
    setShowFloatingPetals(true)
    setTimeout(() => setShowFloatingPetals(false), 2000)
  }

  const handlePullQuoteLeave = () => {
    setIsPullQuoteActive(false)
  }

  return (
    <section className="relative z-10 py-12 md:py-24 px-4 md:px-8">
      <div className="max-w-[720px] mx-auto">
        <LilyDivider />
        {/* Isi surat — nuansa kertas surat dengan border kiri & drop cap */}
        <div className="letter-paper">
          {CONFIG.loveLetter.paragraphs.map((p, i) => (
            <ScrollReveal key={i} variant="fade-up" delay={i * 150}>
              <p className={`${i === 0 ? 'drop-cap' : ''} text-[#f5f0e8]/90 text-[0.9375rem] sm:text-[1rem] md:text-[1.1rem] leading-[1.9] mb-6 sm:mb-10`} style={{ fontFamily: '"Lora", serif' }}>
                {p}
              </p>
            </ScrollReveal>
          ))}

          {/* Pull quote — dramatic reveal */}
          <div ref={quoteSectionRef} className="flex flex-col items-center my-8 md:my-12">
            {/* Line top */}
            <div
              className="h-px bg-[#c9a0a0] transition-all duration-[600ms] ease-out"
              style={{
                width: revealState === 'line-top' || revealState === 'text' || revealState === 'line-bottom' || revealState === 'complete' ? 60 : 0,
                opacity: revealState === 'line-top' || revealState === 'text' || revealState === 'line-bottom' || revealState === 'complete' ? 1 : 0,
              }}
            />
            {/* Quote text */}
            <div
              className="relative py-6 px-4 text-center transition-[background-color,text-shadow] duration-400 rounded-lg"
              style={{
                background: isPullQuoteActive ? 'rgba(201, 160, 160, 0.08)' : 'transparent',
                textShadow: isPullQuoteActive ? '0 0 20px rgba(201, 160, 160, 0.3)' : 'none',
              }}
              onMouseEnter={handlePullQuoteEnter}
              onMouseLeave={handlePullQuoteLeave}
              onTouchStart={() => handlePullQuoteEnter()}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handlePullQuoteEnter()
                }
              }}
              aria-label="Highlight quote"
            >
              {(revealState === 'text' || revealState === 'line-bottom' || revealState === 'complete') && (
                <ScrollReveal variant="scale-up" delay={0}>
                  <p
                    className="text-[#c9a0a0] text-base sm:text-xl md:text-2xl leading-relaxed flex items-center justify-center flex-wrap gap-0"
                    style={{ fontFamily: '"Dancing Script", cursive' }}
                  >
                    <span className="ornamental-quote-open">"</span>
                    {CONFIG.loveLetter.dramaticQuote}
                    <span className="ornamental-quote-close">"</span>
                  </p>
                </ScrollReveal>
              )}
              {/* Floating petals on hover/tap */}
              {showFloatingPetals && (
                <>
                  <div
                    className="absolute w-3 h-4 rounded-full bg-[rgba(201,160,160,0.25)] pointer-events-none"
                    style={{
                      left: '20%',
                      top: '10%',
                      animation: 'petal-float 2s ease-out forwards',
                    }}
                  />
                  <div
                    className="absolute w-2 h-3 rounded-full bg-[rgba(245,240,232,0.2)] pointer-events-none"
                    style={{
                      right: '25%',
                      bottom: '20%',
                      animation: 'petal-float 2s ease-out 0.3s forwards',
                    }}
                  />
                </>
              )}
            </div>
            {/* Line bottom — grows from right to left */}
            <div
              className="h-px bg-[#c9a0a0] transition-all duration-[600ms] ease-out ml-auto"
              style={{
                width: revealState === 'complete' ? 60 : 0,
                opacity: revealState === 'complete' ? 1 : 0,
              }}
            />
          </div>

          <ScrollReveal variant="fade-up" delay={0}>
            <p className="text-[#f5f0e8]/90 text-[0.9375rem] sm:text-[1rem] md:text-[1.1rem] leading-[1.9] mb-0" style={{ fontFamily: '"Lora", serif' }}>
              {CONFIG.loveLetter.finalParagraph}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
