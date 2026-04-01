import { ScrollReveal } from '../components/ScrollReveal'
import { CONFIG } from '../config'

export function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Ambient glow spots */}
      <div className="absolute top-[15%] left-[10%] w-[300px] h-[300px] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,126,179,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}
        aria-hidden
      />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,169,240,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
        aria-hidden
      />

      {/* Main content — staggered layout */}
      <div className="relative z-10 flex flex-col items-center max-w-lg">
        {/* Birthday emoji cluster */}
        <ScrollReveal variant="scale-up" delay={0}>
          <div className="flex items-end gap-3 mb-6">
            <span className="text-4xl sm:text-5xl" style={{ animation: 'float-gentle 3s ease-in-out infinite' }}>🎈</span>
            <span className="text-5xl sm:text-6xl" style={{ animation: 'float-gentle 3s ease-in-out 0.5s infinite' }}>🎂</span>
            <span className="text-4xl sm:text-5xl" style={{ animation: 'float-gentle 3s ease-in-out 1s infinite' }}>🎈</span>
          </div>
        </ScrollReveal>

        {/* Title */}
        <ScrollReveal variant="fade-in" delay={200}>
          <h1
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-medium text-center leading-tight"
            style={{ fontFamily: '"Dancing Script", cursive', letterSpacing: '0.03em' }}
          >
            <span className="gradient-text">{CONFIG.hero.title}</span>
          </h1>
        </ScrollReveal>

        {/* Subtitle with decorative line */}
        <ScrollReveal variant="fade-up" delay={400}>
          <div className="mt-4 flex flex-col items-center gap-4">
            <div className="birthday-divider w-full max-w-xs">
              <div className="line line-left" />
              <span className="text-lg">✨</span>
              <div className="line line-right" />
            </div>
            <p className="text-[#b8a9f0]/80 text-sm sm:text-base uppercase tracking-[0.25em] font-body text-center">
              {CONFIG.hero.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Age badge */}
        <ScrollReveal variant="fade-up" delay={600}>
          <div className="mt-8">
            <div className="birthday-badge">
              <span>🎉</span>
              <span className="font-body text-sm tracking-wide">{CONFIG.eventDate}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute flex flex-col items-center gap-2 opacity-50 z-10"
        style={{
          bottom: 'max(2.5rem, calc(env(safe-area-inset-bottom) + 1rem))',
          animation: 'scroll-bounce 2s ease-in-out infinite',
        }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#ffb088]">Scroll</span>
        <div className="w-6 h-9 rounded-full border border-[rgba(255,176,136,0.3)] flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-[#ffb088]/60" />
        </div>
      </div>
    </section>
  )
}
