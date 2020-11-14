import { createStore } from 'vuex'
import vectorImages from './images/vectorImages.js'
import homeImages from './images/homeImages.js'
import creativeImages from './images/creativeImages.js'

export default createStore({
  state: {
    COMING_SOON: 'Coming soon',
    focusedImage: {
      width: null,
      height: null,
      activeSection: null,
      activeImgId: null,
      title: null,
      src: null
    },
    vectorsSectionsDataParsed: vectorImages.parsedImages,
    homeSectionsData: homeImages.parsedImages,
    creativeSectionsDataParsed: creativeImages.parsedImages
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
