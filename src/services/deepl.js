import axios from 'axios'

const DEEPL_ENDPOINT = 'https://api.deepl.com/v1/translate'

export default function detectLanguage (text) {
  return axios({
    method: 'get',
    url: [DEEPL_ENDPOINT, ''].join('/'),
    data: {
      text: text
    }
  }).then(r => r.detected_source_language)
}

export function translate (text, options) {
  return axios({
    method: 'get',
    url: [DEEPL_ENDPOINT].join('/'),
    data: {
      text: text,
      target_lang: options.lang
    }
  })
}

export function doubleCheck (text, options) {
  translate(text, options)
    .then(t => translate(t.text, {
      lang: t.detected_source_language
    }))
}
