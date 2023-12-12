// Додайте до масиву п'ять введених користувачем через prompt елементів (використовуйте push). 
// Створіть інший масив із цими ж елементами в зворотньому напрямку. 
// Для цього витягайте елементи з першого масиву використовуючи pop, 
// додайте їх до другого використовуючи push.

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