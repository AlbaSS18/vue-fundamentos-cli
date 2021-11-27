
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
        const value = wrapper.findAll('[data-testid="counter"]').text();

        //expect segundo p === 200
        // expect(pTags.at(0).text()).toBe("200");
        expect(value).toBe("200");
    })
})