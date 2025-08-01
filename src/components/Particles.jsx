import React from 'react'

const Particles = () => {
  return (
    <div className="particles" id="particles">
      {[...Array(30)].map((_, i) => {
        const size = Math.random() * 10 + 5
        return (
          <div 
            key={i}
            className="particle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        )
      })}
    </div>
  )
}

export default Particles