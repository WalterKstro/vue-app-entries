const getters = {
    filteredArrayEntriesByField(state) {
        return (field = '') => state.arrayEntries.filter(
            entry => entry.title.toLowerCase().includes(field.toLowerCase())
        )
    },
    getOneEntryById(state) {
        return id => {
            const result = state.arrayEntries.find(entry => entry.id == id)
            return (result != undefined) ? { ...result } : null
        }
    },
    getCounterTotal(state) {
        return state.arrayEntries.length
    }
}

export default getters