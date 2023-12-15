{/* <body>
<div>
    <span>Enter a data please:</span><br/>
    <input type='text' id='name'>
    <input type='text' id='surname'>
</div>
<div>
    <button id='ok'>OK</button>
    <button id='cancel'>Cancel</button>
</div>
</body> */}


// Зробіть декларативну JSON-структуру для тегів вище, у якій:
// кожен тэг буде об'єктом
// ім'я тега буде полем tagName
// Вкладені теги будуть у полі children
// Набір аттрибутів тега буде в полі attrs.


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

// Виведення значення тексту другої кнопки
const cancelButtonText = structure.children[1].children[1].children[0];
console.log(cancelButtonText); // "Cancel"

// Виведення значення атрибуту id другого input
const surnameInputId = structure.children[0].children[3].attrs.id;
console.log(surnameInputId);