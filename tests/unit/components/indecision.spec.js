import { shallowMount } from "@vue/test-utils"
import Indecision from '@/components/Indecision'

describe('Indecision component', () => {

    let wrapper;
    let clgSpy;

    beforeEach(() => {
        wrapper = shallowMount(Indecision);
        clgSpy = jest.spyOn(console, 'log');
    })

    test('debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('escribir en el input no debe de disparar nada (console.log)', async () => {
        const input = wrapper.find('input');
        await input.setValue('Hola mundo'); // Espera para actualizar el DOM

        expect(clgSpy).toHaveBeenCalledTimes(1);
    })

    test('escribir símbolo de "?" debe de disparar el fetch', () => {
        
    })

    test('pruebas en getAnswer', () => {
        
    })

    test('pruebas en getAnswer - Fallo en el API', () => {
        
    })
});