import { shallowMount } from "@vue/test-utils"
import Indecision from '@/components/Indecision'

describe('Indecision component', () => {

    let wrapper;
    let clgSpy;

    /* 
        Node no tiene incluido el fetch. Por lo tanto, para quitar el warning que da las pruebas 
        hay que hacer un mock de la función fetch que está dentro del objeto window. En el caso de node, se encuentra en global.
    */
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/0-c44a7789d54cbdcad867fb7845ff03ae.gif'
        })
    })); 

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

    test('pruebas en getAnswer', async () => {
        await wrapper.vm.getAnswer();

        const img = wrapper.find('img');

        expect(img.exists()).toBeTruthy();
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/0-c44a7789d54cbdcad867fb7845ff03ae.gif');
        expect(wrapper.vm.answer).toBe('Sí!');
    })

    test('pruebas en getAnswer - Fallo en el API', async () => {

        fetch.mockImplementationOnce(() => Promise.reject('API is down'))

        await wrapper.vm.getAnswer();

        const img = wrapper.find('img');
        
        expect(img.exists()).toBeFalsy();
        expect(wrapper.vm.answer).toBe('No se pudo cargar el API');
    })
});