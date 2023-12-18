// Зробіть список, що випадає, з назвами всіх валют, використовуючи код з минулого завдання і накопичення
//  HTML-тегів у рядковій змінній. Для списків, що випадають, в HTML передбачені теги <select> і <option>


const currencies = ["USD", "EUR", "GBP", "UAH"]
let   str = "<select>"
for (const currency of currencies){
    //    YOUR MAGIC HERE
    str += `<option>${currency}</option>`
}
str += "</select>"
document.write(str) 

const fromCurrency = prompt("Введіть вихідну валюту (наприклад, USD):").toUpperCase();
const toCurrency = prompt("Введіть валюту для конвертації (наприклад, EUR):").toUpperCase();
const amount = parseFloat(prompt("Введіть суму для конвертації:"));
// parseFloat разбирает текстовую строку, ищет и возвращает из неё десятичное число.

const apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}`;


fetch(apiUrl).then((res) => res.json())
    .then((data) => {
        // Перевірка, чи є валюти в списку
        if (data.error) {
            console.error("Помилка при отриманні курсу обміну:", data.error);
            return;
        }

        // Отримання курсу обміну
        const exchangeRate = data.rates[toCurrency];

        // Перевірка, чи є валюти в списку
        if (!exchangeRate) {
            console.error("Помилка: Валюта для конвертації не знайдена.");
            return;
        }

        // Розрахунок результату конвертації
        const result = amount * exchangeRate;

        // Виведення результату
        console.log(`${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`);
    })