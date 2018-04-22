function Game() {
  this.board = new Board
  this.bot_1 = new Bot("X")
  this.bot_2 = new Bot("Y")
  this.active_player = this.bot_1
  this.passive_player = this.bot_2
}

Game.prototype.playGame = function() {
  while (this.board.isGameWon() == false) {
    this.bot_1.makeMove(this.board)
    this.switchActivePlayer()
    console.log(this.board.printSpaces())
    if (this.board.isGameWon() == false) {
      this.bot_2.makeMove(this.board)
      this.switchActivePlayer()
      console.log(this.board.printSpaces())
    } else {
      return "Game over"
    }
  }
  return "Game over"
}

Game.prototype.switchActivePlayer = function() {
  if (this.active_player === this.bot_1) {
    this.active_player = this.bot_2
    this.passive_player = this.bot_1
  } else {
    this.active_player = this.bot_1
    this.passive_player = this.bot_2
  }
}

Game.prototype.playOneMove = function() {
  if (this.board.isGameWon() == false) {
    var moveMade = this.active_player.makeMove(this.board)
    console.log(moveMade)
    this.switchActivePlayer()
    console.log(this.board.printSpaces())
    return moveMade
  }
}
