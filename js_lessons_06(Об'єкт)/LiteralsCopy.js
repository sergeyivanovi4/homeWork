// Нехай користувач введе ще одну властивість змінну. Вставте цю змінну в новий об'єкт. 
// Скопіюйте об'єкт із попереднього завдання на новий об'єкт.

let cat = {
    name: 'Конор',
    color: 'Рижий та лисий',
    age: '6 років',
    weight: '7кг',
}

cat.anything = prompt('Введіть що завгодно:')
cat.anything1 = prompt('Введіть і щє що завгодно:')

console.log(cat)


let newObject = new Object()
newObject.anything2 = prompt('Введіть і  i щє щось завгодно:')

console.log(newObject)

newObject = {...cat}

console.log(newObject)