// function createStore(reducer){
//     return {
//         getState,
//         dispatch,
//         subscribe
//     }
// }

// actions.js
const buyItem = (item, quantity, funds) => ({
    type: 'BUY_ITEM',
    payload: {
        item,
        quantity,
        funds
    }
});

// reducers.js
const initialState = {
    kiosk: {
        beer: { quantity: 100, price: 2 },
        chips: { quantity: 50, price: 1.5 },
        chocolate: { quantity: 30, price: 3 }
    },
    funds: 1000
};

const kioskReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'BUY_ITEM': {
            const { item, quantity, funds } = action.payload;
            const itemPrice = state.kiosk[item].price;
            const totalPrice = itemPrice * quantity;
            if (state.kiosk[item].quantity >= quantity && funds >= totalPrice) {
                return {
                    ...state,
                    kiosk: {
                        ...state.kiosk,
                        [item]: {
                            ...state.kiosk[item],
                            quantity: state.kiosk[item].quantity - quantity
                        }
                    },
                    funds: state.funds - totalPrice
                };
            } else {
                return state;
            }
        }
        default:
            return state;
    }
};

// store.js
// function createStore(kioskReducer){
//     return {
//         getState,
//         dispatch,
//         subscribe
//     }
// }
const store = createStore(kioskReducer);

// app.js
const render = () => {
    const kioskItemsDiv = document.getElementById('kiosk-items');
    const itemSelect = document.getElementById('item-select');
    const quantityInput = document.getElementById('quantity-input');
    const buyButton = document.getElementById('buy-button');
    const fundsParagraph = document.getElementById('funds');

    // kioskItemsDiv.innerHTML = '';
    // Object.entries(store.getState().kiosk).forEach(([item, { quantity, price }]) => {
    //     const itemDiv = document.createElement('div');
    //     itemDiv.textContent = `${item}: ${quantity} available, ${price} each`;
    //     kioskItemsDiv.appendChild(itemDiv);
    // });
 
    fundsParagraph.textContent = `Funds: ${store.getState().funds}`;

    buyButton.onclick = () => {
        const selectedItem = itemSelect.value;
        const selectedQuantity = parseInt(quantityInput.value);
        store.dispatch(buyItem(selectedItem, selectedQuantity, store.getState().funds));
    };
};

store.subscribe(render);
render();

// Sync title with funds
const syncTitle = () => {
    document.title = `Kiosk - Funds: ${store.getState().funds}`;
};

// store.subscribe(syncTitle);
// syncTitle();
