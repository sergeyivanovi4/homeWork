// Перетворіть рядок, введений користувачем, таким чином, 
// щоб перша літера ставала великою, а решта - маленькими:

// let str = "cANBerRa"
// let result
// ..... ваш код
// console.log(result) //Canberra


let str = "cANBerRa"
let result = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();

console.log(result)