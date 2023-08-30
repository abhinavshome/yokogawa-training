function counterReducer(state = 0, action) {
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

function switchReducer(state = 'ON', action) {
    switch (action.type) {
        case 'SWITCH_ON':
            return 'ON';
        case 'SWITCH_OFF':
            return 'OFF';
        default:
            return state;
    }
}

const reducer = Redux.combineReducers({
    count: counterReducer,
    onOffSwitch: switchReducer
})

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
    console.log('called');
    const state = store.getState();
    console.log(state);
    document.getElementById('count').innerHTML = state.count;
    document.getElementById('switch').innerHTML = state.onOffSwitch;
}

display()