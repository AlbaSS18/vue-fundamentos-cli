<template>
  <!-- Para crear el componente, se puede poner Vue, y por defecto se crea la estructura-->
  <h2>Counter!!!</h2>
  <p>{{counter}} <sup>2</sup> = {{ squareCounter }}</p>
  <p>{{counter}} <sup>2</sup> = {{ squareCounter }}</p>
</template>

<script>
export default {
    // name: 'Patito' // Se puede poner nombre a los componentes para identificarlos
    data() {
        return {
            counter : 5
        }
    },
    methods: {
        getSquare(){
            return this.counter * this.counter;
        }
    },
    computed: {
        squareCounter(){
            return this.counter * this.counter;
        }
    }
}
</script>

<style>

</style>