// Попросіть користувача ввести рядок черезprompt. prompt не дозволяє вводити рядкові рядки. 
// Дамо користувачеві таку можливість - Користувач може вводити \n як маркер нового рядка.
// Використовуючи split та join зробіть цей рядок воістину багаторядковим
//  і виведіть в консоль або через alert.


let str = prompt("Введіть рядок, де\\nбуде новим рядком: ")

alert(`Ваш новий текст: \n${str.split('\\n').join('\n')}`)