import './WelcomeModal.css'
import { CONFIG } from '../config'

interface WelcomeModalProps {
    isVisible: boolean
    onEnter: () => void
}

export function WelcomeModal({ isVisible, onEnter }: WelcomeModalProps) {
    return (
        <div className={`welcome-overlay ${!isVisible ? 'hidden' : ''}`}>
            {/* Floating confetti shapes */}
            <div className="welcome-petals">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={`welcome-petal wp-${i + 1}`}>
                        <span style={{
                            fontSize: '1.5rem',
                            opacity: 0.3,
                            display: 'block',
                            transform: `rotate(${i * 60}deg)`,
                        }}>
                            {['🎈', '✨', '🎀', '🌟', '🎉', '💫'][i]}
                        </span>
                    </div>
                ))}
            </div>

            {/* Sparkle Particles */}
            <div className="sparkle-container">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="sparkle" />
                ))}
            </div>

            {/* Main Card */}
            <div className="welcome-card">
                {/* Birthday Cake Emoji as Main Icon */}
                <div className="welcome-lily-icon">
                    <span style={{
                        fontSize: '5rem',
                        display: 'block',
                        filter: 'drop-shadow(0 0 20px rgba(255, 176, 136, 0.3))',
                    }}>
                        🎂
                    </span>
                </div>

                {/* Decorative Line */}
                <div className="welcome-line">
                    <div className="line-segment"></div>
                    <span className="line-lily">✨</span>
                    <div className="line-segment"></div>
                </div>

                {/* Greeting */}
                <h1 className="welcome-greeting">{CONFIG.welcome.title}</h1>

                {/* For */}
                <p className="welcome-for">{CONFIG.welcome.intro}</p>

                {/* Name */}
                <h2 className="welcome-name">{CONFIG.recipientName}</h2>

                {/* Subtitle */}
                <p className="welcome-subtitle">
                    {CONFIG.welcome.subtitle}
                </p>

                {/* Enter Button */}
                <button className="welcome-button" onClick={onEnter}>
                    <span className="button-icon">🎁</span>
                    <span>{CONFIG.welcome.buttonText}</span>
                </button>

                {/* Date */}
                <p className="welcome-date">{CONFIG.eventDate}</p>
            </div>

            {/* Sound Hint */}
            <div className="sound-hint">
                <span className="sound-icon">🎵</span>
                <span>{CONFIG.welcome.soundHint}</span>
            </div>
        </div>
    )
}
