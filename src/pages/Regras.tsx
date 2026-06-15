export default function Regras() {
  return (
    <div className="page">
      <div className="page-head">
        <h1>Regulamento Oficial</h1>
        <span className="page-sub">Bolão da We · Copa 2026</span>
      </div>

      <div className="rule-alert">
        <span className="ra-icon">⚠</span>
        <div>
          <b>A pontuação muda a cada jogo!</b>
          <p>O ranking é parcial e atualiza ao vivo: pontos de grupo mudam conforme a classificação, os gols do artilheiro somam a cada partida e os pontos do país campeão só travam quando a seleção é eliminada. Fique de olho — sua posição vai oscilar até o fim da Copa.</p>
        </div>
      </div>

      <section className="rule-block">
        <h2><span className="rn">I</span> Pontuação dos grupos</h2>
        <p>Para cada grupo, vocês colocaram qual seleção passará em 1º e qual passará em 2º. Há duas formas de pontuar:</p>
        <ul className="rule-list">
          <li><b>1 ponto</b> — acertou a seleção que se classificou, mas na posição trocada (disse 1º e passou em 2º, ou vice-versa).</li>
          <li><b>2 pontos</b> — acertou a seleção <b>e</b> a posição exata (1º como 1º, ou 2º como 2º).</li>
        </ul>
        <p className="rule-obs">OBS: seleções que avançam em terceiro lugar <b>não</b> contam para o bolão.</p>
      </section>

      <section className="rule-block">
        <h2><span className="rn">II</span> Pontuação de jogadores e seleção</h2>
        <div className="rule-card-grid">
          <div className="rule-card">
            <h3>Artilheiro da Copa</h3>
            <p><b>5 pontos</b> por acertar o artilheiro. <b>+1 ponto</b> a cada gol que ele marcar.</p>
            <p className="ex">Ex.: escolheu o Kaká e ele foi artilheiro com 8 gols → 5 + 8 = <b>13 pontos</b>.</p>
          </div>
          <div className="rule-card">
            <h3>País Campeão</h3>
            <p>Quanto mais longe o país escolhido for, mais pontos (não acumulativo):</p>
            <table className="rule-table">
              <tbody>
                <tr><td>Caiu na fase de grupos</td><td className="neg">−2</td></tr>
                <tr><td>16 avos</td><td>1</td></tr>
                <tr><td>Oitavas</td><td>2</td></tr>
                <tr><td>Quartas</td><td>4</td></tr>
                <tr><td>Semifinal</td><td>6</td></tr>
                <tr><td>Final</td><td>8</td></tr>
                <tr><td>Campeão</td><td className="pos">12</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rule-card">
            <h3>Melhor Jogador</h3>
            <p>Acertou o craque da Copa → <b>10 pontos</b>.</p>
          </div>
        </div>
      </section>

      <section className="rule-block">
        <h2><span className="rn">III</span> Critérios de desempate</h2>
        <p>Empate em 1º lugar é resolvido nesta ordem:</p>
        <ol className="rule-ol">
          <li>Quem acertou o <b>País Campeão</b>.</li>
          <li>Quem acertou o <b>Artilheiro</b> (mais gols do escolhido vence).</li>
          <li>Maior número de <b>acertos exatos de posição</b> na fase de grupos (mais vezes 2 pontos).</li>
        </ol>
      </section>

      <section className="rule-block">
        <h2><span className="rn">IV</span> Prêmios</h2>
        <div className="prizes">
          <div className="prize first"><span className="pl">1º Lugar</span><span className="pv">85%</span><span className="pd">do montante</span></div>
          <div className="prize second"><span className="pl">2º Lugar</span><span className="pv">15%</span><span className="pd">do montante</span></div>
          <div className="prize surprise"><span className="pl">Bônus</span><span className="pv">★</span><span className="pd">prêmio surpresa</span></div>
        </div>
      </section>
    </div>
  )
}
