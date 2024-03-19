// Зробіть копію одного з об'єктів із завдання Literals без ключа, який введе користувач, 
// з використанням деструктурiзацiї та rest.

const cat = {
    name: 'Конор',
    color: 'Рижий та лисий',
    age: '6 років',
    weight: '7кг'
}

cat.anything = prompt('Введіть що завгодно:')

console.log(cat)



let {anything, ...rests} = cat
console.log(rests)