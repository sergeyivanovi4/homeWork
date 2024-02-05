// Переробить завдання createPerson на функцію конструктор Person.
const a = new Person("Вася", "Пупкін")
const b = new Person("Ганна", "Іванова")
const c = new Person("Єлизавета", "Петрова")

console.log(a.getFullName()) // Василь Пупкін
a.fatherName = 'Іванович' // Василь Іванович Пупкін

console.log(b.getFullName()) // Ганна Іванова
// Для цього методи і властивості заносите не в об'єкт, що створюється, а в this всередині конструктора.

function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    this.getFullName = function() {
        if (this.fatherName) {
            return `${this.name} ${this.fatherName} ${this.surname}`;
        } else {
            return `${this.name} ${this.surname}`;
        }
    };
}