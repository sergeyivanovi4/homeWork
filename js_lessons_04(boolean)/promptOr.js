// Для завдання Number: age використовуючи АБО || вивести повідомлення про помилку (alert)
//  якщо користувач не введе вік або натисне скасування 
//  (тобто prompt видасть порожній рядок або null, що інтерпретується як false).




let ageInput = prompt("Введіть свій вік:");

if (!ageInput || ageInput.trim() === "") {
    alert("Ви не ввели вік або натиснули скасування. Будь ласка, введіть свій вік.");
} else {
    alert("Ваш вік: " + ageInput);
}

// У цьому коді, якщо ageInput має значення null (яке може бути повернене, якщо користувач натисне "Cancel"
//  у prompt), або якщо ageInput є порожнім рядком (після видалення пробілів за допомогою trim), 
// виводиться повідомлення про помилку. В іншому випадку виводиться повідомлення з введеним віком.





// Другий варіант

let age1 = prompt("Скільки вам років?")
if (!age1) {
    alert('Ви не ввели вік або натиснули скасування. Будь ласка, введіть свій вік.')
} else {
    alert("Ваш вік: " + age1)
}





// Третій варіант
let age2 = prompt("Скільки вам років?")
let numderAge2 = +age2 > 0

alert(numderAge2 ? 'Дякую' : "Не вірно ввели")


