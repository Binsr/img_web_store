import { createStore } from 'vuex'

export default createStore({
  state: {
    COMING_SOON: 'Coming soon',
    homeSectionsData: [
      {msg: 'Beautiful and inspiring images, uploaded daily.',
       images: [{width: '200', height: '150'},
                {width: '120', height: '150'},
                {width: '200', height: '150'},
                {width: '120', height: '150'},
                {width: '200', height: '150'}],
        seeMoreLink: '/creative'
      },
      {msg: 'Latest Editorial Coverage/Events',
      images: [{width: '200', height: '150'},
               {width: '120', height: '150'},
               {width: '200', height: '150'},
               {width: '120', height: '150'},
               {width: '200', height: '150'}],
        seeMoreLink: '/editorial'
      },
      {msg: 'Find best vectors, illustrations and designs',
      images: [{width: '200', height: '150'},
               {width: '120', height: '150'},
               {width: '200', height: '150'},
               {width: '120', height: '150'},
               {width: '200', height: '150'}],
        seeMoreLink: '/vectors'
      },
      {msg: 'Beautiful and inspiring free images, uploaded daily.',
       images: [{width: '200', height: '150'},
                {width: '120', height: '150'},
                {width: '200', height: '150'},
                {width: '120', height: '150'},
                {width: '200', height: '150'}],
        seeMoreLink: '/free'
      }],
      creativeSectionsData: 
      {
         images: [{width: '350', height: '200'},
                  {width: '150', height: '200'},
                  {width: '420', height: '200'},
                  {width: '150', height: '200'},
                  {width: '170', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                  {width: '250', height: '200'},
                ]
      },
      vectorsSectionsData: 
      {
         images: [{width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
                  {width: '150', height: '150'},
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
