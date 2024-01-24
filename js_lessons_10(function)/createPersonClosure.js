// Завдання в цілому, аналогічно попередньому, проте, в об'єкт заносити name, surname, fatherName та age не потрібно. name і surname повинні бути параметрами, змінні age та fatherName оголосіть через let у тілі createPersonClosure. Всередині createPersonClosure оголосіть такі функції:
// getName
// getSurname
// getFatherName
// getAge
// getFullName
// Ці функції повинні повертати змінні, оголошені функції createPersonClosure
// Наступні функції:
// setName
// setSurname
// setFatherName
// setAge
// setFullName
// повинні приймати один параметр (newName, newSurname і т.п.), перевіряти його на коректність та змінювати значення змінних, оголошених всередині createPersonClosure. Перевірки на коректність:
// ім'я, прізвище, по батькові має бути рядком з великої літери
// Вік повинен бути числом від 0 до 100.
// Якщо перевірку на коректність не пройдено, функція не повинна змінювати відповідну змінну.
// Функція setFullName повинна розбивати рядок по пробілах і заносити частини рядка в surname, name та fatherName
// Усі функції set повинні повертати те значення, яке за підсумком потрапило до внутрішньої змінної. Тобто якщо нове значення некоректне, то функція повертає старе значення
// В об'єкті-результаті createPersonClosure повинні бути лише ці 10 функцій (гетерів та сеттерів). У коді функцій this не використовується

const a = createPersonClosure("Вася", "Пупкін")
const b = createPersonClosure("Ганна", "Іванова")
console.log(a.getName())
a.setAge(15)
a.setAge(150) //не працює

b.setFullName("Петрова Ганна Миколаївна")
console.log(b.getFatherName()) //Миколаївна

// function capitalize(word) {
//     return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
// };

function createPersonClosure(name, surname) {
    let age;
    let fatherName;

    return {
        getName() {
            return name;
        },
        getSurname() {
            return surname;
        },
        getFatherName() {
            return fatherName;
        },

        getAge: () => age,
        // getFullName: function() {
        //     if (this.fatherName) {
        //         return `${this.name} ${this.fatherName} ${this.surname}`;
        //     } else {
        //         return `${this.name} ${this.surname}`;
        //     }
        getFullName: () => `${name} ${fatherName || ''} ${surname}`.trim(),

        // setName(newName) {
        //     return capitalize(name);
        // },
        // setSurName(newSurname) {
        //     return capitalize(surname);
        // },
        // setFatherName(newFatherName) {
        //     return capitalize(fatherName);
        // },
        setName: (newName) => {
            if (typeof newName === 'string' && /^[A-Z][a-z]*$/.test(newName)) {
              name = newName;
            }
            return name;
        },
      
          setSurname: (newSurname) => {
            if (typeof newSurname === 'string' && /^[A-Z][a-z]*$/.test(newSurname)) {
              surname = newSurname;
            }
            return surname;
        },
      
          setFatherName: (newFatherName) => {
            if (typeof newFatherName === 'string' && /^[A-Z][a-z]*$/.test(newFatherName)) {
              fatherName = newFatherName;
            }
            return fatherName;
        },
        setAge: (newAge) => {
            if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
              age = newAge;
            }
            return age;
        },
        setFullName(newFullName) {
            return `${name} ${fatherName || ''} ${surname}`.trim();
        }
    }
} 

// щось не розумію 