import { shallowMount } from "@vue/test-utils"
import Indecision from '@/components/Indecision'

describe('Indecision component', () => {

    let wrapper;
    let clgSpy;

    beforeEach(() => {
        wrapper = shallowMount(Indecision);
        clgSpy = jest.spyOn(console, 'log');
        jest.clearAllMocks(); // Limpia todos los mocks
    })

    test('debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('escribir en el input no debe de disparar nada (console.log)', async () => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');

        const input = wrapper.find('input');
        await input.setValue('Hola mundo'); // Espera para actualizar el DOM

        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).not.toHaveBeenCalled();
    })

    test('escribir símbolo de "?" debe de disparar el getAnswer', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');

        const input = wrapper.find('input');
        await input.setValue('Hola mundo?');

        /* 
            Si no tuviésemos el clearAllMocks(), esta prueba daría error (el resultado sería que se llamó dos veces), 
            ya que tendríamos el console de la prueba anterior. 
        */
        expect(clgSpy).toHaveBeenCalledTimes(1); 
        expect(getAnswerSpy).toHaveBeenCalled();

    })

    test('pruebas en getAnswer', () => {
        
    })

    test('pruebas en getAnswer - Fallo en el API', () => {
        
    })
});