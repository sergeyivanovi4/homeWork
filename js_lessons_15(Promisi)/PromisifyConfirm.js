// Промісифікуйте confirm. Напишіть функцію, яка повертає проміс, який переходить у стан fulfilled 
// при натисканні "OK" та редагується при натисканні "Cancel". Функція повинна приймати рядок для confirm:
// function confirmPromise(text){
//      .....
// }

// confirmPromise('Проміси це складно?').then(() => console.log('не так вже й складно'),
//                                             () => console.log('respect за посидючість і уважність'))
// Промісифікація не робить confirm неблокуючою функцією. Це завдання має лише освітній зміст.


function confirmPromise(text) {
    return new Promise((resolve, reject) => {
        const result = confirm(text);
        if (result) {
            resolve();
        } else {
            reject();
        }
    });
}

confirmPromise('Проміси це складно?').then(
    () => console.log('Не так вже й складно'),
    () => console.log('Respect за посидючість і уважність')
);
