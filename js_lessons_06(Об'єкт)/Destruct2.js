// вийміть використовуючи деструктуризацію імена дітей у змінні name1 та name2

let obj = {name: 'Ivan',
           surname: 'Petrov',
           children: [{name: 'Maria'}, {name: 'Nikolay'}]}

let {children: [{name: name1}, {name: name2}]} = obj

console.log("Ім'я першої дитини:", name1)
console.log("Ім'я другої дитини:", name2)