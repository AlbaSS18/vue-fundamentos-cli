
import {shallowMount, mount} from '@vue/test-utils'
import Counter from '@/components/Counter'

/**
 * MOUNT: monta el componente y los subcomponentes.
 * SHALLOWMOUNT: monta el componente actual.
 */
describe('Counter component', () => {
    
    xtest('debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(Counter);

        expect(wrapper.html()).toMatchSnapshot();
        // Copia física del componente
    })

    test('h2 debe de tener el valor por defecto', ()=> {
        const wrapper = shallowMount(Counter);

        expect(wrapper.find('h2').exists()).toBe(true); // Check if element exists in the DOM.

        const h2Value = wrapper.find('h2').text(); // Get the text in h2 tag

        expect(h2Value).toBe('Counter 200');
    })

    test('el valor por defecto debe de ser 200 en el p', ()=> {
        
        // Wrapper
        const wrapper = shallowMount(Counter);

        // pTags
        // date-testid es un atributo que permite identificar los elementos html ya que si ponemos un class o un id, estos atributos podrían borrarse.
        const value = wrapper.find('[data-testid="counter"]').text();

        //expect segundo p === 200
        // expect(wrapper.findAll('p').at(1).text()).toBe("200");
        expect(value).toBe("200");
    })

    test('debe incrementar y decrementar el valor del contador', async () => {
        
        const wrapper = shallowMount(Counter);

        // Increase
        const increaseBtn = wrapper.find("button");
        
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');

        // Decrease
        const decreaseBtn = wrapper.findAll("button").at(1);

        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');

        const value = wrapper.find('[data-testid="counter"]').text();
        expect(value).toBe("201");

    })
})