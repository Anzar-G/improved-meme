import { LilyDivider } from '../components/LilyDivider'
import { ScrollReveal } from '../components/ScrollReveal'
import { CONFIG } from '../config'

export function Moments() {
  return (
    <section className="relative z-10 py-12 md:py-24 px-4 md:px-8">
      <div className="max-w-[800px] mx-auto">
        <LilyDivider />
        <ScrollReveal variant="fade-left" delay={0}>
          <div className="flex flex-col items-center gap-2 mb-8">
            <span className="text-[#c9a0a0]/70" aria-hidden>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
              </svg>
            </span>
            <h2
              className="text-[1.75rem] sm:text-[2rem] md:text-[2.75rem] font-semibold text-[#f5f0e8] text-center"
              style={{ fontFamily: '"Cormorant Garamond", serif', letterSpacing: '0.05em' }}
            >
              {CONFIG.moments.title}
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="scale-up" delay={150}>
          <div className="polaroid-card rounded-xl p-4 sm:p-6 md:p-8">
            {CONFIG.moments.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-[#f5f0e8]/90 text-[0.9375rem] sm:text-[1rem] md:text-[1.1rem] leading-[1.9] ${i < CONFIG.moments.paragraphs.length - 1 ? 'mb-4 sm:mb-6' : ''}`}
                style={{ fontFamily: '"Lora", serif' }}
              >
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal variant="fade-in" delay={300}>
          <div className="mt-6 sm:mt-8 flex flex-col items-center gap-2">
            <p
              className="text-[#c9a0a0] text-base sm:text-lg md:text-xl text-center italic"
              style={{ fontFamily: '"Dancing Script", cursive' }}
            >
              &ldquo;{CONFIG.moments.highlightQuote}&rdquo;
            </p>
            <span className="text-[#c9a0a0]/50" aria-hidden>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
