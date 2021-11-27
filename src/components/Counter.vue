<template>
  <!-- Para crear el componente, se puede poner Vue, y por defecto se crea la estructura-->
  <h2>{{customTitle}} {{start}}</h2>
  <p>{{counter}} <sup>2</sup> = {{ squareCounter }}</p>
  <p data-testid="counter">{{counter}}</p>

  <div class="buttons-container">
      <button @click="increase">+1</button>
      <!-- v-on: es sinónimo de @ -->
      <button @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            required: false,
            default: 200,
            validator (value) {
                return value > 100;
            }
        }
    },
    // name: 'Patito' // Se puede poner nombre a los componentes para identificarlos
    data() {
        return {
            counter : this.start
        }
    },
    methods: {
        getSquare(){
            return this.counter * this.counter;
        },
        increase() {
            this.counter ++; // No hace falta poner return
        },
        decrease(){
            this.counter --;
        }
    },
    computed: {
        squareCounter(){
            return this.counter * this.counter;
        },
        customTitle(){
            return this.title || 'Counter';
        }
    }
}
</script>

<style>

button {
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}

button:hover {
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}


</style>