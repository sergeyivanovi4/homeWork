// Оформіть завдання String: new line як функцію з параметром-рядком. 
// Функція повинна повертати рядок із справжніми переносами.

// let str = prompt("Введіть рядок, де\\nбуде новим рядком: ")
// alert(`Ваш новий текст: \n${str.split('\\n').join('\n')}`)

function str(newLine) {
    return newLine.split('\\n').join('\n');
}

// Приклад використання:
let string = prompt("Введіть рядок, де\\nбуде новим рядком:");
let newString = str(string);
alert(`Ваш новий текст:\n${newString}`);