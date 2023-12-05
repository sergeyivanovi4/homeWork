// Попросіть користувача ввести ПІБ в три різні змінні. Використовуючи АБО || 
// додайте рядки за промовчанням, які будуть зберігатися у внутрішніх змінних якщо користувач 
// ввів порожній рядок або натиснув "Скасувати". 
// Наприклад, якщо ви на кроці введення прізвища натиснете Escape, прізвище буде "Іванов"



let firstName = prompt("Ваше прізвищє: ");
let Name = prompt("Ваше ім'я: ");
let secondName = prompt("Ваше ім'я по-батькові: ");

firstName = firstName || "Іванов"
Name = Name || "Іван"
secondName = secondName || "Іванович"


alert('Ваше ПІБ: ' +firstName +' ' +Name +' ' +secondName)

// Зробіть те саме за допомогою if та else

let firstName2 = prompt("Ваше прізвищє: ");
let Name2 = prompt("Ваше ім'я: ");
let secondName2 = prompt("Ваше ім'я по-батькові: ");

if (!firstName2 || firstName2 === " ") {
    firstName2 = "Ivanov"
}
if (!Name2 || Name2 === " ") {
    Name2 = "Ivan"
}
if (!secondName2 || secondName2 === " ") {
    secondName2 = "Ivanovi4"
} else {
    alert('Ваше ПІБ: ' +firstName2 +' ' +Name2 +' ' +secondName2)
}
