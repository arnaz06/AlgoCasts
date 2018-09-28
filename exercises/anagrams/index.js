// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  let mapStringA = mapString(stringA)
  let mapStringB = mapString(stringB)
  
  if(Object.keys(mapStringA).length!==Object.keys(mapStringB).length){
    return false
  }
  for (let char in mapStringA) {
    if (mapStringA[char] !== mapStringB[char]) {
      return false
    }
  }
  return true
}

function mapString(string){
  let chars={}
  for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
    if(!chars[char]){
      chars[char]=1
    }else{
      chars[char]++
    }
  }
  return chars
}

module.exports = anagrams;
