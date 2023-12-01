// На основі попереднього завдання зробіть тег великими літерами. replace, split і join не використовуйте, 
// натомість використовуйте indexOf і slice,
// let str = "якийсь текст у якому є один тег <br /> і всяке інше"
// let result
// ........ //ваша магія
// console.log(result) //якийсь текст, в якому є один тег <BR /> і всяке інше


let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
let startIndex = str.indexOf('<')
let endIndex = str.indexOf('>') + 2

let tag = (str.slice(startIndex, endIndex)).toUpperCase()

result = str.slice(0, startIndex) + tag + str.slice(endIndex)
console.log(result)