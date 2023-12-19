// Оформіть завдання Login And Password як функцію, яка приймає два параметри - 
// правильний логін та пароль і повертає true якщо логін та пароль введені користувачами вірні,
//  або false якщо користувач не зміг. 
//  Функція повинна містити в собі виклики prompt для введення логіну та пароля користувачем.
// let login = prompt("Введіть Ваш логін: ")

// if (login === "admin") {
//     let parol = prompt("Введіть Ваш пароль: ")
//     if (parol === "qwerty") {
//         alert("Вітаю Вас!")
//     } else {
//         alert ("Введені не вірні дані")
//     }
// } else {
//     alert ("Введені не вірні дані")
// }

function validateLoginAndPassword(correctLogin, correctPassword) {
    let enteredLogin = prompt("Введіть Ваш логін:");

    if (enteredLogin === correctLogin) {
        let enteredPassword = prompt("Введіть Ваш пароль:");
        return enteredPassword === correctPassword;
    } else {
        return false;
    }
}

// Приклад використання:
const correctLogin = prompt("Створіть Ваш логін:");
const correctPassword = prompt("Створіть Ваш пароль:");

if (validateLoginAndPassword(correctLogin, correctPassword)) {
    alert("Вітаю Вас!");
} else {
    alert("Введені не вірні дані");
}