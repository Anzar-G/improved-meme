import { CONFIG } from '../config'

export function Footer() {
  return (
    <footer className="relative z-10 py-10 md:py-14 px-4 border-t border-[rgba(255,176,136,0.08)]">
      <div className="footer-flourish flex flex-col items-center gap-5">
        {/* Birthday emoji row */}
        <div className="flex items-center gap-3" aria-hidden>
          {['🎈', '🎂', '🎉', '🎁', '🎈'].map((emoji, i) => (
            <span
              key={i}
              className="text-lg opacity-40"
              style={{
                animation: `float-gentle 3s ease-in-out ${i * 0.4}s infinite`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>

        {/* Date text */}
        <p className="text-[#ffb088]/50 text-xs tracking-[0.2em] uppercase">
          {CONFIG.footer.text}
        </p>

        {/* Made with love line */}
        <p className="text-[#b8a9f0]/25 text-[10px] tracking-widest uppercase mt-2">
          Made with 💛
        </p>
      </div>
    </footer>
  )
}
