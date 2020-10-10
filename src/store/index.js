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
                  {width: '220px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '230px', height: '200px'},
                  {width: '260px', height: '200px'},
                  {width: '220px', height: '200px'},
                  {width: '350px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '230px', height: '200px'},
                  {width: '260px', height: '200px'},
                  {width: '150px', height: '200px'},
                  {width: '290px', height: '200px'},
                  {width: '220px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '220px', height: '200px'},
                  {width: '350px', height: '200px'},
                  {width: '250px', height: '200px'},
                  {width: '230px', height: '200px'},
                  {width: '260px', height: '200px'},
                  {width: '150px', height: '200px'},
                  {width: '290px', height: '200px'},
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
