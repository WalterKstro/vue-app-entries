import { createStore } from "vuex";
import storeDayBook from "../../../../../src/modules/daybook/store/index.js";
import { initialState, afterState } from "../mock/states-daybook.js";

const vuexStore = ( state ) => createStore({
    modules: {
        storeDayBook : {...storeDayBook, state}
    }
});

describe('Pruebas, en el state del modulo daybook', () => {
    let store;
    beforeEach(() => {
        store = vuexStore( afterState );
    })

    test('Debe tener el estado inicial', () => {
        const { state } = vuexStore( initialState );

        expect( state.storeDayBook ).toMatchObject( initialState );
        expect( state.storeDayBook.isLoading ).toBeTruthy();

    })

    /* MUTATIONS */
    test('Debe cambiar el estado inicial, con la mutación SET_CREATE_ENTRY', () => {
        const { state, commit } = vuexStore( initialState );

        const payload = {
            date: '2020-01-01',
            description: 'Descripción',
            title: 'Este es el que se creo',
        }

        commit('storeDayBook/SET_CREATE_ENTRY', payload);

        expect( state.storeDayBook.arrayEntries ).toContainEqual( payload );
        expect( state.storeDayBook.arrayEntries.length ).toBe( 1 );
    })

    test('Debe de actualizarse una entrada con la mutación SET_UPDATE_ENTRY', () => {
        const { state, commit } = store;
        const payload = { ...afterState.arrayEntries[0], title: 'Titulo actulaizado' };

        const storeEnties = state.storeDayBook.arrayEntries;

        commit('storeDayBook/SET_UPDATE_ENTRY', payload);

        expect( storeEnties[0] ).toMatchObject( payload );
        expect( storeEnties[0].title ).toBe( 'Titulo actulaizado' );
        expect( storeEnties.length ).toBe( 5 );
    })

    test('Debe de eliminar una entrada con la mutación SET_DELETE_ENTRY', () => {
        const { state, commit } = store;
        
        const payload = afterState.arrayEntries[0];
        const storeEnties = state.storeDayBook.arrayEntries;

        commit('storeDayBook/SET_DELETE_ENTRY', payload.id);

        expect( storeEnties.length ).toBe( 4 );
        expect( storeEnties.findIndex( entry => entry.id == payload.id ) ).toBe( -1 );
    })


    /* GETTERS */
    test('Debe de filtrar las entradas por su titulo con la getter filteredArrayEntriesByField',() => {
        const { getters } = store;

        const resultsFiltered = getters['storeDayBook/filteredArrayEntriesByField']('React');
        const allResults = getters['storeDayBook/filteredArrayEntriesByField']('');

        expect( resultsFiltered.length ).toBe( 2 );
        expect( allResults.length ).toBe( 4 );

    });
    test('Debe de obtener una entrada por su id con la getter getOneEntryById',() => {
        const { getters } = store;
        const result = getters['storeDayBook/getOneEntryById']('-MyIm6N1MD0hlNXSBT80');

        expect( result ).toMatchObject( afterState.arrayEntries.at(-1) );

    });
    test('Debe de obtener el total de entradas, con la getter getCounterTotal',() => {
        const { getters } = store;
        const total = getters['storeDayBook/getCounterTotal'];

        expect( total ).toBe( afterState.arrayEntries.length );

    });

    /* ACTIONS */

    test('Debe de obtener todas las entradas, con la acción asyncGetAllEntries', async () => {
        const { dispatch, state } = vuexStore( initialState );
        await dispatch('storeDayBook/asyncGetAllEntries');
        
        const entries = state.storeDayBook.arrayEntries;

        expect( entries.length ).toBe( 8 );
    })

    test('Debe de actualizar una entrada, con la acción asyncUpdateEntry', async () => {
        const { dispatch, state } = store;
        const payload =  {
            id: '-MyIm6N1MD0hlNXSBT9O',
            date: 'miércoles, 16 de marzo de 2022',
            description: 'The product itself is focused on data collection; from the first 50 companies ESGgo spoke to, they learned that there were no tools available. The company learned that most ESG tracking is currently done in some pretty esoteric systems — mostly spreadsheets or collaborative databases. External rating agencies may have their own tools, of course, but for internal use, it’s slim pickings.',
            title: 'Nuevo titulo',
          }

        await dispatch('storeDayBook/asyncUpdateEntry', payload);
        await dispatch('storeDayBook/asyncGetAllEntries');

        const entries = state.storeDayBook.arrayEntries;
        const entryUpdated = entries.find( entry => entry.id == payload.id );

        expect( entryUpdated ).toMatchObject( payload );
        expect( entryUpdated.title ).toBe( payload.title );
    })

    test('Debe de crear y eliminar una entrada, con la acción asyncCreateEntry y asyncDeleteEntry', async () => {
        const { dispatch, state } = store;
        const payload =  {
            date: 'martes, 19 de abril de 2022',
            description: 'The product itself is focused on data collection; from the first 50 companies ESGgo spoke to, they learned that there were no tools available. The company learned that most ESG tracking is currently done in some pretty esoteric systems — mostly spreadsheets or collaborative databases. External rating agencies may have their own tools, of course, but for internal use, it’s slim pickings.',
            title: 'Este es el titulo de la nueva entrada',
          }
        const idNewEntry =  await dispatch('storeDayBook/asyncCreateEntry', payload);
        await dispatch('storeDayBook/asyncGetAllEntries');
        
        const entries = state.storeDayBook.arrayEntries;
        const entryCreated = entries.find( entry => entry.id == idNewEntry );
        
        expect( entryCreated ).toMatchObject( { ...payload, id:idNewEntry} );
        expect( entryCreated).toBeTruthy();
        
        await dispatch('storeDayBook/asyncDeleteEntry', entryCreated);
        await dispatch('storeDayBook/asyncGetAllEntries');

        const entryDeleted = entries.find( entry => entry.id == idNewEntry );

        expect( entryDeleted ).toBeFalsy();

    })



})