// Використовуючи код вище, створіть таблицю 3x4. 
// У кожному рядку три осередки з літерами, чотири рядки, так як 4 валюти в масиві.

const currencies = ["USD", "EUR", "GBP", "UAH"]
let   str = "<table>"
for (const currency of currencies){ //цикл створює рядки
     // Одна ітерація циклу створює ОДНИЙ РЯДОК
        str += `<td>${currency}</td>`;
    console.log(currency)
    for (const letter of currency){ //цикл створює осередки в одному рядку
         //одна ітерація циклу створює ОДИН осередок
            str += `<tr><td>${letter}</td></tr>`;
        console.log(letter)
    }
}
str+= "</table>"
document.write(str) //document.write відобразить ваш HTML на сторінці
