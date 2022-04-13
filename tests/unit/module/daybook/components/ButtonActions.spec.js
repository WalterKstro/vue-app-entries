import { shallowMount } from '@vue/test-utils';
import ButtonActions from '../../../../../src/modules/daybook/components/ButtonActions.vue';

describe('Pruebas en el componente <ButtonActions>', () => {
    test('Debe mostrar el icono, por defecto', () => {
        const wrapper = shallowMount(ButtonActions);
        const icon = wrapper.find('i');
        expect(icon.classes()).toContain('bi-file-earmark-plus');
    });
    test('Debe mostrar el icono por argumento', () => {
        const wrapper = shallowMount(ButtonActions, {
            propsData: {
                icon: 'bi-file-check'
            }
        });
        const icon = wrapper.find('i');
        expect(icon.classes()).toContain('bi-file-check');
    });
    test('Debe emitir el evento eventEmitedFromButtonActions', () => {
        const wrapper = shallowMount(ButtonActions);
        wrapper.find('button').trigger('click');
        expect(wrapper.emitted('eventEmitedFromButtonActions')).toBeTruthy();
    });
})