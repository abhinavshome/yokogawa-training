export const SELECT_CONTACT = "SELECT_CONTACT"

export function selectContact(userId) {
    return {
        type: SELECT_CONTACT,
        data: userId
    }
}
