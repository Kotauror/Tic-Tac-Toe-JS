// ((exports) => {

function Board() {
  this.spaces = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
}

Board.prototype.hasFreeSpaces = function() {
  array = this.availableSpaces()
  if (array.length > 0) {
    return true
  } else {
    return false
  }
}

Board.prototype.availableSpaces = function() {
  integers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  availableSp = []

  this.spaces.forEach(moveToSpaces)

  function moveToSpaces(element) {
    if (integers.includes(element)) {
      availableSp.push(element)
    }
  }
  return availableSp
}

Board.prototype.putSingOnBoard = function(number, sign) {
  str = number.toString();
  var i = this.spaces.indexOf(str);
  this.spaces[i] = sign;
  return [number, i]
}

Board.prototype.bringBackNumber = function(details) {
  var number = details[0]
  var position = details[1]
  this.spaces[position] = (number).toString()
}

Board.prototype.printSpaces = function() {
  let string = ""
  for (let i = 0; i < 9; i++) {
    let word = this.spaces[i]
    string += word + " "
    if ((i+1)%3 === 0) {
      string += "\n"
    }
  }
  return string
}

Board.prototype.isGameWon = function() {

  function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
  }

  let u1 = [this.spaces[0], this.spaces[1], this.spaces[2]].filter ( onlyUnique ).length
  let u2 = [this.spaces[3], this.spaces[4], this.spaces[5]].filter ( onlyUnique ).length
  let u3 = [this.spaces[6], this.spaces[7], this.spaces[8]].filter ( onlyUnique ).length
  let u4 = [this.spaces[0], this.spaces[3], this.spaces[6]].filter ( onlyUnique ).length
  let u5 = [this.spaces[1], this.spaces[4], this.spaces[7]].filter ( onlyUnique ).length
  let u6 = [this.spaces[2], this.spaces[5], this.spaces[8]].filter ( onlyUnique ).length
  let u7 = [this.spaces[0], this.spaces[4], this.spaces[8]].filter ( onlyUnique ).length
  let u8 = [this.spaces[2], this.spaces[4], this.spaces[6]].filter ( onlyUnique ).length

  if (u1 === 1 || u2 === 1 || u3 === 1 || u4 === 1 || u5 === 1 || u6 === 1 ||  u7 === 1 || u8 === 1) {
    return true
  } else {
    return false
  }
}

Board.prototype.winningPosition = function(ourSign) {
  array = this.availableSpaces()
  for (var i=0; i<array.length; i++) {
    var details = this.putSingOnBoard(array[i], ourSign )
    if (this.isGameWon() === true) {
      this.bringBackNumber(details)
      console.log("picking a winning move", array[i])
      return array[i]
    } else {
      this.bringBackNumber(details)
    }
  }
  return false
}
