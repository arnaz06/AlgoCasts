// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversed= '' 
  let nToString= n.toString()
  for(char of nToString){
    reversed= char + reversed 
  }
  return parseInt(reversed) * Math.sign(n)
  //1
  // if(n<0){
  //   return parseInt(reversed) *-1
  // }
  // return parseInt(reversed)
  //2
  // if(Math.sign(n)==-1){
  //   reversed = '-'+reversed
  // }
  // return parseInt(reversed)
  }

module.exports = reverseInt;
