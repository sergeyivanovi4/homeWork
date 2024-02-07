// зробіть функцію, яка рекурсивно створює DOM із деревоподібної структури даних Javascript. 
// Завдання в цілому аналогічно попередньому, проте замість накопичення результату 
// в HTML-рядку функція повинна додавати елементи створені через document.createElement 
// переданому в функцію parent.

function domTree(parent, node) {
    if (!node.tagName) return;

    const element = document.createElement(node.tagName);

    // Додаємо атрибути
    if (node.attrs) {
        for (let attr in node.attrs) {
            element.setAttribute(attr, node.attrs[attr]);
        }
    }

    // Обробляємо дітей
    if (node.children) {
        for (let child of node.children) {
            domTree(element, child);
        }
    }

    // Додаємо створений елемент до батьківського елемента
    parent.appendChild(element);

    // Додаємо текстовий вміст (якщо є)
    // if (node.children && node.children.length === 1 && typeof node.children[0] === 'string') {
    //     element.textContent = node.children[0];
    // }
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

domTree(document.body, table);
