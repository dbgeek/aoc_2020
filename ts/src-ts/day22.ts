interface Game {
  Player1Cards: number[];
  Player2Cards: number[];
}

function turn(game: Game): Game {
  const { Player1Cards, Player2Cards } = game;
  const player1Play = Player1Cards.shift();
  const player2Play = Player2Cards.shift();
  player1Play > player2Play ? Player1Cards.push(player1Play, player2Play) : Player2Cards.push(player2Play, player1Play);
  return {
    Player1Cards,
    Player2Cards,
  };
}

function score(Player1Cards: number[], Player2Cards: number[]): number {
  return Player1Cards.length > 0
    ? Player1Cards.reduce((sum, val, idx, arr) => sum + val * (arr.length - idx), 0)
    : Player2Cards.reduce((sum, val, idx, arr) => sum + val * (arr.length - idx), 0);
}

function play(game: Game): number {
  let { Player1Cards, Player2Cards } = game;
  while (Player1Cards.length > 0 && Player2Cards.length > 0) {
    const round = turn({
      Player1Cards,
      Player2Cards,
    });
    Player1Cards = round.Player1Cards;
    Player2Cards = round.Player2Cards;
  }
  return score(Player1Cards, Player2Cards);
}

export { turn, play };
