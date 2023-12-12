// Реалізуйте завдання For Select Option використовуючи reduce:



const currencies = ["USD", "EUR", "GBP", "UAH"]
let str          = "<select>"
str             += currencies.reduce((accumulator, currency) => {
                    return accumulator + `<option>${currency}</option>`;
}, "");
str             += "</select>"
