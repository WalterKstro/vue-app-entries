import { findOfOneArray } from '../../utils/index.js';

const mutations = {
    SET_ALL_ENTRIES(state, payload) {
        state.arrayEntries = payload
    },
    SET_IS_LOADING(state, payload) {
        state.isLoading = payload
    },
    SET_MESSAGE(state, payload) {
        state.message = payload
    },
    SET_UPDATE_ENTRY(state, payload) {
        const targetIndex = findOfOneArray(state.arrayEntries, payload.id)
        state.arrayEntries[targetIndex] = payload
    },
    SET_CREATE_ENTRY(state, payload) {
        state.arrayEntries.unshift(payload)
    },
    SET_DELETE_ENTRY(state, payload) {
        const targetIndex = findOfOneArray(state.arrayEntries, payload)
        state.arrayEntries.splice(targetIndex, 1)
    },
    CLEAR_ENTRIES(state) {
        state.arrayEntries = []
        state.isLoading = true
        state.message = ''
    }
}

export default mutations