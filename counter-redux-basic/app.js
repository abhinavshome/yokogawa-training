let count = 0;

function increment() {
    count++;
    display();
}

function incrementBy(num) {
    count += num;
    display();
}

function decrement() {
    count--;
    display();
}

function display() {
    document.getElementById('count').innerHTML = count;
}