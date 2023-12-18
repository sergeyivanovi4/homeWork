// Додайте (або змініть) будь-який введений користувачем атрибут тега <button id='ok'> із завдання HTML Tree. 
// Також користувач вводить значення цього атрибута.
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
tree.children[1].children[0].children[0] = prompt('ВВедіть значення атрибута замість "Ok"')