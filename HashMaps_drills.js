const HashMap = require('./hashMap')

function main() {
  const lor = new HashMap()
  lor.MAX_LOAD_RATIO = .5
  lor.SIZE_RATIO = 3
  
  lor.set('Hobbit', 'Bilbo')
  lor.set('Hobbit', 'Frodo')
  lor.set('Wizard', 'Gandolf')
  lor.set('Human', 'Aragorn')
  lor.set('Elf', 'Legolas')
  lor.set('Maiar', 'The Necromancer')
  lor.set('Maiar', 'Sauron')
  lor.set('RingBearer', 'Gollum')
  lor.set('LadyOfLight', 'Galadriel')
  lor.set('HalfElven', 'Arwen')
  lor.set('Ent', 'Treebeard')
  console.log('Maiar key:', lor.get('Maiar'))
  console.log('Hobbit key:', lor.get('Hobbit'))

  return lor
}

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.'; 
  let str2 = 'Hello World.';
  let map1 = new HashMap(); 
  map1.set(str1,10); // -> key: 'Hello World.', value: 10
  map1.set(str2,20); // -> (keys are the same) value: 20 
  let map2 = new HashMap();
  let str3 = str1; 
  let str4 = str2; 
  map2.set(str3,20); // key: 'Hello World.', value: 20
  map2.set(str4,10); // value: 10

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}

console.log(WhatDoesThisDo())