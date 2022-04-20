import { shallowMount } from '@vue/test-utils';
import Entry from '../../../../../src/modules/daybook/components/Entry.vue';

describe('Pruebas en el componente <Entry/>', () => {

    let wrapper;
    let props;
    let mockRouter;
    beforeEach(() => {
        
        props = {
            entry : {
                id: '-MyIm6N1MD0hlNXSBT9O',
                date:"miércoles, 16 de marzo de 2022",
                description :"The product itself is focused on data collection; from the first 50 companies ESGgo spoke to, they learned that there were no tools available.",
                title:"The Intuitive Vue Framework"
            }
        }

        mockRouter = {
            push: jest.fn()
        }

        wrapper = shallowMount(Entry, {
            props,
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        });
    })

    test('Debe mostrar el componente, correctamente', () => {
        expect( wrapper.html() ).toMatchSnapshot();
    })
    test('Debe retornar un extracto, la propiedad computada oneStringExtractOfDescription de 15 palabras', () => {
        const extract = wrapper.vm.oneStringExtractOfDescription.split(' ');
        expect( extract.length ).toBe(15);
    })
    test('Debe redireccionar a la entrada, si se hace clic', () => {
        wrapper.find('.card').trigger('click');

        expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'entry', params: { id: props.entry.id } });
    })
})