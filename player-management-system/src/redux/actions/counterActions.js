export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_BY = "INCREMENT_BY";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function incrementBy(n) {
    return {
        type: INCREMENT_BY,
        data: n
    }
}

