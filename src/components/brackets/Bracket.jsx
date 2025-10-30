import "./Bracket.scss";

export default function Bracket({ leftRounds, rightRounds, finalGame }) {
  return (
    <div className="double-bracket transparent">
      {/* Left side */}
      <div className="bracket left">
        {leftRounds.map((round, rIndex) => (
          <div className="round" key={`L-${rIndex}`}>
            <h3 className="round-title">{round.title}</h3>
            <div className="matches">
              {round.games.map((game) => (
                <div className="match" key={game.id}>
                  <div className="player">{game.player1.name}</div>
                  <div className="player">{game.player2.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Final */}
      <div className="final-round">
        <h3 className="round-title">Final</h3>
        <div className="match final">
          <div className="player">{finalGame.player1.name}</div>
          <div className="player">{finalGame.player2.name}</div>
        </div>
      </div>

      {/* Right side */}
      <div className="bracket right">
        {rightRounds.map((round, rIndex) => (
          <div className="round" key={`R-${rIndex}`}>
            <h3 className="round-title">{round.title}</h3>
            <div className="matches">
              {round.games.map((game) => (
                <div className="match" key={game.id}>
                  <div className="player">{game.player1.name}</div>
                  <div className="player">{game.player2.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
