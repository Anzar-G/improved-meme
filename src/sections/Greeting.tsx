import { ScrollReveal } from '../components/ScrollReveal'
import { CONFIG } from '../config'

// Split the long greeting text into segments for visual variety
function splitGreetingText(text: string) {
  // We'll manually break at natural pause points (emoji boundaries)
  const segments = []
  
  // Opening explosion
  const openIdx = text.indexOf('HAHAHA')
  segments.push(text.slice(0, openIdx).trim())
  
  // Encouragement block
  const secondIdx = text.indexOf('Semoga di umur')
  segments.push(text.slice(openIdx, secondIdx).trim())
  
  // Challenge/strength block
  const thirdIdx = text.indexOf('Terima kasih sudah sekuat')
  segments.push(text.slice(secondIdx, thirdIdx).trim())
  
  // Growth & wisdom block
  const fourthIdx = text.indexOf('Sesedih apapun')
  segments.push(text.slice(thirdIdx, fourthIdx).trim())
  
  // Closing wishes
  segments.push(text.slice(fourthIdx).trim())
  
  return segments
}

export function Greeting() {
  const segments = splitGreetingText(CONFIG.greeting.text)

  return (
    <section className="relative z-10 py-16 md:py-28 px-4 md:px-8">
      <div className="max-w-[780px] mx-auto">

        {/* Section header */}
        <ScrollReveal variant="fade-in" delay={0}>
          <div className="text-center mb-12">
            <div className="birthday-divider max-w-xs mx-auto mb-6">
              <div className="line line-left" />
              <span className="text-xl">💌</span>
              <div className="line line-right" />
            </div>
            <h2
              className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-semibold gradient-text inline-block"
              style={{ fontFamily: '"Cormorant Garamond", serif', letterSpacing: '0.04em' }}
            >
              {CONFIG.greeting.title}
            </h2>
          </div>
        </ScrollReveal>

        {/* Card 1 — Opening blast, left-aligned accent */}
        <ScrollReveal variant="fade-right" delay={100}>
          <div className="greeting-card mb-8 relative overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 left-0 w-20 h-20 opacity-30 pointer-events-none" 
              style={{ background: 'linear-gradient(135deg, rgba(255,126,179,0.3) 0%, transparent 70%)' }} 
              aria-hidden 
            />
            <div className="absolute -top-1 -left-1" aria-hidden>
              <span className="text-2xl opacity-60">🎊</span>
            </div>
            <p
              className="text-[#fef6ee]/90 text-[0.95rem] sm:text-base md:text-[1.05rem] leading-[1.95] relative z-10"
              style={{ fontFamily: '"Lora", serif' }}
            >
              {segments[0]}
            </p>
          </div>
        </ScrollReveal>

        {/* Card 2 — Encouragement, centered pull-quote style */}
        <ScrollReveal variant="fade-left" delay={100}>
          <div className="greeting-card mb-8 border-l-[3px] border-l-[#ffd166]/40 relative">
            <div className="absolute top-3 right-3" aria-hidden>
              <span className="text-xl opacity-40">💪</span>
            </div>
            <p
              className="text-[#fef6ee]/90 text-[0.95rem] sm:text-base md:text-[1.05rem] leading-[1.95]"
              style={{ fontFamily: '"Lora", serif' }}
            >
              {segments[1]}
            </p>
          </div>
        </ScrollReveal>

        {/* Pull Quote highlight */}
        <ScrollReveal variant="scale-up" delay={100}>
          <div className="pull-quote my-10 text-center">
            <p
              className="text-[#ffd166]/90 text-base sm:text-lg md:text-xl leading-relaxed font-medium"
              style={{ fontFamily: '"Cormorant Garamond", serif', letterSpacing: '0.02em' }}
            >
              Jangan pernah nyerah untuk hal apapun itu ya, untuk umur kamu yang baru dan untuk kedepannya 🙆🏻‍♀️
            </p>
          </div>
        </ScrollReveal>

        {/* Card 3 — Be strong, right accent */}
        <ScrollReveal variant="fade-right" delay={100}>
          <div className="greeting-card mb-8 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(184,169,240,0.4) 0%, transparent 70%)' }}
              aria-hidden
            />
            <div className="absolute top-3 right-3" aria-hidden>
              <span className="text-xl opacity-40">🌟</span>
            </div>
            <p
              className="text-[#fef6ee]/90 text-[0.95rem] sm:text-base md:text-[1.05rem] leading-[1.95]"
              style={{ fontFamily: '"Lora", serif' }}
            >
              {segments[2]}
            </p>
          </div>
        </ScrollReveal>

        {/* Card 4 — Growth, slightly different background */}
        <ScrollReveal variant="fade-left" delay={100}>
          <div className="greeting-card mb-8 relative"
            style={{
              background: 'linear-gradient(135deg, rgba(126,214,196,0.05) 0%, rgba(184,169,240,0.04) 50%, rgba(255,176,136,0.05) 100%)',
              borderColor: 'rgba(126,214,196,0.15)',
            }}
          >
            <div className="absolute bottom-3 left-3" aria-hidden>
              <span className="text-xl opacity-40">🌱</span>
            </div>
            <p
              className="text-[#fef6ee]/90 text-[0.95rem] sm:text-base md:text-[1.05rem] leading-[1.95]"
              style={{ fontFamily: '"Lora", serif' }}
            >
              {segments[3]}
            </p>
          </div>
        </ScrollReveal>

        {/* Card 5 — Closing wishes, special golden border */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="greeting-card mb-8 relative overflow-hidden"
            style={{
              borderColor: 'rgba(255,209,102,0.2)',
              background: 'linear-gradient(135deg, rgba(255,209,102,0.06) 0%, rgba(255,176,136,0.04) 50%, rgba(255,126,179,0.05) 100%)',
            }}
          >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,209,102,0.3), transparent)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 6s linear infinite',
              }}
              aria-hidden
            />
            <div className="absolute top-3 left-3" aria-hidden>
              <span className="text-xl opacity-50">🎂</span>
            </div>
            <div className="absolute bottom-3 right-3" aria-hidden>
              <span className="text-xl opacity-50">🫶</span>
            </div>
            <p
              className="text-[#fef6ee]/90 text-[0.95rem] sm:text-base md:text-[1.05rem] leading-[1.95] relative z-10"
              style={{ fontFamily: '"Lora", serif' }}
            >
              {segments[4]}
            </p>
          </div>
        </ScrollReveal>

        {/* Signature */}
        <ScrollReveal variant="scale-up" delay={200}>
          <div className="text-center mt-12">
            <div className="birthday-divider max-w-[200px] mx-auto mb-4">
              <div className="line line-left" />
              <span className="text-lg">🤟🏻</span>
              <div className="line line-right" />
            </div>
            <p
              className="text-lg sm:text-xl md:text-2xl gradient-text inline-block"
              style={{ fontFamily: '"Dancing Script", cursive' }}
            >
              — {CONFIG.senderName}
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
