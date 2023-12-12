// досягніть виведення імен в осередки таблиці по вертикалі (одна колонка з чотирма рядками,
//      у кожному рядку - один осередок)


const names = ["John", "Paul", "George", "Ringo"]
let   str = "<table>"
for (const name of names){
//    YOUR MAGIC HERE
    str += `<tr><td>${name}</td></tr>`;
}
str+= "</table>"
document.write(str) //document.write відобразить ваш HTML на сторінці


// Кожне ім'я обгортається тегом <tr> (рядок в таблиці), а потім тегом <td> (осередок в таблиці)
//  та додається до рядка str. 