// Переробить завдання Store на синтаксис ES6-класів:
// class Store{
//     #reducer;
//     #state;
//     #cbs = []
    
//     constructor(){
        
//     }
    
//     getState(){
        
//     }
    
//     subscribe(){
        
//     }
    
//     dispatch(){
        
//     }
// }
// Додайте потрібні параметри в методи, їх код, а також гетер state, який працює аналогічно getState.
// Перевірте на кіоску, адже об'єкт, створений з цього класу буде таким же, як і об'єкт,
//  створений createStore

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



