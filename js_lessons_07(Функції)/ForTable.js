// Оформіть завдання For Multiply Table як функцію, яка приймає будь-який масив з масивами, 
// а повертає рядок HTML з тегом <table> і всякими tr та td.

// const MultiplyTable = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16]
// ]
// let   str = "<table>"
//     for (const columns of MultiplyTable){ //цикл створює осередки в одному рядку
//          //одна ітерація циклу створює ОДИН осередок
//             str += `<tr><td>${columns}</td></tr>`;
//         console.log(columns)
//     }
// str += "</table>"
// document.write(str)

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

// Приклад використання:
const MultiplyTable = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
];

let tableHTML = table(MultiplyTable);
document.write(tableHTML);
