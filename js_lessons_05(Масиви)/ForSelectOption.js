// Використовуючи код вище, створіть список, що випадає, з валютами. 
// Елементи списку, що випадає, створюються за допомогою тега <option>


const currencies = ["USD", "EUR", "GBP", "UAH"]
let   str = "<select>"
for (const currency of currencies){
    //    YOUR MAGIC HERE
    str += `<option>${currency}</option>`
}
str += "</select>"
document.write(str) //document.write відобразить ваш HTML на сторінці