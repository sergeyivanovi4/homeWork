//              //
//              //
// authReducer  //
//              //
//              //

function authReducer(token) {
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


//
// Проверочный код:

const actionAuthLogin  = token => ({type: 'AUTH_LOGIN', token})
const actionAuthLogout = ()    => ({type: 'AUTH_LOGOUT'})

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2Mzc3ZTEzM2I3NGUxZjVmMmVjMWMxMjUiLCJsb2dpbiI6InRlc3Q1IiwiYWNsIjpbIjYzNzdlMTMzYjc0ZTFmNWYyZWMxYzEyNSIsInVzZXIiXX0sImlhdCI6MTY2ODgxMjQ1OH0.t1eQlRwkcP7v9JxUPMo3dcGKprH-uy8ujukNI7xE3A0"


const store = createStore(authReducer)
store.subscribe(() => console.log(store.getState())) 

store.dispatch(actionAuthLogin(token))
/*{
    token: "eyJhbGc.....", 
    payload: {
      "sub": {
        "id": "6377e133b74e1f5f2ec1c125",
        "login": "test5",
        "acl": [
          "6377e133b74e1f5f2ec1c125",
          "user"
        ]
      },
      "iat": 1668812458
    }
}*/
store.dispatch(actionAuthLogout()) // {}

//              //
//              //
// cartReducer  //
//              //
//              //

function cartReducer(state={}, action) {
    const {type, count, good} = action 

    if (type === 'CART_ADD') {
        if (state[good._id]) {
            return {
                ...state,
                [good._id]: {
                    ...state[good._id], 
                    count: state[good._id].count = count,
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
                    count: state[good._id].count = count,
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


//
//Проверочный код
//

const store = createStore(cartReducer)
store.subscribe(() => console.log(store.getState())) //
console.log(store.getState()) //{}

store.dispatch(actionCartAdd({_id: 'пиво', price: 50})) 
// {пиво: {good: {_id: 'пиво', price: 50}, count: 1}}
store.dispatch(actionCartAdd({_id: 'чипсы', price: 75})) 
// {
    // пиво: {good: {_id: 'пиво', price: 50}, count: 1},
    // чипсы: {good: {_id: 'чипсы', price: 75}, count: 1},
//}
store.dispatch(actionCartAdd({_id: 'пиво', price: 50}, 5)) 
// {
    // пиво:  {good: {_id: 'пиво', price: 50}, count: 6},
    // чипсы: {good: {_id: 'чипсы', price: 75}, count: 1},
//}
store.dispatch(actionCartSet({_id: 'чипсы', price: 75}, 2)) 
// {
    // пиво:  {good: {_id: 'пиво', price: 50}, count: 6},
    // чипсы: {good: {_id: 'чипсы', price: 75}, count: 2},
//}
store.dispatch(actionCartSub({_id: 'пиво', price: 50}, 4)) 
// {
    // пиво:  {good: {_id: 'пиво', price: 50}, count: 2},
    // чипсы: {good: {_id: 'чипсы', price: 75}, count: 2},
//}
store.dispatch(actionCartDel({_id: 'чипсы', price: 75})) 
// {
    // пиво:  {good: {_id: 'пиво', price: 50}, count: 2},
//}
store.dispatch(actionCartClear())  // {}
//
//


//                  //
//                  //
//GraphQL запросы   //
//                  //
//                  //


// const gqlRootCats = () => 
//     gql(
//         "http://shop-roles.node.ed.asmer.org.ua/graphql",

//         `query roots{
//             CategoryFind (query: "[{\\"parent\\": null}]") {
//                 _id
//                 name
//         }
//     }`)


async function gql(endpoint, query, variables) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
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
