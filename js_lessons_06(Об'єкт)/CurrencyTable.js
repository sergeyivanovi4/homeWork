// Зробіть двовимірну таблицю з курсами між усіма можливими парами валют на кшталт таблиці Піфагора, 
// використовуючи код із завдання Currency real rate:

const apiUrl = `https://open.er-api.com/v6/latest/USD`;


fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
        // Перевірка, чи є валюти в списку
        if (data.error) {
            console.error("Помилка при отриманні курсу обміну:", data.error);
            return;
        }

        // Отримання курсу обміну
        const exchangeRate = data.rates;

        // Перевірка, чи є валюти в списку
        if (!exchangeRate) {
            console.error("Помилка: Валюта для конвертації не знайдена.");
            return;
        }

        const currencies = Object.keys(exchangeRate);

        let str = "<table>"
        str += "<tr>";
        str += "<th>Валюта</th>";

        for (const name of currencies) {
            str += `<th>${name}</th>`;
        }
        str += "</tr>";


        for (const currency1 of currencies) {
            str += "<tr>";
            str += `<td>${currency1}</td>`; 
  
            for (const currency2 of currencies) {
                const rate = exchangeRate[currency2] / exchangeRate[currency1];
                str += `<td>${rate}</td>`;  // rate.toFixed(2) - так менш цифр буде=))
            }
            str += "</tr>";
        }
        
        str += "</table>";
        document.write(str) 


        console.log(exchangeRate)
    })


    // 
//  
    // Old lessons works:
// 


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

// АБО АБО АБО АБО АБО це я вже після лекцій з функціями
// і я НЕ ЗРОЗУМІВ - як мені підставити значення валют з сайта  і коду минулого заняття

const Names = [
    ["   ", "USD", "EUR", "UAH", "PLN"],
    ["USD", "1", "1.03", "36.82", "4.94"],
    ["EUR", "0.97", "1", "35.80", "4.81"],
    ["UAH", "0.027", "0.028", "1", "0.13"],
    ["PLN", "0.2", "0.21", "7.45", "1"]
];

function table (multiplyTable) {
    let str = "<table>";
    for (const columns of multiplyTable) {
        // str += `<tr><td>${columns}</td></tr>`;
        str += "<tr>";
        for (const row of columns) {
            str += `<td>${row}</td>`;
        }
        str += "</tr>";
    }
    str += "</table>";
    return str;
}

let tableHTML = table(Names);
document.write(tableHTML);

