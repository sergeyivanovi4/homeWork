// Зробіть двовимірну таблицю з курсами між усіма можливими парами валют на кшталт таблиці Піфагора, 
// використовуючи код із завдання Currency real rate:


const names = ["   ", "USD", "EUR", "UAH", "PLN"];
const names1 = ["USD", "1", "1.03", "36.82", "4.94"];
const names2 = ["EUR", "0.97", "1", "35.80", "4.81"];
const names3 = ["UAH", "0.027", "0.028", "1", "0.13"];
const names4 = ["PLN", "0.2", "0.21", "7.45", "1"];

let str = "<table>";

// Додаємо заголовки (перший рядок таблиці)
str += "<tr>";
for (const name of names) {
    str += `<th>${name}</th>`;
}
str += "</tr>";

// Додаємо дані з кожного масиву
for (let i = 0; i < names1.length; i++) {
    str += "<tr>";
    str += `<td>${names[i]}</td>`; // Перший стовпець - назва валюти
    str += `<td>${names1[i]}</td>`;
    str += `<td>${names2[i]}</td>`;
    str += `<td>${names3[i]}</td>`;
    str += `<td>${names4[i]}</td>`;
    str += "</tr>";
}

str += "</table>";

document.write(str);