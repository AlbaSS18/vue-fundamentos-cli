describe('Example component', () => {

  test( 'Debe de ser mayor a 10', () => { // Función síncrona que puede transformarse en asíncrona.

    // Arreglar
    let value = 10;

    // Estímulo
    value += 2;

    // Observar el resultado
    expect(value).toBeGreaterThan(10);
  })


})
