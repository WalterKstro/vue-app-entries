import { createStore } from "vuex";
import storeDayBook from "../../../../../src/modules/daybook/store/index.js";
import { afterState } from "../mock/states-daybook.js";
import { shallowMount } from "@vue/test-utils";
import EntryList from "../../../../../src/modules/daybook/components/EntryList.vue";

const vuexStore = ( initState ) => createStore({
    modules: {
        storeDayBook : {...storeDayBook, state: {...initState}}
    }
});

const mockRouter = {
    push: jest.fn()
}

describe('Pruebas, en el componente <EntryList/>', () => {

    let wrapper;
    let store;
    beforeEach(() => {
        jest.clearAllMocks();
        
        store = vuexStore( afterState );
        wrapper = shallowMount( EntryList, { 
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [ store ]
            }
         });
    })

    test('Deberia el getter filteredArrayEntriesByField, mostrar todas las entradas, sin un argumento enviado', () => {
        const results = wrapper.componentVM.filteredArrayEntriesByField();
        expect( results.length ).toBe( afterState.arrayEntries.length );
    })

    test('Deberia el getter filteredArrayEntriesByField, filtrar las entradas, con un argumento enviado', () => {
        const arrayResults = wrapper.componentVM.filteredArrayEntriesByField('react')
        const arrayTitles = arrayResults.map( entry => entry.title.toLowerCase() );

        arrayTitles.forEach( title => expect(title.toLowerCase()).toContain('react') );
        
    })
});