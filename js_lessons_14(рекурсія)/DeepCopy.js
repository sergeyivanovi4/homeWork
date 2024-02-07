// Напишіть функцію, яка рекурсивно здійснює глибоке копіювання структур Javascript,
//  в яких немає циклічних зв'язків.

// const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false]
// const arr2 = deepCopy(arr) //arr2 та всі його вкладені масиви та об'єкти - інші об'єкти, 
// які можна змінювати без ризику поміняти щось у arr
// const table2 = deepCopy(table) // Аналогічно
// 
// 
// 
function deepCopy(obj) {
    // Перевірка
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let copy;

    // Обробка масивів
    if (Array.isArray(obj)) {
        copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepCopy(obj[i]);
        }
        return copy;
    }

    // Обробка об'єктів
    if (typeof obj === 'object') {
        copy = {};
        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                copy[key] = deepCopy(obj[key]);
            }
        }
        return copy;
    }
}

const table = {
    tagName: 'table',
    attrs: {
        border: "1",
    },
    children: [
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["1x1"],
                },
                {
                    tagName: "td",
                    children: ["1x2"],
                },
            ]
        },
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["2x1"],
                },
                {
                    tagName: "td",
                    children: ["2x2"],
                },
            ]
        }
    ]
};

const table2 = deepCopy(table);
console.log(table2);

// 
// 
// 
const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false];
const arr2 = deepCopy(arr);
console.log(arr2);