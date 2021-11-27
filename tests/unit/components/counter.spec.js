
import {shallowMount, mount} from '@vue/test-utils'
import Counter from '@/components/Counter'

/**
 * MOUNT: monta el componente y los subcomponentes.
 * SHALLOWMOUNT: monta el componente actual.
 */
describe('Counter component', () => {
    
    test('debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(Counter);

        expect(wrapper.html()).toMatchSnapshot();
        // Copia física del componente
    })
})