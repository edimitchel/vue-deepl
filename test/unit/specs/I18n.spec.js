import Vue from 'vue'
import I18nAssistant from '@/components/i18n-assistant'

describe('I18n-assistant.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(I18nAssistant)
    const vm = new Constructor().$mount()
    console.log(vm.$el)
    expect(vm.$el.querySelector('#i18nAssist').textContent)
      .to.exists()
  })
})
