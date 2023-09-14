export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_BY = "INCREMENT_BY";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

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

export function setCurrentPage(page) {
    return {
        type: SET_CURRENT_PAGE,
        data: page
    }
}

