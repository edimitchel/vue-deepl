<template>
  <div id="i18nAssist">
    <form action="" class="i18n-assistant-form" v-if="showForm || !immersive">
      <textarea v-bind="text" placeholder="Your text to translate"></textarea>
      <div class="actions">
        <button type="button" class="translate" @click="translate">Translate</button>
        <select :value="languageTarget">
          <option :value="lang.name" :key="lang.name" v-for="lang in langsAvailable">{{lang.title}}</option>
        </select>
        <button type="button" class="check" @click="check">Check translation</button>
      </div>
    </form>
    <I18NButton @click="toggleHelp" v-if="immersive" />
    <slot />
  </div>
</template>

<script>
import I18NButton from './i18n-button'

const LANGS = [
  {name: 'en', title: 'English'},
  {name: 'de', title: 'German'},
  {name: 'fr', title: 'French'},
  {name: 'es', title: 'Spanish'},
  {name: 'it', title: 'Italian'},
  {name: 'nl', title: 'Dutch'},
  {name: 'pl', title: 'Polnish'}
]

import { translate, doubleCheck } from '@/services/deepl'

// Initialize the annoying-background directive.
export default {
  name: 'i18n-assist-field',
  data () {
    return {
      immersive: true,

      showForm: true,
      langsAvailable: LANGS,

      languageTarget: LANGS[0].name,
      text: ''
    }
  },
  mounted () {
    this.immersive = this.$slots.default && this.$slots.default.length > 0
  },
  methods: {
    translate () {
      translate(this.text, {
        lang: this.languageTarget
      }).then(r => {
        console.log(r)
      })
    },
    check () {
      doubleCheck(this.text, {
        lang: this.languageTarget
      }).then(r => {
        // compare input text and result and
      })
    },
    toggleHelp () {
      this.showForm = !this.showForm
    }
  },
  components: {
    I18NButton
  }
}

</script>

<style scoped lang="scss">
  #i18nAssist {
    position: relative;
    width: auto;
    display: flex;
    flex-direction: column;

    form {
      position: relative;

      textarea {
        display: block;
        width: 100%;
        box-sizing: border-box;
        border-color: #999;
        border-bottom: none;
      }

      .actions {
        position: absolute;
        bottom: -.7em;
        left: 10px;
        right: 10px;
        display: flex;
        justify-content: space-between;

        button {
          cursor: pointer;
          padding: .3em .4em;
          background-color: #999;
          border: none;
          font-family: Arial, Helvetica, sans-serif;
          border-radius: 4px;
        }
      }
    }
  }
</style>

