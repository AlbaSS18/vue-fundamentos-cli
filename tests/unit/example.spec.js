describe('Example component', () => {

  test( 'Debe de ser mayor a 10', () => { // Función síncrona que puede transformarse en asíncrona.

    // Arreglar
    let value = 5;

    // Estímulo
    value += 2;

    // Observar el resultado
    if(value > 10){
      // TODO: todo bien
    }
    else{
      throw `${value} no es mayor a 10`;
    }
  })


})
