'use strict';

const HashMap = require('./hashMap');
const string = 'acecarr';
// const palindrome = new HashMap();

//push each letter in string to hashmap.
// {'key': a,
// value : 1
// }

const palindrome = (string) => {
  const palindromeMap = new Map()
  let odd = 0
  for (let i = 0; i < string.length; i++) {
    if (palindromeMap.get(string[i]) === undefined) {
      palindromeMap.set(string[i], 1)
    }
    else {
      let char = palindromeMap.get(string[i])
      palindromeMap.set(string[i], char+=1)
    }
  }
  for (let i = 0; i < palindromeMap.size; i++) {
    if(palindromeMap.get(string[i]) % 2 !==0) {
      odd++
      console.log('odd', odd)
    }
    if(odd > 1) {
      return false
    }
  }
  return true
}

console.log(palindrome(''))
//create hashmap for each permutation for string.
//check if any in hashmap are palindromes.
