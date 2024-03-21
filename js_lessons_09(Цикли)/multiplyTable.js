// За допомогою вкладеного циклу сформуйте масив масивів "таблиця множення". 
// Для ініціалізації вкладених масивів використовуйте
// arr[i] = [] //в i-тий елемент масиву заноситься новий порожній масив
// arr[5][6] повинен дорівнювати, відповідно, 30, arr[7][2] == 14 і так далі.

// Введіть розмір таблиці множення (кількість рядків і стовпців)
let size = prompt("Введіть розмір таблиці множення:");

// Ініціалізуємо порожній масив масивів
let table = [];

// Зовнішній цикл для рядків таблиці
for (let i = 1; i <= size; i++) {
    // Ініціалізуємо новий порожній масив для кожного рядка
    table[i - 1] = [];

    // Внутрішній цикл для стовпців таблиці
    for (let j = 1; j <= size; j++) {
        // Заповнюємо елементи масиву множенням відповідних індексів
        table[i - 1][j - 1] = i * j;
    }
}

// Виведемо отриманий масив у консоль
console.log(table);