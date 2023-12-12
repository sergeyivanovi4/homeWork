// Виведіть таблицю множення 5x5 із завдання Multiply table в таблицю,
//  використовуючи вкладені for.... of та document.write

// Зробіть черезрядкове підсвічування - задавайте парним рядкам один колір тла, непарним - інший


const MultiplyTable = [
    [0], [0], [0], [0], [0]
    [0], [1], [2], [3], [4]
    [0], [2], [4], [6], [8]
    [0], [3], [6], [9], [12]
    [0], [4], [8], [12], [16]
]
let   str = "<table>"
for (const rows of MultiplyTable){ //цикл створює рядки
     // Одна ітерація циклу створює ОДНИЙ РЯДОК
        str += `<td>${rows}</td>`;
    console.log(rows)
    for (const columns of rows){ //цикл створює осередки в одному рядку
         //одна ітерація циклу створює ОДИН осередок
            str += `<tr><td>${columns}</td></tr>`;
        console.log(columns)
    }
}
str += "</table>"
document.write(str)