// Напишіть функцію isSorted, яка приймає набір параметрів будь-якого розміру, та повертає true,
//  коли всі параметри - це числа, і кожeн з них більше за попередній параметр.

// Test isSorted
// Використовуючи циклічне введення в масив (завдання array fill), забезпечте введення даних для isSorted

// 
// НІ ЧОГО НЕ ПОНЯВ - жпт ЗРОБИВ ТАК.
// Я Б САМ ДО ТАКОГО НЕ ДОДУМАВСЯ Б
// 

function isSorted(...args) {
    if (args.length < 2) {
      return true;
    }
  
    for (let i = 1; i < args.length; i++) {
      if (typeof args[i] !== 'number' || args[i] <= args[i - 1]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Використання циклічного введення для заповнення масиву
  const inputArray = [];
  const numberOfElements = 5; // Можете змінити кількість елементів
  
  for (let i = 0; i < numberOfElements; i++) {
    const userInput = prompt(`Введіть ${i + 1}-й елемент:`);
    const numericValue = parseFloat(userInput);
  
    if (!isNaN(numericValue)) {
      inputArray.push(numericValue);
    } else {
      console.log('Введено некоректне значення. Будь ласка, введіть число.');
      i--; // Повторити ітерацію для введення коректного значення
    }
  }
  
  // Виклик функції isSorted з введеними користувачем даними
  const result = isSorted(...inputArray);
  console.log(`Масив ${inputArray} є впорядкованим: ${result}`);
  