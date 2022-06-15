import { shallowMount } from "@vue/test-utils";
import NoEntrySelected from "../../../../../src/modules/daybook/views/NoEntrySelected.vue";

const mockRouter = {
    push: jest.fn()
}

describe( 'Pruebas, en el componente <NoEntrySelected/>', () => {

    test('Deberia navegar a la ruta /daybook/new, cuando se da click en el botton de crear nueva entrada', () => {
        const wrapper = shallowMount(NoEntrySelected, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        });

        wrapper.findComponent('button-action-stub').vm.$emit('eventEmitedFromButtonActions');

        expect(mockRouter.push).toHaveBeenCalledWith({name: 'entry', params: {id: 'new'}});
        expect(mockRouter.push).toHaveBeenCalledTimes(1);
    });

});