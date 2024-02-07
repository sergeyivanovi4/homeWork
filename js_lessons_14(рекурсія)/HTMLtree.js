// зробіть функцію, яка рекурсивно створює HTML-рядок із деревоподібної структури даних 
// Javascript будь-якої вкладеності. Перевірте результат роботи функції виводячи HTML-рядок 
// використовуючи document.write або ж який-то_элемент.innerHTML
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
}
// htmlTree(table) //поверне <table border='1' ....

function htmlTree(node) {
    if (!node.tagName) return '';

    let result = `<${node.tagName}`;

    // Додаємо атрибути
    if (node.attrs) {
        for (let attr in node.attrs) {
            result += ` ${attr}='${node.attrs[attr]}'`;
        }
    }

    result += '>';

    // Обробляємо дітей
    if (node.children) {
        for (let child of node.children) {
            result += htmlTree(child);
        }
    }

    result += `</${node.tagName}>`;

    return result;
}

const htmlString = htmlTree(table);
document.write(htmlString); // або document.getElementById('someElementId').innerHTML = htmlString;