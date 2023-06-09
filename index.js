// Write your solution here!
var cats =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
   cats.push(name);
}

function destructivelyPrependCat(name){
   cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
   cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
   cats.shift(name);
}

function appendCat(name){
   return [...cats, name]
}

function prependCat(name){
    let y = [...cats] 
    y.unshift(name)
    return y
}

function destructivelyAppendCat(name){
   cats.push(name);
}

function removeLastCat(){
    let y = [...cats] 
    y.pop(name)
    return y
}

function removeFirstCat(name){
  let y = [...cats]
  y.shift()
  return y
}
