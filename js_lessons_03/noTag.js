// Знайдіть у рядку HTML тег. Видаліть, тобто виріжте його - створіть інший рядок, 
// в якому будуть всі символи до тега і після нього 
// Тег може бути будь-яким. split і join не використовуйте, натомість 
// використовуйте indexOf і slice. .replace не використовуйте

// let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
// let result
// ........ //ваша магія
// console.log(result) //якийсь текст, в якому є один тег і всяке інше



let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
let startIndex = str.indexOf('<')
let endIndex = str.indexOf('>') + 2

result = str.slice(0, startIndex) + str.slice(endIndex)
console.log(result)