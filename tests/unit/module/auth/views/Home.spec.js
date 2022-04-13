import { shallowMount } from '@vue/test-utils';
import Home from '../../../../../src/modules/auth/views/Home.vue';

describe('Pruebas en la vista home del modulo auth', () => {

    test('Debe de renderizar correctamente el componente View', () => {
        const wrapper = shallowMount(Home);
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('Debe de llamarse el método push, del router', () => {
        const objectRouter = {
            push: jest.fn()
        }

        const wrapper = shallowMount(Home, {
            global: {
                mocks: {
                    $router: objectRouter
                }
            }
        });
        
        wrapper.find('button').trigger('click');

        expect(objectRouter.push).toHaveBeenCalled();
        expect(objectRouter.push).toHaveBeenCalledWith({name: 'entry-no-selected'});
    });
})