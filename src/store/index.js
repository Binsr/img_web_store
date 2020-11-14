import { createStore } from 'vuex'
import vectorImages from './images/vectorImages.js'
import homeImages from './images/homeImages.js'
import creativeImages from './images/creativeImages.js'
import freeImages from './images/freeImages.js'
import routesConst from './constants/routes.js'
import messages from './constants/messages.js'

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
    creativeSectionsDataParsed: creativeImages.parsedImages,
    freeImagesParsed: freeImages.parsedImages, 
    routerLinks: routesConst,
    msg: messages
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
