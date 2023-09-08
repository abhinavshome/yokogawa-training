// setTimeout(function () {
//     console.log('After 3s')
// }, 3000);

// const now = Date.now();

// console.log('now 1');

// while (Date.now() - now < 5000) { }

// console.log('now 2');

// Promise
const fruitPromise = new Promise(function (resolve, reject) {
    // setTimeout(() => { resolve('Mango') }, 2000)
    setTimeout(() => { reject('Some network error') }, 2000)
});

// function caller() {
//     fruitPromise.then((data) => { console.log('Got this ->', data) }, (err) => {
//         console.log('Got this error -> ', err)
//     });
// }
// caller()

async function caller() {
    try {
        const data = await fruitPromise;
        console.log('Got this ->', data);
    } catch (err) {
        console.log('Got this error -> ', err)
    }
}

caller();
console.log('Other things');

const todosPromise = fetch('https://jsonplaceholder.typicode.com/todos');

async function fetchTodos() {
    try {
        const res = await todosPromise;
        const data = await res.json();
        console.log("success: ", data);
    } catch (err) {
        console.log("err: ", err)
    }
}

fetchTodos()
console.log('Other things 2');



