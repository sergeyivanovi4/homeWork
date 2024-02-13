// Проміссифікуйте конструктор LoginForm. У промісифіковану функцію передається DOM-елемент - батько для форми,
// У колбеку, призначеному для отримання логіна та пароля в момент натискання кнопки "Login...", 
// який ви призначаєте в об'єкті LoginForm, зарезолвіт проміс. Результатом промісу має бути об'єкт із ключами
//  login та password, ключі повинні містити значення полів введення.
// function loginPromise(parent){
//     function executor(resolve, reject){
//         const form = new LoginForm(parent)
//         .......
//     }
    
//     return new Promise(executor)
// }

// loginPromise(document.body).then(({login, password}) => console.log(`Ви ввели ${login} та ${password}`))