//  Оформіть завдання Currency Table як функцію без параметрів, яка складає отримані дані
//  у внутрішній двовимірний масив, після чого відображає його використовуючи функцію із завдання For Table


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
        const multiplyTable = [];

        for (const currency1 of currencies) {
            const row = [];
            for (const currency2 of currencies) {
                const rate = exchangeRate[currency2] / exchangeRate[currency1];
                row.push(rate.toFixed(2));
            }
            multiplyTable.push([currency1, ...row]);
        }

        const tableHTML = table(multiplyTable);
        document.write(tableHTML);

        console.log(exchangeRate)
    });

function table(multiplyTable) {
    let str = "<table>";
    for (const columns of multiplyTable) {
        str += "<tr>";
        for (const row of columns) {
            str += `<td>${row}</td>`;
        }
        str += "</tr>";
    }
    str += "</table>";
    return str;
}

