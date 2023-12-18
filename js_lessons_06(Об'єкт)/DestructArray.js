// напишіть код, який використовуючи деструктуризацію покладе:
// парні числа в змінні even1, even2,
// непарні в odd1, odd2, odd3,
// Букви в окремий масив
let arr = [1,2,3,4,5, "a", "b", "c"]

let [odd1, even1, odd2, even2, odd3, ...letters] = arr

console.log("Парні числа:", even1, even2);
console.log("Непарні числа:", odd1, odd2, odd3);
console.log("Букви:", letters);