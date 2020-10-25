import { createStore } from 'vuex'

export default createStore({
  state: {
    COMING_SOON: 'Coming soon',
    focusedImage: {
      width: null,
      height: null,
      activeSection: null,
      activeImgId: null,
      title: null
    },
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

      //Ulaz 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      creativeSectionsData: 
      {
         images: [{width: '250', height: '200'},
                  {width: '150', height: '200'},
                  {width: '220', height: '200'},
                  {width: '150', height: '200'},
                  {width: '150', height: '200'},
                  {width: '220', height: '200'},
                 ]
      },
      //     🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      //Izlaz🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      creativeSectionsDataParsed:{
        images: [[{width: '150', height: '200', title: "Summer vine"},
                  {width: '220', height: '200', title: "Running to the sea"},
                  {width: '150', height: '200', title: "Trooper"},
                  {width: '110', height: '200', title: "I tebe sam sit kafano"},
                  {width: '260', height: '200', title: "Iiiii"}
                 ],
                 [{width: '140', height: '200', title: "Compiled succ"},
                  {width: '220', height: '200', title: "App running"},
                  {width: '150', height: '200', title: "Output"},
                  {width: '120', height: '200', title: "Localhost"},
                  {width: '230', height: '200', title: "Iiiii"}
                 ],
                 [{width: '140', height: '200', title: "Vec vec"},
                  {width: '220', height: '200', title: "Selection"},
                  {width: '150', height: '200', title: "Visual"},
                  {width: '120', height: '200', title: "Explorer"},
                  {width: '210', height: '200', title: "Iiiii"}
                 ]
                ]
      },
      //     🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
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
