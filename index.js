
const cats=['Milo',"Otis","Garfield"]
function destructivelyAppendCat(name){cats.push(name);return cats}
function destructivelyPrependCat(name){cats.unshift(name); return cats}
function destructivelyRemoveLastCat(){cats.pop(); return cats}
function destructivelyRemoveFirstCat(){cats.shift(); return cats}
function appendCat(name){const cats2=[...cats.slice(),name]; return cats2}
function prependCat(name){const cats3=[name,...cats.slice()];return cats3}
function removeLastCat(){const cats4=[...cats.slice(0,2)];return cats4}
function removeFirstCat(){const cats5=[...cats.slice(-2)];return cats5}