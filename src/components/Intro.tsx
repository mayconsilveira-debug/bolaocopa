import { useEffect, useState } from 'react'

// Abertura: a bola atravessa rolando; depois entram os títulos verticais "COPA DO MUNDO".
export default function Intro() {
  const [fly, setFly] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setFly(false), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {fly && (
        <div className="ball-fly" aria-hidden>
          <div className="bf-ball"><img src="/bola.jpg" alt="" /></div>
        </div>
      )}
      <div className="side-label left" aria-hidden>Copa do Mundo</div>
      <div className="side-label right" aria-hidden>Copa do Mundo</div>
    </>
  )
}
