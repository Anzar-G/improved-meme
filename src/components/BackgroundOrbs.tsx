const orbs = [
  {
    style: {
      top: '15%',
      left: '10%',
      width: '500px',
      height: '500px',
      background: 'radial-gradient(circle, rgba(255, 126, 179, 0.05) 0%, transparent 70%)',
      filter: 'blur(50px)',
    },
  },
  {
    style: {
      top: '40%',
      right: '5%',
      left: 'auto',
      width: '550px',
      height: '550px',
      background: 'radial-gradient(circle, rgba(184, 169, 240, 0.04) 0%, transparent 70%)',
      filter: 'blur(50px)',
    },
  },
  {
    style: {
      top: '65%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '480px',
      height: '480px',
      background: 'radial-gradient(circle, rgba(255, 209, 102, 0.035) 0%, transparent 70%)',
      filter: 'blur(50px)',
    },
  },
  {
    style: {
      top: '85%',
      left: '15%',
      width: '420px',
      height: '420px',
      background: 'radial-gradient(circle, rgba(126, 214, 196, 0.04) 0%, transparent 70%)',
      filter: 'blur(50px)',
    },
  },
]

export function BackgroundOrbs() {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden
      >
        {orbs.map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              ...orb.style,
              position: 'absolute',
            }}
          />
        ))}
      </div>
      {/* Vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 55%, rgba(15, 11, 30, 0.25) 100%)',
        }}
        aria-hidden
      />
    </>
  )
}
