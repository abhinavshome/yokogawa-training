export const SET_CURRENT_USER_AND_TOKEN = "SET_CURRENT_USER_AND_TOKEN"
export const LOGOUT = "LOGOUT"

export function setCurrentUserAndToken(data) {
    return {
        type: SET_CURRENT_USER_AND_TOKEN,
        data: data
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}