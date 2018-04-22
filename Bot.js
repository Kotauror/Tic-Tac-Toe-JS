function Bot(sign) {
  this.sign = sign
}


Bot.prototype.makeMove = function(board) {
  let output = this.takemiddle(board)
  if (output === true) {
    return "5"
  } else {
    let output2 = this.takeWinning(board)
    if (output2[0] === true) {
      return output2[1]
    } else {
      let output3 = this.randomMove(board)
      return output3
    }
  }
}

Bot.prototype.takemiddle = function(board) {
  spacesAvailableToPick = board.availableSpaces()
  if (spacesAvailableToPick.includes("5")) {
    board.putSingOnBoard("5", this.sign)
    return true
  } else {
    return false
  }
}

Bot.prototype.takeWinning = function(board) {
  winningPos = board.winningPosition(this.sign)
  if (winningPos !== false) {
    board.putSingOnBoard(winningPos, this.sign)
    return [true, winningPos]
  } else {
    return false
  }
}

Bot.prototype.randomMove = function(board) {
  console.log("im in random move")
  spacesAvailableToPick = board.availableSpaces()
  randomSpace = spacesAvailableToPick[Math.floor(Math.random() * spacesAvailableToPick.length)]
  board.putSingOnBoard(randomSpace, this.sign)
  return randomSpace
}
