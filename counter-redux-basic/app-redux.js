function reducer(state = 0, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "INCREMENT_BY":
            return state + action.payload;
        default:
            return state;
    }
}

// function dispatch(action) {
//     console.log('---------');
//     console.log('prev state', state);
//     state = reducer(state, action);
//     console.log(action);
//     console.log('curr state', state);
//     display();
// }

const store = Redux.createStore(reducer);
const dispatch = store.dispatch;
store.subscribe(display);

function display() {
    console.log('called')
    document.getElementById('count').innerHTML = store.getState();
}