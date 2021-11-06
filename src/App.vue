<template>
  <!-- Esto no era posible de hacer en VUE2. En Vue2 no era posible tener más de un elemento root dentro del template. En VUE3 se reemplazó -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- SINTAXIS PERMITIDA para los componentes: KebalKase o PascalKase -->
  <!-- <Counter :start="101"/> --> <!-- equivalente a v-bind: -->
  <!-- Para las props la sixtaxis permitida es KebalKase -->
  <Indecision/>
</template>

<script>
// IMPORTAR COMPONENTE: import HelloWorld from './components/HelloWorld.vue'
// También se puede escribir '@/components/HelloWorld.vue' que indica la carpeta source.
// Los componentes no solo tienes que importarlo, sino indicarlo en la lista de "components".
import Counter from './components/Counter.vue'
import Indecision from './components/Indecision.vue'

export default {
  name: 'App',
  components: {
    Counter,
    Indecision
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
