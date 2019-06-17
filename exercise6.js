const groupAnagrams = (strArr) => {
  const anagramMap = new Map()
  strArr.forEach((word) => {
    let sorted = alphabetize(word)
    if(anagramMap.has(sorted)) {
      anagramMap.get(sorted).push(word)
    }
    else {
      anagramMap.set(sorted, [word])
    }
  }) 
  return [...anagramMap.values()]
}

const alphabetize = word => {
  let alphebtized = word.split('').sort().join('')
  return alphebtized
}

console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))
// [['east', 'eats', 'teas'], ['race', 'acre'], ['cars', 'arcs']]