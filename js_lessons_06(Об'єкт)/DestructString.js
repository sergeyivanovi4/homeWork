// напишіть код, який використовуючи деструктуризацію покладе:
// Число в змінну number
// літеру a в змінну s1
// літеру b у змінну s2
// літеру c у змінну s3
let arr = [1, "abc"]

let [number,[s1,s2,s3]] = arr

console.log("Число:", number)
console.log("Літера a:", s1)
console.log("Літера b:", s2)
console.log("Літера c:", s3)