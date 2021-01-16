import { createStore } from 'vuex'
import vectorImages from './images/vectorImages.js'
import homeImages from './images/homeImages.js'
import creativeImages from './images/creativeImages.js'
import freeImages from './images/freeImages.js'
import menuConst from './constants/menus.js'
import messages from './constants/messages.js'
import coverImages from './constants/coverImages'

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
    activePage: {
      pageName: "Nothing"
    },
    vectorsSectionsDataParsed: vectorImages.parsedImages,
    homeSectionsData: homeImages.parsedImages,
    creativeSectionsDataParsed: creativeImages.parsedImages,
    freeImagesParsed: freeImages.parsedImages, 
    menus: menuConst,
    msg: messages,
    covImg: coverImages
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
