<template>
  <section>
    <h2>You need some help for translate your mind ?</h2>
    <form action="#">
      <i18n-assistant>
        <textarea name="test" placeholder="Begin typing or use translater helper button on your right"></textarea>
      </i18n-assistant>
    </form>
  </section>
</template>

<script>
import I18nAssistant from './i18n-assistant'
export default {
  name: 'example-form',
  data () {
    return {
    }
  },
  components: {
    I18nAssistant
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

</style>
