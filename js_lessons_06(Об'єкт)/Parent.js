// Додайте кожному об'єкту тега з попереднього завдання зв'язок з батьком, використовуючи властивість parent та 
// присвоєння

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

tree.children[0].tree = tree
tree.children[0].children[0].tree = tree
tree.children[0].children[0].children[0].tree = tree
tree.children[0].children[1].tree = tree
tree.children[0].children[2].tree = tree
tree.children[1].children[0].children[0].tree = tree
tree.children[1].children[1].children[0].tree = tree

tree.children[0].parent = tree.children
tree.children[0].children[0].parent = tree.children
tree.children[0].children[0].children[0].parent = tree.children
tree.children[0].children[1].parent = tree.children
tree.children[0].children[2].parent = tree.children
tree.children[1].children[0].children[0].parent = tree.children
tree.children[1].children[1].children[0].parent = tree.children



