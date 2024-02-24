// function getGQL(url) {
//     function gql(query, variables={}) {
//         return fetch(url, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json',
//                 ...("token" in store.getState().auth ? {Authorization: `Bearer $(store.getState().auth.token)`} : null)
//             },
//             body: JSON.stringify({query, variables}) 
//         })
//         .then(res => res.json())
//         .then(r => {
//             if (r.data) {
//                 const result = Object.values(r)[0]
//                 console.log(result)
//                 return result
//             }
//             throw new Error(r.data.error)
//         })
//         .catch(error => console.log(error))
//     }
//     return gql
// }

// const gql = getGQL("http://shop-roles.node.ed.asmer.org.ua/graphql")


async function gql(endpoint, query, variables) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // ...("token" in store.getState().auth ? {Authorization: `Bearer $(store.getState().auth.token)`} : null)
        },
        body: JSON.stringify({
            query,
            variables
        })
    };

    try {
        const response = await fetch(endpoint, options);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`GraphQL request failed: ${error}`);
    }
}


const endpoint = "http://shop-roles.node.ed.asmer.org.ua/graphql";
const query = `
    query cats($q: String){
        CategoryFind(query: $q){
            _id
            name
        }
    }
`;
const variables = {
    q: "[{}]"       // \\"parent\\": null ??
};

gql(endpoint, query, variables)
    .then(data => console.log(data))
    .catch(error => console.error(error));





function jwtDecode(token) {
    try {
        // if (token && token.split(".").length === 3) {
        //     const tokenArr = token.split(".")
        //     const decodedToken = atob(tokenArr[1])
        //     const payload = JSON.parse(decodedToken)
        //     return payload
        // }
        // return undefined
        return JSON.parse(atob (token.split(".")[1]))
    } catch(error) {
        return undefined
    }
}




function createStore(reducer){
    let state       = reducer(undefined, {}) //стартовая инициализация состояния, запуск редьюсера со state === undefined
    let cbs         = []                     //массив подписчиков
    
    const getState  = () => state            //функция, возвращающая переменную из замыкания
    const subscribe = cb => (cbs.push(cb),   //запоминаем подписчиков в массиве
                             () => cbs = cbs.filter(c => c !== cb)) //возвращаем функцию unsubscribe, которая удаляет подписчика из списка
                             
    const dispatch  = action => { 
        if (typeof action === 'function'){ //если action - не объект, а функция
            return action(dispatch, getState) //запускаем эту функцию и даем ей dispatch и getState для работы
        }
        const newState = reducer(state, action) //пробуем запустить редьюсер
        if (newState !== state){ //проверяем, смог ли редьюсер обработать action
            state = newState //если смог, то обновляем state 
            for (let cb of cbs)  cb(state) //и запускаем подписчиков
        }
    }
    
    return {
        getState, //добавление функции getState в результирующий объект
        dispatch,
        subscribe //добавление subscribe в объект
    }
}


function localStoredReducer(originalReducer, localStorageKey) {
    function wrapper(state, action) {
        if (state === undefined) {
            try {
                return JSON.parse(localStorage[localStorageKey])
            } catch(error) {
                console.log(error)
            }
        }
        const newState = originalReducer(state, action)
        localStorage[localStorageKey] = JSON.stringify(newState)
        return newState
    }
    return wrapper
}

function combineReducers(reducers){
    function totalReducer(state={}, action){
        const newTotalState = {}
        for (const [reducerName, reducer] of Object.entries(reducers)){
            const newSubState = reducer(state[reducerName], action)
            if (newSubState !== state[reducerName]){
                newTotalState[reducerName] = newSubState
            }
        }
        if (Object.keys(newTotalState).length){
            return {...state, ...newTotalState}
        }
        return state
    }

    return totalReducer
}

const reducers = {
    promise: promiseReducer, //допилить много имен для многих промисо
    auth: localStoredReducer(authReducer, "auth"),     //часть предыдущего ДЗ
    cart: cartReducer,     //часть предыдущего ДЗ
}

const totalReducer = combineReducers(reducers) 

// function promiseReducer(state={}, {type, status, payload, error}){
//     if (type === 'PROMISE'){
//         //имена добавить
//         return {status, payload, error}
//     }
//     return state
// }
// //имена добавить
// const actionPending   = ()      => ({type: 'PROMISE', status: 'PENDING'})
// const actionFulfilled = payload => ({type: 'PROMISE', status: 'FULFILLED', payload})
// const actionRejected  = error   => ({type: 'PROMISE', status: 'REJECTED',  error})

// //имена добавить
// const actionPromise = promise =>
//     async dispatch => { 
//         dispatch(actionPending()) //сигнализируем redux, что промис начался
//         try{
//             const payload = await promise //ожидаем промиса
//             dispatch(actionFulfilled(payload)) //сигнализируем redux, что промис успешно выполнен
//             return payload //в месте запуска store.dispatch с этим thunk можно так же получить результат промиса
//         }
//         catch (error){
//             dispatch(actionRejected(error)) //в случае ошибки - сигнализируем redux, что промис несложился
//         }

function promiseReducer(state={}, action){
    const {namePromise, type, status, payload, error} = action
    if (type === 'PROMISE'){
        return {
            ... state,
            [namePromise]: {
                type,
                status,
                payload,
                error
            }
        }

    }
    return state
}

const actionPending = namePromise => ({namePromise, type: 'PROMISE', status: 'PENDING'})
const actionFulfilled = (namePromise ,payload) => ({namePromise, type: 'PROMISE', status: 'FULFILLED', payload})
const actionRejected = (namePromise ,error) => ({namePromise, type: 'PROMISE', status: 'REJECTED',  error})

const actionPromise = (namePromise, promise) => async dispatch => {
    dispatch(actionPending(namePromise))

    try {
        const payload = await promise
        dispatch(actionFulfilled(namePromise, payload))
        return payload
    } catch(error) {
        dispatch(actionRejected(namePromise, error))
    }
}

function authReducer(state = {}, action) {
    const {type, token} = action

    if (type === "AUTH_LOGIN") {
        const payload = jwtDecode(token)
        if (payload) {
            return {
                token,
                payload
            }
        }
    }
    if (type === "AUTH_LOGOUT"){
        return {}
    }
    return state
}

const actionAuthLogin  = token => ({type: 'AUTH_LOGIN', token})
const actionAuthLogout = ()    => ({type: 'AUTH_LOGOUT'})



const store = createStore(totalReducer) //не забудьте combineReducers если он у вас уже есть

store.subscribe(() => console.log(store.getState()))

const drawCategory = () => {
    const [,route] = location.hash.split('/')
    if (route !== 'category') return

    const {status, payload, error} = store.getState().promise.categoryById || {}
    if (status === 'PENDING'){
        main.innerHTML = `<img src='https://cdn.dribbble.com/users/63485/screenshots/1309731/infinite-gif-preloader.gif' />`
    }
    if (status === 'FULFILLED'){
        const {name, goods} = payload.data.CategoryFindOne
        main.innerHTML = `<h1>${name}</h1>`
        for (const {_id, name, price, images} of goods) {
            main.innerHTML += `<div>
            <a href = "#/good/${_id}">${name}</a>
            <div><img style= "max-width:30vw" src="http://shop-roles.node.ed.asmer.org.ua/${images && images[0] && images[0].url}"></div>
            <p>Цена: ${price}</p>
            </div>`
        }
    }
}

store.subscribe(drawCategory)

store.subscribe(() => {
    const [,route] = location.hash.split('/')
    if (route !== 'good') return

    const {status, payload, error} = store.getState().promise.goodById || {}
    if (status === 'PENDING'){
        main.innerHTML = `<img src='https://cdn.dribbble.com/users/63485/screenshots/1309731/infinite-gif-preloader.gif' />`
    }
    if (status === 'FULFILLED'){
        const {name, price, _id, description, images} = payload.data.GoodFindOne
        main.innerHTML = `
        <h3>${name}</h3>
        <p>${description}</p>
        <p>${price}</p>
        <button id="cartButton">Додати у кошик</button>

        `
        for (const {url} of images || [] ) {
            main.innerHTML += `<div><img style= "max-width:20vw" src="http://shop-roles.node.ed.asmer.org.ua/${url}"></div>`
        }

        
    document.getElementById("cartButton").addEventListener('click', () => {
        const good = { _id, name, price};
        const count = 1; 
        store.dispatch(actionCartAdd(good, count))
        // localStorage.setItem('cartIcon', JSON.stringify(store.getState().cart));
    });




        // const {title, opening_crawl, characters} = payload
        // main.innerHTML = `<h1>${title}</h1>
        //                  <p>${opening_crawl}</p>
        //                  `
        // for (const peopleUrl of characters){
        //     const peopleId = peopleUrl.split('/people/')[1].slice(0,-1)
        //     main.innerHTML += `<a href="#/people/${peopleId}">Герой №${peopleId}</a>`
        // }
    }
})

// const actionGetPeople = id =>  //имя другое
//     actionPromise(fetch(`https://swapi.dev/api/people/${id}`).then(res => res.json()))

// const actionGetFilm = id => 
//     actionPromise(fetch(`https://swapi.dev/api/films/${id}`).then(res => res.json()))

// const actionSomePeople = () => 
//     actionPromise(fetch(`https://swapi.dev/api/people/`).then(res => res.json()))

//store.dispatch(actionSomePeople())

store.subscribe(() => {
    const {status, payload, error} = store.getState().promise.rootCats || {}
    if (status === 'FULFILLED' && payload){
        aside.innerHTML = ''
        for (const { _id, name} of payload.data.CategoryFind){
            aside.innerHTML += `<a href="#/category/${_id}">${name}</a>`
        }
    }
})









const gqlRootCats = () =>
gql(
    "http://shop-roles.node.ed.asmer.org.ua/graphql",
    `
    query roots{
        CategoryFind(query: "[{\\"parent\\": null}]") {
            _id
            name
        }
    }
`)

const gqlCategoryById = (_id) => 
gql(
    "http://shop-roles.node.ed.asmer.org.ua/graphql",
    `
    query roots1($q1: String) {
        CategoryFindOne(query: $q1) {
        _id
        name
        goods {
            _id
            name
            price
            images {
            _id
            text
            url
            originalFileName
            }
        }
        image {
            _id
            text
            url
            originalFileName
        }
        }
    }
    `,
    {
        q1: JSON.stringify([{_id}])
    }
)

// const gqlGoodById = (_id) => 
// gql(
//     "http://shop-roles.node.ed.asmer.org.ua/graphql",
//     `
//     query roots1($q1: String) {
//         GoodFindOne(query: $q1) {
//             _id
//             name
//             price
//             description
//             createdAt
//             categories {
//                 _id
//                 createdAt
//                 name
//             }
//             images {
//                 _id
//                 createdAt
//                 text
//                 url
//                 originalFileName
//             }
//         }
//     }
//     `,
//     {
//         q1: JSON.stringify([{_id}])
//     }
// )

const gqlGoodById = (_id) => 
gql(
    "http://shop-roles.node.ed.asmer.org.ua/graphql",
    `
    query goodById($q1: String) {
        GoodFindOne(query: $q1) {
            _id
            name
            price
            description
            images {
                _id
                text
                url
                originalFileName
            }
        }
    }
    `,
    {
        q1: JSON.stringify([{_id}])
    }
)

const  gqlFullRegister = (login, password) =>
gql(
    "http://shop-roles.node.ed.asmer.org.ua/graphql",
    `
    mutation fullRegister($newUser:UserInput) {
        UserUpsert(user: $newUser) {
            _id
            login
        }
    }`,
    {
        "newUser": {
            "login": login,
            "password": password
        }
    }
)

const gqlFullLogin = (login, password) =>
gql(
    "http://shop-roles.node.ed.asmer.org.ua/graphql",
    `
    query fullLogin($login: String, $password: String) {
        login(login: $login, password: $password)
    }`,
    {
        "login": login,
        "password": password
    }
)

const gqlOrderFind = (_id) =>
gql(
    "http://shop-roles.node.ed.asmer.org.ua/graphql",
    `
    query orderind($q1: String) {
        OrderFind(query: $q1) {
            _id
            total
            createdAt
            orderGoods {
                _id
                createdAt
                price
                count
                goodName
                total
            }
            owner {
                _id
                createdAt
                login
                nick
            }
        }
    }`,
    {
        "q1": JSON.stringify[{_id}]
    }

)

const actionRootCats = () =>
    actionPromise('rootCats', gqlRootCats())

store.dispatch(actionRootCats())

const actionCategoryById = (_id) =>
    actionPromise('categoryById', gqlCategoryById(_id))

const actionGoodById = (_id) =>
    actionPromise('goodById', gqlGoodById(_id))




const actionRegister = (login, password) => actionPromise('fullRegister', gqlFullRegister(login, password))

const actionLogin = (login, password) => actionPromise('fullLogin', gqlFullLogin(login, password))

const actionFullRegister = (login, password) => async (dispatch) => {
    try {
        const response = await dispatch(actionRegister(login, password));
        console.log('response from registration:', response);

        if (response.UserUpsert !== null) {
            await dispatch(actionFullLogin(login, password));
        } else {
            console.error('Помилка при регестрації:', response.error);
        }
    } catch (error) {
        console.error('Помилка при регестрації:', error);
    }
}

const actionFullLogin = (login, password) => async dispatch => {
    try {
        const token = await dispatch(actionLogin(login, password));
        // console.log(token.data.login)
        
        if (typeof token.data.login === 'string') {
            store.dispatch(actionAuthLogin(token.data.login));
        } else {
            console.error('Oтримано не вірний ТОКІН')
        }
    } catch (error) {
        console.error('Помилка під час входу:', error);
    }
}

const actionOrderFind= (_id) => actionPromise('orderFind', gqlOrderFind(_id))




function cartReducer(state={}, action) {
    const {type, count, good} = action 

    if (type === 'CART_ADD') {
        if (state[good._id]) {
            return {
                ...state,
                [good._id]: {
                    ...state[good._id], 
                    count: state[good._id].count + count,
                    good
                }
            }
        }
        return {
            ...state,
            [good._id]: {count, good}
        }
    }

    if (type === 'CART_SUB' && state[good._id]) {
        if (state[good._id].count = count) {
            return {
                ...state,
                [good._id]: {
                    ...state[good._id], 
                    count: state[good._id].count - count,
                    good
                }
            }
        }
        const newState = {...state}
        delete newState[good._id]
        return newState
    }

    if (type === 'CART_DEL' && state[good._id]) {
        const newState = {...state}
        delete newState[good._id]
        return newState
    }

    if (type === 'CART_SET') {
        if (count = 0) {
            return {
                ...state, 
                [good._id]: {
                    count,
                    good
                }
            }
        }
        const newState = {...state}
        delete newState[good._id]
        return newState
    }

    if (type === 'CART_CLEAR') {
        return {}
    }

    // При кожній зміні стану корзини, зберігаємо його в localStorage
    localStorage.setItem('cartIcon', JSON.stringify(state));

    return state
}


//
//Типы экшенов:
//

// Добавление товара. 
const actionCartAdd = (good, count=1) => ({type: 'CART_ADD', count, good})
// Должен добавлять новый ключ в state, или обновлять, если ключа в state ранее не было, увеличивая количество

// Уменьшение количества товара. 
const actionCartSub = (good, count=1) => ({type: 'CART_SUB', count, good})
// Должен уменьшать количество товара в state, или удалять его если количество будет 0 или отрицательным

// Удаление товара. 
const actionCartDel = (good) => ({type: 'CART_DEL', good})
// Должен удалять ключ из state

// Задание количества товара. 
const actionCartSet = (good, count=1) => ({type: 'CART_SET', count, good})
// В отличие от добавления и уменьшения, не учитывает того количества, которое уже было в корзине,
//  а тупо назначает количество поверху (или создает новый ключ, если в корзине товара не было). 
// Если count 0 или отрицательное число - удаляем ключ из корзины;

// Очистка корзины.
const actionCartClear = () => ({type: 'CART_CLEAR'})
//  state должен стать пустым объектом {}

// Підписка на зміни стану корзини:

store.subscribe(() => {
    console.log('State updated:', store.getState().cart);
    const {cart} = store.getState()
    let count = 0

    for (const _id in cart) {
        console.log(_id, cart[_id].count, count)
        count += cart[_id].count
    }
    
    cartIcon.innerHTML = `<h3>Кошик: ${count}</h3>`
    
});

// {
//     "6408bf99d5e3301cba63a5aa": {
//         "count": 2,
//         "good": {
//             "_id": "6408bf99d5e3301cba63a5aa",
//             "name": "Ороситель Verto регулированный 16 отверстий до 336 м²",
//             "price": 565
//         }
//     },
//     "62d403fbb74e1f5f2ec1a12a": {
//         "count": 1,
//         "good": {
//             "_id": "62d403fbb74e1f5f2ec1a12a",
//             "name": "Виски Glengoyne 50yo 0,725 л",
//             "price": 1250
//         }
//     }
// }


window.onhashchange = () => {
    const [,route, _id] = location.hash.split('/')

    const routes = {
        // people(){
        //     console.log('People', _id)
        //     store.dispatch(actionGetPeople(_id))
        // },
        // films(){
        //     store.dispatch(actionGetFilm(_id))
        // },
        category() {
            console.log("категория:", _id)
            store.dispatch(actionCategoryById(_id))
        },
        good(){
            //тут был store.dispatch goodById
            console.log('good', _id)
            store.dispatch(actionGoodById(_id))
        },
        login(){
            console.log('А ТУТ ЩА ДОЛЖНА БЫТЬ ФОРМА ЛОГИНА')
            //нарисовать форму логина, которая по нажатию кнопки Login делает store.dispatch(actionFullLogin(login, password))
            main.innerHTML = 
            `
            <input type="text" id="login" placeholder="Ваш логін">
            <input type="password" id="password" placeholder="Ваш пароль">
            <button id="loginButton">Увійти</button> |
            <a href="#/register">Регістрація</a>
            `

            document.getElementById("loginButton").addEventListener('click', () => {
                const login = document.getElementById("login").value;
                const password = document.getElementById("password").value;

                store.dispatch(actionFullLogin(login, password))

                clearInputs('login', 'password');
                redirectToHome();
            })

            
        },

        register(){
            //нарисовать форму регистрации, которая по нажатию кнопки Login 
            // делает store.dispatch(actionFullRegister(login, password))
            main.innerHTML = 
            `
            <input type="text" id="loginRegister" placeholder="Створіть логін">
            <input type="password" id="passwordRegister" placeholder="Створіть пароль">
            <button id="registerButton">Зареєструватись</button>
            `

            document.getElementById("registerButton").addEventListener('click', () => {
                const login = document.getElementById("loginRegister").value;
                const password = document.getElementById("passwordRegister").value;

                store.dispatch(actionFullRegister(login, password))

                clearInputs("loginRegister", "passwordRegister");
                redirectToHome();
            })

            
        },

        loguot(){
            console.log('А ТУТ ЩА ДОЛЖНА БЫТЬ вихід')

            if (confirm("Хочете вийти?")) {
                store.dispatch(actionAuthLogout())
                location.hash = "/login"
            } else {
                location.hash = ""
            }
        },
    }

    if (route in routes){
        routes[route]()
    }
}

window.onhashchange()


store.subscribe(() => {
    loginName.innerHTML = ("token" in store.getState().auth ? `Абонент з логіном: <b>${store.getState().auth.payload.sub.login}</b>` : "Абонент: НЕ зареєстрований")
})



// Щоб після логінізації очистити поля вводу та перенаправитися на домашню сторінку

// Функція для очищення полів вводу
// function clearInputs(login, password) {
//     document.getElementById('login').value = ''; // Очистити поле для логіну
//     document.getElementById('password').value = ''; // Очистити поле для пароля
// }

function clearInputs(...inputIds) {
    inputIds.forEach(id => {
        document.getElementById(id).value = ''; // Очистити значення поля вводу за ідентифікатором
    });
}

// Функція для перенаправлення на домашню сторінку
function redirectToHome() {
    console.log('головна сторінка')
    location.hash = "/category"; // Перенаправитися на домашню сторінку
}





// document.getElementById("cartButton").addEventListener('click', () => {
//     const good = { _id, name, price};
//     const count = 1; 
//     store.dispatch(actionCartAdd(good, count))
//     localStorage.setItem('cartIcon', JSON.stringify(store.getState().cart));
// });






// document.getElementById('cartButton').forEach(button => {
//     button.addEventListener('click', () => {
//         // Отримання даних про товар, який додається у кошик, наприклад, назва і ціна
//         const good = button.closest('good');
//         const productName = product.querySelector('h3').textContent;
//         const productPrice = parseFloat(product.querySelector('p').textContent.replace('Ціна: $', ''));

//         // Виклик функції для додавання товару у кошик
//         addToCart(productName, productPrice);

//     });
// });


// для оновлення корзини при змінах в Redux store
store.subscribe(() => {
    console.log('State updated:', store.getState().cart);
    const cartItems = store.getState().cart || {}; // Отримання даних про товари в корзині з Redux store
    const cartItemsList = document.getElementById("cartItems"); // Отримання списку товарів в корзині з DOM
    let totalPrice = 0; // Змінна для підрахунку загальної вартості товарів в корзині

    // Очищення вмісту корзини перед оновленням
    cartItemsList.innerHTML = '';

    // Додавання кожного товару до корзини
    Object.values(cartItems).forEach(item => {
        const { good, count } = item;
        const listItem = document.createElement('li'); // Створення нового елементу списку для товару
        listItem.textContent = `${good.name} x${count} - ${good.price} грн`; // Встановлення текстового вмісту елементу списку
        cartItemsList.appendChild(listItem); // Додавання елементу до списку товарів в корзині
        totalPrice += good.price * count; // Підрахунок загальної вартості товарів у корзині
    });

    // Оновлення загальної вартості товарів у корзині
    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = `Загальна вартість: ${totalPrice} грн`;
});

// document.getElementById('#cartButton').addEventListener('click', () => {
//     const good = document.getElementById("good").value;
//     store.dispatch(actionCartAdd(good))

//     localStorage.setItem('cartIcon', JSON.stringify(store.getState().cart));
// })




// Додати товар у корзину
// store.dispatch(actionCartAdd(good, count));

// // // Видалити товар з корзини
// store.dispatch(actionCartDel(good));

// // Зменшити кількість товару в корзині
// store.dispatch(actionCartSub(good));

// // Назначити кількість товару у корзині
// store.dispatch(actionCartSet(good, count));

// // Очистити корзину
// store.dispatch(actionCartClear());

















// document.getElementById('loginButton').addEventListener('click', async () => {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // try {
//     //     const data = await actionFullLogin(username, password); // Викликати дію для логіну
//     //     if (data && data.token) {
//     //         console.log('Успішний вхід:', data.token);
//     //         // Додайте обробник подій для успішного входу, наприклад, перенаправлення користувача на іншу сторінку або оновлення даних в інтерфейсі
            
//     //     } else {
//     //         console.log('Не вдалося увійти. Перевірте ваші дані та спробуйте знову.');
//     //     }
//     // } catch (error) {
//     //     console.error('Помилка входу:', error);
//     // }
//     try {
//         const data = await store.dispatch(actionFullLogin(username, password));
//         console.log(data); // Дійсний об'єкт користувача або дані про вхід, якщо успішно

//         // Перевірка вхідних даних
//         if (data && data.token) {
//             // Відображення інформації про користувача у вашому інтерфейсі
//             document.getElementById('login').innerHTML = `Ви увійшли як: ${data.payload.sub.login}`;
//         } else {
//             console.error("Не вдалося отримати токен або дані користувача");
//         }
//     } catch (error) {
//         console.error(error); // Обробка помилок
//     }
// });

// const loginForm = document.getElementById("login");
// loginForm.addEventListener("submit", async (event) => {
//     event.preventDefault(); // Попереджаємо стандартну поведінку форми

//     // Отримуємо значення логіна та пароля з полів введення
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     // Викликаємо функцію для логіну за допомогою GraphQL
//     try {
//         const data = await actionFullLogin(username, password);
//         console.log("Успішно увійшли:", data);
//     } catch (error) {
//         console.error("Помилка входу:", error);
//     }
// });

// Перевіряємо статус автентифікації при завантаженні сторінки
// window.onload = async () => {
//     // Отримуємо інформацію про статус автентифікації
//     const isAuthenticated = !!store.getState().auth.token;

//     if (isAuthenticated) {
//         // Виконуємо дії для автентифікованого користувача
//         console.log("Користувач автентифікований");
//     } else {
//         // Виконуємо дії для неавтентифікованого користувача
//         console.log("Користувач неавтентифікований");
//     }
// };