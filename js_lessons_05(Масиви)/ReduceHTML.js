// Реалізуйте завдання For Select Option використовуючи reduce:



const currencies = ["USD", "EUR", "GBP", "UAH"]
let str          = "<select>"

str             += currencies.reduce( (a,b) => a + `<option>${b}</option>`)

str             += "</select>"
document.write(str) 