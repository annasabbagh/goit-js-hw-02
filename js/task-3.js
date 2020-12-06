"use strict";

const findLongestWord = function(string) {
  const stringNormalized = string.split(' ');
  let result = stringNormalized[0];

  for(let i = 1 ; i < stringNormalized.length ; i += 1){
    if(result.length < stringNormalized[i].length){
    result = stringNormalized[i];
    } 
  }
  return result;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'
