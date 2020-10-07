import { createStore } from 'vuex'

export default createStore({
  state: {
    test: 'Teste',
    homeSectionsData: [
      {msg: 'Beautiful and inspiring images, uploaded daily.',
       images: [{width: '200px', height: '200px'},
                {width: '220px', height: '200px'},
                {width: '70px', height: '200px'},
                {width: '190px', height: '200px'},
                {width: '200px', height: '200px'}]
      },
      {msg: 'Latest Editorial Coverage/Events',
       images: [{width: '120px', height: '200px'},
                {width: '200px', height: '200px'},
                {width: '200px', height: '200px'},
                {width: '160px', height: '200px'},
                {width: '250px', height: '200px'}]
      },
      {msg: 'Find best vectors, illustrations and designs',
       images: [{width: '200px', height: '200px'},
                {width: '200px', height: '200px'},
                {width: '150px', height: '200px'},
                {width: '200px', height: '200px'},
                {width: '250px', height: '200px'}]
      },
      {msg: 'Find best vectors, illustrations and designs',
       images: [{width: '200px', height: '200px'},
                {width: '200px', height: '200px'},
                {width: '130px', height: '200px'},
                {width: '260px', height: '200px'},
                {width: '200px', height: '200px'}]
      },
      {msg: 'Beautiful and inspiring free images, uploaded daily.',
       images: [{width: '200px', height: '200px'},
                {width: '200px', height: '200px'},
                {width: '100px', height: '200px'},
                {width: '300px', height: '200px'},
                {width: '150px', height: '200px'}]
      }]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
