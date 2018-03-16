<template>
  <div id="app">
    <ExampleForm></ExampleForm>
  </div>
</template>

<script>
import ExampleForm from './components/example-form'

export default {
  name: 'app',
  components: {
    ExampleForm
  },
  directives: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
