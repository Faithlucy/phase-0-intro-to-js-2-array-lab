// Write your solution
const cats=["Milo","Otis","Garfield"]
function destructivelyAppendCat (name) {
    cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat (){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat (name){
   return [...cats, "Broom"]
}
function prependCat (name){
    return["Arnold",...cats]
} 
function removeLastCat (){
    const newCats= cats.slice(0,-1)
    return newCats
}

function removeFirstCat(){
    const newerCats= cats.slice(1)
    return newerCats
}