// Переробіть попереднє завдання, винісши методи у прототип. Для цього замість присвоєння
// //  в this занесіть їх у об'єкт Person.prototype. Після цієї змiни все має працювати по старому:
// const a = new Person("Вася", "Пупкін")
// const b = new Person("Ганна", "Іванова")
// const c = new Person("Єлизавета", "Петрова")

// console.log(a.getFullName()) // Василь Пупкін
// a.fatherName = 'Іванович' // Василь Іванович Пупкін

// console.log(b.getFullName()) // Ганна Іванова


function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getFullName = function() {
    if (this.fatherName) {
        return `${this.name} ${this.fatherName} ${this.surname}`;
    } else {
        return `${this.name} ${this.surname}`;
    }
};

const a = new Person("Вася", "Пупкін");
const b = new Person("Ганна", "Іванова");
const c = new Person("Єлизавета", "Петрова");

console.log(a.getFullName()); // Вася Пупкін
a.fatherName = 'Іванович';
console.log(a.getFullName()); // Вася Іванович Пупкін

console.log(b.getFullName()); // Ганна Іванова
