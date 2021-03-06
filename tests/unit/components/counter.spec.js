
import {shallowMount, mount} from '@vue/test-utils'
import Counter from '@/components/Counter'

/**
 * MOUNT: monta el componente y los subcomponentes.
 * SHALLOWMOUNT: monta el componente actual.
 */
describe('Counter component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });
    
    xtest('debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
        // Copia física del componente
    })

    test('h2 debe de tener el valor por defecto', ()=> {
        expect(wrapper.find('h2').exists()).toBe(true); // Check if element exists in the DOM.

        const h2Value = wrapper.find('h2').text(); // Get the text in h2 tag

        expect(h2Value).toBe('Counter 200');
    })

    test('el valor por defecto debe de ser 200 en el p', ()=> {
        // pTags
        // date-testid es un atributo que permite identificar los elementos html ya que si ponemos un class o un id, estos atributos podrían borrarse.
        const value = wrapper.find('[data-testid="counter"]').text();

        //expect segundo p === 200
        // expect(wrapper.findAll('p').at(1).text()).toBe("200");
        expect(value).toBe("200");
    })

    test('debe incrementar y decrementar el valor del contador', async () => {
        const [increaseBtn, decreaseBtn] = wrapper.findAll("button");

        // Increase
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');

        // Decrease
        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');

        const value = wrapper.find('[data-testid="counter"]').text();
        expect(value).toBe("201");

    })


    test('debe de establecer el valor por defecto', async () => {
        console.log(wrapper.props()); // El valor de title siempre va a ser undefined porque lo que montamos es un componente independiente. Además no estamos montando el app.

        const start = wrapper.props('start');
        // También puedes hacer la desestrucuración {start} = wrapper.props();

        const value = wrapper.find('[data-testid="counter"]').text();
        expect(Number(value)).toBe(start);

    })

    test('debe de mostrar la prop title', async () => {

        const title = 'Hola mundo!!!!'

        const wrapper = shallowMount(Counter, {
            props: {
                title
            }
        });

        expect(wrapper.find('h2').text()).toBe(`${title} 200`);

    })
})