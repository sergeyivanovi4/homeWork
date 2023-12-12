// Переверніть другий масив із попереднього завдання ще раз (послідовність буде як у першому масиві),
//  використовуючи shift та unshift.


let arr = []

arr.push(prompt('Введіть перший елемент:'))
arr.push(prompt('Введіть другий елемент:'))
arr.push(prompt('Введіть третій елемент:'))
arr.push(prompt('Введіть четвертий елемент:'))
arr.push(prompt('Введіть п`ятий елемент:'))

let arrReverse = []

let a = arr.pop() 
let b = arr.pop()
let c = arr.pop()
let d = arr.pop()
let e = arr.pop()
arrReverse.push(a, b, c ,d, e)

console.log(arrReverse)

let a1 = arrReverse.shift() 
let b1 = arrReverse.shift()
let c1 = arrReverse.shift()
let d1 = arrReverse.shift()
let e1 = arrReverse.shift()
arrReverse.unshift(a1, b1, c1, d1, e1)

console.log(arrReverse)