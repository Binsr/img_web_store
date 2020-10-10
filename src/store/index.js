import { createStore } from 'vuex'

export default createStore({
  state: {
    COMING_SOON: 'Coming soon',
    homeSectionsData: [
      {msg: 'Beautiful and inspiring images, uploaded daily.',
       images: [{width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'}],
        seeMoreLink: '/creative'
      },
      {msg: 'Latest Editorial Coverage/Events',
       images: [{width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'}],
        seeMoreLink: '/editorial'
      },
      {msg: 'Find best vectors, illustrations and designs',
       images: [{width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'}],
        seeMoreLink: '/vectors'
      },
      {msg: 'Beautiful and inspiring free images, uploaded daily.',
       images: [{width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'},
                {width: '120px', height: '200px'},
                {width: '250px', height: '200px'}],
        seeMoreLink: '/free'
      }],
      creativeSectionsData: 
      {
         images: [{width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                ]
      },
      vectorsSectionsData: 
      {
         images: [{width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                  {width: '150px', height: '150px'},
                ]
      },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
