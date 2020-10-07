import { createStore } from 'vuex'

export default createStore({
  state: {
    test: 'Teste',
    homeSectionsData: [
      {msg: 'Beautiful and inspiring images, uploaded daily.',
       images: [{width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'}]
      },
      {msg: 'Latest Editorial Coverage/Events',
       images: [{width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'}]
      },
      {msg: 'Find best vectors, illustrations and designs',
       images: [{width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'}]
      },
      {msg: 'Find best vectors, illustrations and designs',
       images: [{width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'}]
      },
      {msg: 'Beautiful and inspiring free images, uploaded daily.',
       images: [{width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'}]
      }]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
