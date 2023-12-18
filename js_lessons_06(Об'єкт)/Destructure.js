// Використовуючи деструктуризацію структури із завдання HTML Tree:
// Виведіть значення тексту у тезі span,
// Виведіть значення тексту в другій кнопці та
// Виведіть значення атрибуту id у другому input.

var tree = {
    tagName: 'body',
    children: [
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'span',
                    children: ['Enter a data please:'],
                },
                {
                    tagName: 'br'
                },
                {
                    tagName: 'input',
                    attrs: {
                        type: "text",
                        id: "name",
                    }
                },
                {
                    tagName: 'input',
                    attrs: {
                        type: "text",
                        id: "surname",
                    }
                }
            ]
        },
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'button',
                    attrs: {
                        id: "ok",
                    },
                    children: ['OK'],
                },
                {
                    tagName: 'button',
                    attrs: {
                        id: "cancel",
                    },
                    children: ['Cancel'],
                },
            ]
        }
    ]
}


let {children: [{children:  [{children: [spanText]}] }]} = tree 
console.log("Значення тексту у тезі span:", spanText);

let {children: [child1, {children: [child2, {children: [secondButtonText]} ]}]} = tree 
console.log("Значення тексту у другій кнопці:", secondButtonText);

let {children: [{children:  [child01, child02, child03, {attrs: {id: secondInputId}}] }]} = tree 
console.log("Значення атрибуту id у другому input:", secondInputId);

// const {
//     children: [
//         { children: [spanTexts] },
//         ,
//         {
//             children: [
//                 { attrs: { id: secondButtonId }, children: [secondButtonTexts] },
//                 ,
//                 { attrs: { id: secondInputId } }
//             ]
//         }
//     ]
// } = tree;

