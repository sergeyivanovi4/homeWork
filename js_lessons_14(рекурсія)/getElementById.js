// Напишіть функцію getElementById, яка буде аналогічна document.getElementById.
//  Як основу можете взяти матеріал лекції (walker), однак у цикл перебору children 
//  вставте перевірку на знаходження переданого id. При знаходженні елемента по id 
//  у рекурсивній функції викидайте виняток із значенням знайденого DOM-елемента,
//   яке буде спіймано на рівні вашої функції getElementById, після чого вона поверне викинутий DOM-елемент.
// function getElementById(idToFind){
//     function walker(parent){
//         ......
//     }
//     ......
// }

function walker(parent=document.body, level=0){
    for (const child of parent.children){
        console.log("    ".repeat(level) + child.tagName) //level використовується для відступу
        walker(child, level +1) //вкладений виклик - вкладений рівень вкладеності :-D
    }
}

walker()

function findElementById(parent, id) {
    try {
        return getElementById(parent, id);
    } catch (element) {
        return null;
    }
}

function getElementById(parent = document.body, id) {
    for (const child of parent.children) {
        if (child.id === id) {
            return child;
        }
        const foundElement = getElementById(child, id);
        if (foundElement) {
            return foundElement;
        }
    }
    throw new Error(`Елемент з id '${id}' не знайдено`);
}
