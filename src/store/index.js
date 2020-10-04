import { createStore } from 'vuex'

export default createStore({
  state: {
    test: 'Teste',
    homeSectionsData: [
      {msg: 'Beautiful and inspiring images, uploaded daily.',
       images: [{},{},{},{},{}]
      },
      {msg: 'Latest Editorial Coverage/Events',
       images: [{},{},{},{},{}]
      },
      {msg: 'Find best vectors, illustrations and designs',
       images: [{},{},{},{},{}]
      },
      {msg: 'Find best vectors, illustrations and designs',
       images: [{},{},{},{},{}]
      },
      {msg: 'Beautiful and inspiring free images, uploaded daily.',
       images: [{},{},{},{},{}]
      }]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
