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


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(S) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let phoneArr = S.replace(/[^\w]/g, '').split('')
//   let phoneTemp = []
//   let temp = []
//   for (let i = 0; i < phoneArr.length; i++) {
//     phoneTemp.push(phoneArr[i])
//     temp.push(phoneArr[i])
//     if (phoneTemp.length % 3 == 0) {
//       temp.push("-")
//     }

//   }
//   if (temp[temp.length - 2] == "-") {
//     let a = temp[temp.length - 3]
//     temp[temp.length - 3] = temp[temp.length - 2]
//     temp[temp.length - 2] = a

//   }
//   if (temp[temp.length - 1] == "-") {
//     let index = temp.indexOf(temp.length - 1)
//     temp.splice(index, 1)
//   }
//   return temp.join("")

// }

// function swapModuloTwo(phone, temp) {
//   for (let i = 0; i < phone.length; i++) {
//     if (phone.length % 3 == 2) {
//       let index = temp.indexOf(temp - 2)
//       temp.splice(index, 1)
//       temp.splice(index, 0, '-')
//     }
//   }
// }

// console.log(solution("0 - 22 1985--324"))
