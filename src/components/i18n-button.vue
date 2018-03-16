<template>
  <button type="button" @click="$emit('click')">Help</button>
</template>

<script>
export default {
  name: 'i18n-button'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  position: absolute;
  top: 0;
  right: 0;
}

</style>
