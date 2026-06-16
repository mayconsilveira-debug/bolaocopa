// Faixas laterais fixas "COPA DO MUNDO" (overlay independente do menu).
// A bola desce pela faixa e o texto é revelado atrás dela (clip top→bottom).
export default function Intro() {
  return (
    <>
      <div className="wc-band left" aria-hidden>
        <div className="wc-text">Copa do Mundo</div>
        <div className="wc-ball"><img src="/bola.jpg" alt="" /></div>
      </div>
      <div className="wc-band right" aria-hidden>
        <div className="wc-text">Copa do Mundo</div>
        <div className="wc-ball"><img src="/bola.jpg" alt="" /></div>
      </div>
    </>
  )
}
