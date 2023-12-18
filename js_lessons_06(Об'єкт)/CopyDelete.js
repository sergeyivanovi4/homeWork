// Зробіть копію одного з об'єктів із завдання Literals без ключа, який введе користувач, 
// з використанням деструктурiзацiї та rest.

const cat = {
    name: 'Конор',
    color: 'Рижий та лисий',
    age: '6 років',
    weight: '7кг'
}

cat.anything = prompt('Введіть що завгодно:')
cat.anything1 = prompt('Введіть і щє що завгодно:')
console.log(cat)



let {name, color, age, weight, ...rests} = cat
console.log(rests)