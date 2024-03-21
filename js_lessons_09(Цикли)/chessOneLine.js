// Сформувати рядок # # # # # за допомогою циклу for. Довжина рядка може бути парною та 
// непарною, і вказується в одному місці в коді.


let length = prompt("Введіть довжину рядка:");

if (isNaN(length) || length <= 0) {
    console.error("Будь ласка, введіть коректне значення для довжини рядка.");
} else {
    let result = "";

    for (let i = 0; i < length; i++) {
        result += "# ";
    }

    console.log(result);
}