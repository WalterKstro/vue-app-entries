import { createStore } from "vuex";
import storeDayBook from "../../../../../src/modules/daybook/store/index.js";
import { initialState, afterState } from "../mock/states-daybook.js";
import { shallowMount } from "@vue/test-utils";
import EntryView from '../../../../../src/modules/daybook/views/EntryView.vue';
import Swal from 'sweetalert2'
import { optionDeleteSweetAlert } from "./../../../../../src/modules/daybook/utils/optionSweetAlert.js";

const vuexStore = ( initState ) => createStore({
    modules: {
        storeDayBook : {...storeDayBook, state: {...initState}}
    }
});


const mockRouter = {
    push: jest.fn()
}

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}))


describe('Pruebas, en el componente <EntryView/>', () => {

    let wrapper;
    let storeFull;
    let storeEmpty;

    beforeEach(() => {
        jest.clearAllMocks();

        storeFull = vuexStore( afterState );
        storeFull.dispatch = jest.fn();

        storeEmpty = vuexStore( initialState );

         wrapper = shallowMount( EntryView, { 
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [ storeFull ]
            },
            propsData: { id: '-MyIm6N1MD0hlNXSBT9O' }
         });

    })

    test('Debería redireccionar a /daybook, si el id, enviado, como prop, no es válido',  () => {
        const wrapper = shallowMount( EntryView, {
            global: {
                mocks: {$router: mockRouter},
                plugins: [ storeFull ]
            },
            propsData: { id: '-565555' }
        } );

        expect( mockRouter.push ).toHaveBeenCalledWith({name: 'entry-no-selected'});
    })

    test('Deberia mostrar la entrada, si el id prop, es válido', () => {
        const entry = wrapper.vm.entry;
        const entryExpected = afterState.arrayEntries.find( entry => entry.id == wrapper.props('id') )
        expect( entry ).toMatchObject( entryExpected );
        expect( mockRouter.push ).not.toHaveBeenCalled();
    })
    
    test('Debe de eliminar una entrada y redireccionar a /daybook', async ( ) => {
        const { dispatch } = storeFull;

        Swal.fire.mockReturnValueOnce( await Promise.resolve( { isConfirmed:true }) );
        wrapper.find('button').trigger('click');
        
        expect( Swal.fire ).toHaveBeenCalledWith( optionDeleteSweetAlert);

        setTimeout( () => {
            expect( mockRouter.push ).toHaveBeenCalledWith( {name: 'entry-no-selected'} );
            expect( dispatch ).toHaveBeenCalled();
            expect( dispatch ).toHaveBeenCalledWith( 'storeDayBook/asyncDeleteEntry', {id: wrapper.props('id')} );
        } , 1000 );

    })

})