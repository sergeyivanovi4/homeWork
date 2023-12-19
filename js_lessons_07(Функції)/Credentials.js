// Оформіть завдання String: credentials як функцію без параметрів.
//  Використовуйте функцію capitalize із домашнього завдання з масивів.
//   Функція повинна містити виклики prompt та повертати об'єкт виду {name, surname, fatherName, fullName}
// let name = prompt('Введіть Ваше ім\'я, будьласка').trim()
// let secondName = prompt(' А зараз по-батькові, будьласка').trim()
// let lastName = prompt ('І на останок: Ваше прізвищє:').trim()

// let Name = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
// let SecondName = secondName.slice(0,1).toUpperCase() + secondName.slice(1).toLowerCase();
// let LastName = lastName.slice(0,1).toUpperCase() + lastName.slice(1).toLowerCase();

// alert('Ваше ПІБ: ' + Name + " " + SecondName + " " + LastName)

function capitalize(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

function credentials() {
    let name = prompt("Введіть Ваше ім'я, будь ласка").trim();
    let fatherName = prompt("А зараз по-батькові, будь ласка").trim();
    let surname = prompt("І на останок: Ваше прізвище").trim();

    let Name = capitalize(name);
    let FatherName = capitalize(fatherName);
    let Surname = capitalize(surname);

    let fullName = `${Name} ${FatherName} ${Surname}`;

    return {
        name: Name,
        fatherName: FatherName,
        surname: Surname,
        fullName: fullName,
    };
}

// Приклад використання:
const userCredentials = credentials();
console.log(userCredentials);