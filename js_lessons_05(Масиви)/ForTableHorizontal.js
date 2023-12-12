// виконайте виведення імен в осередки таблиці по горизонталі (один рядок з чотирма осередками)


const names = ["John", "Paul", "George", "Ringo"]
let   str = "<table>"
for (const name of names){
//    YOUR MAGIC HERE
    str += `<td>${name}</td>`;
}
str+= "</table>"
document.write(str) //document.write отобразит ваш HTML на странице

{/* <tr> для початку рядка */}