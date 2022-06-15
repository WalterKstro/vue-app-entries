import instanceAxios from "../../../../api/index"

const actions = {


    async asyncGetAllEntries({ commit }) {
        try {
            const { data } = await instanceAxios.get('entries.json')
            const arrayEntries = []

            for (let [key, value] of Object.entries(data)) {
                arrayEntries.push({
                    id: key,
                    ...value
                })
            }

            commit('SET_ALL_ENTRIES', arrayEntries.reverse())
            commit('SET_IS_LOADING', false)

        } catch (error) {
            commit('SET_MESSAGE', error.message)
        }
    },

    async asyncUpdateEntry({ commit }, payload) {
        const { id, ...objectPayload } = payload
        try {
            const { status, data } = await instanceAxios.put(`entries/${id}.json`, objectPayload)
            commit('SET_UPDATE_ENTRY', { ...data, id })
        } catch (error) {
            commit('SET_MESSAGE', error.message)
        }
    },

    async asyncCreateEntry({ commit }, payload) {
        try {
            const { data, status } = await instanceAxios.post('entries.json', payload)

            commit('SET_CREATE_ENTRY', { id: data.name, ...payload })

            return data.name;

        } catch (error) {
            commit('SET_MESSAGE', error.message)
        }
    },

    async asyncDeleteEntry({ commit }, payload) {
        const { id } = payload
        try {
            await instanceAxios.delete(`entries/${id}.json`)
            commit('SET_DELETE_ENTRY', id)
        } catch (error) {
            commit('SET_MESSAGE', error.message)
        }
    }



}

export default actions