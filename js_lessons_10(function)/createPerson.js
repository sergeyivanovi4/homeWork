// Створіть функцію createPerson, яка приймає два параметри: name та surname, і повертає об'єкт із ключами name,
//  surname, getFullName. getFullName має бути функцією, яка працює з об'єктом через this,
//   а так ж готова до того, що в об'єкті потім додати ключ fatherName

const a = createPerson("Вася", "Пупкін")
const b = createPerson("Ганна", "Іванова")
const c = createPerson("Єлизавета", "Петрова")

console.log(a.getFullName()) //Вася Пупкін
a.fatherName = 'Іванович'    
console.log(a.getFullName()) //Вася Іванович Пупкін

console.log(b.getFullName()) //Ганна Іванова

function createPerson(name, surname) {
    return {
        name,
        surname,
        getFullName: function() {
            if (this.fatherName) {
                return `${this.name} ${this.fatherName} ${this.surname}`;
              } else {
                return `${this.name} ${this.surname}`;
              }
        }
    } 
}