// Успадкуйте клас Store у новому класі StoreThunk. 
// Новий клас повинен перекривати метод dispatch, перевіряти тип переданого екшона і якщо це функція, 
// запускати її, передавши в неї this.dispatch та this.getState. Ця умова написана тут.
//  Врахуйте, що в thunk передаються функції dispatch та getState без об'єкта до крапки, 
//  а ці методи в класі Store є звичайними функціями, схильними до втрати this.
//   Для прибиття this намертво до функції використовуйте метод bind. Подивитися можна тут та тут
//  Перевірте на модульному проекті 


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



class Store {
    #reducer;
    #state;
    #cbs = [];

    constructor(reducer, initialState) {
        this.#reducer = reducer;
        this.#state = initialState;
    }

    getState() {
        return this.#state;
    }

    subscribe(cb) {
        this.#cbs.push(cb);
        return () => {
            this.#cbs = this.#cbs.filter(c => c !== cb);
        };
    }

    dispatch(action) {
        if (typeof action === 'function') {
            return action(this.dispatch.bind(this), this.getState.bind(this));
        }
        const newState = this.#reducer(this.#state, action);
        if (newState !== this.#state) {
            this.#state = newState;
            this.#cbs.forEach(cb => cb(this.#state));
        }
    }

    get state() {
        return this.getState();
    }
}

//////////////////////////
////////////////////
/////////////
////

class StoreThunk extends Store {
    constructor(reducer, initialState) {
        super(reducer, initialState);
    }

    dispatch(action) {
        if (typeof action === 'function') {
            return action(this.dispatch.bind(this), this.getState.bind(this));
        }
        return super.dispatch(action);
    }
}
