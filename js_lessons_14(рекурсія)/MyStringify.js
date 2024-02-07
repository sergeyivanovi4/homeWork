// Напишите аналог JSON.stringify
const jsonString = stringify(table) //або arr з попереднiх завданнь)
 //Напишіть функцію stringify без використання JSON.stringify
console.log(JSON.parse(jsonString)) 
//не повинно поламатися і повернути структуру, у всьому схожу з оригінальним arr або table

function stringify(obj) {
    if (typeof obj === 'undefined') return 'undefined';
    if (typeof obj === 'function') return undefined;

    if (obj === null) return 'null';
    if (typeof obj === 'boolean' || typeof obj === 'number') return String(obj);

    if (typeof obj === 'string') {
        return '"' + obj.replace(/"/g, '\\"') + '"';
    }

    if (Array.isArray(obj)) {
        return '[' + obj.map(item => stringify(item)).join(',') + ']';
    }

    if (typeof obj === 'object') {
        const pairs = [];
        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const value = stringify(obj[key]);
                if (value !== undefined) {
                    pairs.push('"' + key + '":' + value);
                }
            }
        }
        return '{' + pairs.join(',') + '}';
    }
}
// 
// 
// // 
// function domTree(parent, node) {
//     if (!node.tagName) return;

//     const element = document.createElement(node.tagName);

//     // Додаємо атрибути
//     if (node.attrs) {
//         for (let attr in node.attrs) {
//             element.setAttribute(attr, node.attrs[attr]);
//         }
//     }

//     // Обробляємо дітей
//     if (node.children) {
//         for (let child of node.children) {
//             domTree(element, child);
//         }
//     }

//     // Додаємо створений елемент до батьківського елемента
//     parent.appendChild(element);

//     // Додаємо текстовий вміст (якщо є)
//     if (node.children && node.children.length === 1 && typeof node.children[0] === 'string') {
//         element.textContent = node.children[0];
//     }
// }

// const table = {
//     tagName: 'table',
//     attrs: {
//         border: "1",
//     },
//     children: [
//         {
//             tagName: 'tr',
//             children: [
//                 {
//                     tagName: "td",
//                     children: ["1x1"],
//                 },
//                 {
//                     tagName: "td",
//                     children: ["1x2"],
//                 },
//             ]
//         },
//         {
//             tagName: 'tr',
//             children: [
//                 {
//                     tagName: "td",
//                     children: ["2x1"],
//                 },
//                 {
//                     tagName: "td",
//                     children: ["2x2"],
//                 },
//             ]
//         }
//     ]
// };

// domTree(document.body, table);

