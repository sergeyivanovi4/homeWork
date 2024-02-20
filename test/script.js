// function gql(url, query, variables={}) {
//     return fetch(url, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json'
//         },
//         body: JSON.stringify({query, variables}) 
//     })
//     .then(res => res.json())
    
// }
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
        if (!token || typeof token !== 'AUTH_LOGIN') {  // string --> AUTH_LOGIN???
            return undefined;
        }

        const parts = token.split('.');
        if (parts.length !== 3) {
            return undefined;
        }

        const decoded = atob(parts[1]);
        const payload = JSON.parse(decoded);

        return payload;
    } catch (error) {
        return undefined;
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
    auth: localStoredReducer//(authReducer, "auth"),     //часть предыдущего ДЗ
    //cart: cartReducer,     //часть предыдущего ДЗ
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
//     }
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
    } catch(error) {
        dispatch(actionRejected(namePromise, error))
    }
}



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
            <div><img style= "max-width:50vw" src="http://shop-roles.node.ed.asmer.org.ua/${images && images[0] && images[0].url}"></div>
            <p>Цена: ${price}</p>
            </div>`
        }
        // const {name, mass, eye_color, films} = payload
        // main.innerHTML = `<h1>${name}</h1>
        //                  <section>ЖЫРНОСТЬ: ${mass}кг</section>
        //                  <section style="color: ${eye_color}">Цвет глаз</section>
        //                  `
        // for (const filmUrl of films){
        //     const filmId = filmUrl.split('/films/')[1].slice(0,-1)
        //     main.innerHTML += `<a href="#/films/${filmId}">Фильм №${filmId}</a>`
        // }
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
        `
        for (const {url} of images || [] ) {
            main.innerHTML += `<div><img style= "max-width:20vw" src="http://shop-roles.node.ed.asmer.org.ua/${url}"></div>`
        }
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
{q1: JSON.stringify([{_id}])}
)

const gqlGoodById = (_id) => 
gql(
    "http://shop-roles.node.ed.asmer.org.ua/graphql",
    `
    query roots1($q1: String) {
    GoodFindOne(query: $q1) {
        _id
        name
        price
        description
        createdAt
        categories {
            _id
            createdAt
            name
        }
        images {
            _id
            createdAt
            text
            url
            originalFileName
        }
    }
  }
`,
{q1: JSON.stringify([{_id}])}
)

const actionRootCats = () =>
    actionPromise('rootCats', gqlRootCats())

store.dispatch(actionRootCats())

const actionCategoryById = (_id) =>
    actionPromise('categoryById', gqlCategoryById(_id))

const actionGoodById = (_id) =>
    actionPromise('goodById', gqlGoodById(_id))


window.onhashchange = () => {
    const [,route, _id] = location.hash.split('/')

    const routes = {
        people(){
            console.log('People', _id)
            store.dispatch(actionGetPeople(_id))
        },
        films(){
            store.dispatch(actionGetFilm(_id))
        },
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
        },
        //register(){
            ////нарисовать форму регистрации, которая по нажатию кнопки Login делает store.dispatch(actionFullRegister(login, password))
        //},
    }

    if (route in routes){
        routes[route]()
    }
}

window.onhashchange()
