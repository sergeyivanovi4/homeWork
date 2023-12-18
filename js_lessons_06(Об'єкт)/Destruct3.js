// вийміть використовуючи деструктуризацію об'єктів два перші елементи та довжину масиву в змінні a, b та length
let arr = [1,2,3,4, 5,6,7,10]

// let a = arr[0]
// let b = arr[1]

let [a, b, ...c] = arr;
let length = arr.length

console.log("a=", a)
console.log("b=", b)
console.log("остаток=", c)
console.log("length=", length)