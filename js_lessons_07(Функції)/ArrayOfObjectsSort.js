// Зробіть узагальнену функцію сортування масиву з об'єктами
var persons = [
    {name: "Іван", age: 17},
    {name: "Марія", age: 35},
    {name: "Олексій", age: 73},
    {name: "Яків", age: 12},
]
sort(persons, "age"); //сортує за віком за зростанням
sort(persons, "name", false); //сортує на ім'я за спаданням
// Функція дозволяє відсортувати будь-який набір даних по імені поля (другий параметр). 
// Третім параметром іде необов'язковий 'Boolean', який у разі true робить сортування за зростанням,
//  у разі false - за спаданням. 
//  За замовчуванням (без третього параметра) відбувається сортування за зростанням.

function sort(arr, property, ascending = true) {
    arr.sort((a, b) => {
        const aValue = a[property];
        const bValue = b[property];

        if (ascending) {
            return aValue > bValue ? 1 : -1;
        } else {
            return bValue > aValue ? 1 : -1;
        }
    });
}

// Приклад використання:
var persons = [
    { name: "Іван", age: 17 },
    { name: "Марія", age: 35 },
    { name: "Олексій", age: 73 },
    { name: "Яків", age: 12 },
];

sort(persons, "age"); // сортує за віком за зростанням
console.log(persons);

sort(persons, "name", false); // сортує на ім'я за спаданням
console.log(persons);