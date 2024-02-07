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


function getElementById(parent = document.body, id) {
    for (const child of parent.children) {
        if (child.id === id) {
            throw child;
        }
        getElementById(child, id);
    }
}

try {
    getElementById(undefined, 'someId');
} catch (element) {
    console.log('Знайдено елемент з id:', element);
}
