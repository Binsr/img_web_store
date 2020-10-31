import { createStore } from 'vuex'

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
         images: [{width: '600', height: '420', title: "Fitness male doing push up exercise", src: "https://image.shutterstock.com/image-photo/fitness-male-doing-push-exercise-600w-1808904574.jpg"},
                  {width: '600', height: '420', title: "Mail athlete deadlift kettlebell", src: "https://image.shutterstock.com/image-photo/male-athlete-deadlift-kettlebell-gym-600w-1808904589.jpg"},
                  {width: '600', height: '420', title: "Middle aged male athlete training", src: "https://image.shutterstock.com/image-photo/middle-aged-male-athlete-training-600w-1808904595.jpg"},
                  {width: '600', height: '420', title: "Fitness man", src: "https://image.shutterstock.com/image-photo/close-fitness-man-lifting-black-600w-1808904562.jpg"},
                  {width: '600', height: '420', title: "Freedom sign", src: "https://image.shutterstock.com/image-photo/wooden-board-tracking-sign-on-600w-319219889.jpg"},
                  {width: '390', height: '280', title: "Yoga pose at the beach", src: "https://image.shutterstock.com/image-photo/woman-silhouette-yoga-pose-beach-260nw-549014116.jpg"},
                  {width: '396', height: '620', title: "Yarn ball", src: "https://image.shutterstock.com/image-photo/yarn-ball-600w-170907920.jpg"},
                  {width: '390', height: '280', title: "Hands knitting", src: "https://image.shutterstock.com/image-photo/closeup-hands-knitting-260nw-170907869.jpg"},
                  {width: '396', height: '620', title: "Yarn ball", src: "https://image.shutterstock.com/image-photo/yarn-ball-600w-170907920.jpg"},
                  {width: '600', height: '420', title: "Middle age caucasian mother holding", src: "https://image.shutterstock.com/image-photo/middle-age-caucasian-mother-holding-600w-1788835076.jpg"},
                  {width: '390', height: '280', title: "Mountain hiking woman", src: "https://image.shutterstock.com/image-photo/female-outdoor-runner-running-through-260nw-1788835073.jpg"},
                  {width: '600', height: '420', title: "Back view of female traveller with touristic backpack", src: "https://image.shutterstock.com/image-photo/smiling-middle-age-caucasian-female-600w-1788835091.jpg"},
                  {width: '600', height: '420', title: "Below view of tourist traveler", src: "https://image.shutterstock.com/image-photo/smiling-caucasian-female-backpacker-walking-600w-1788835094.jpg"},
                  {width: '400', height: '620', title: "Young female hiker", src: "https://image.shutterstock.com/image-photo/middle-age-woman-wearing-mountaineering-600w-1790791223.jpg"}
                 ]
      },
      //     🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      //Izlaz🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      creativeSectionsDataParsed:{
        images: [[{width: '280', height: '200', title: "Fitness male doing push up exercise", src: "https://image.shutterstock.com/image-photo/fitness-male-doing-push-exercise-600w-1808904574.jpg"},
                  {width: '280', height: '200', title: "Mail athlete deadlift kettlebell", src: "https://image.shutterstock.com/image-photo/male-athlete-deadlift-kettlebell-gym-600w-1808904589.jpg"},
                  {width: '280', height: '200', title: "Middle aged male athlete training", src: "https://image.shutterstock.com/image-photo/middle-aged-male-athlete-training-600w-1808904595.jpg"},
                  {width: '280', height: '200', title: "Fitness man", src: "https://image.shutterstock.com/image-photo/close-fitness-man-lifting-black-600w-1808904562.jpg"}
                 ],
                 [{width: '280', height: '200', title: "Freedom sign", src: "https://image.shutterstock.com/image-photo/wooden-board-tracking-sign-on-600w-319219889.jpg"},
                  {width: '275', height: '200', title: "Yoga pose at the beach", src: "https://image.shutterstock.com/image-photo/woman-silhouette-yoga-pose-beach-260nw-549014116.jpg"},
                  {width: '125', height: '200', title: "Yarn ball", src: "https://image.shutterstock.com/image-photo/yarn-ball-600w-170907920.jpg"},
                  {width: '275', height: '200', title: "Hands knitting", src: "https://image.shutterstock.com/image-photo/closeup-hands-knitting-260nw-170907869.jpg"},
                  {width: '125', height: '200', title: "Yarn ball", src: "https://image.shutterstock.com/image-photo/yarn-ball-600w-170907920.jpg"}
                 ],
                 [{width: '240', height: '170', title: "Middle age caucasian mother holding", src: "https://image.shutterstock.com/image-photo/middle-age-caucasian-mother-holding-600w-1788835076.jpg"},
                  {width: '230', height: '170', title: "Mountain hiking woman", src: "https://image.shutterstock.com/image-photo/female-outdoor-runner-running-through-260nw-1788835073.jpg"},
                  {width: '240', height: '170', title: "Back view of female traveller with touristic backpack", src: "https://image.shutterstock.com/image-photo/smiling-middle-age-caucasian-female-600w-1788835091.jpg"},
                  {width: '240', height: '170', title: "Below view of tourist traveler", src: "https://image.shutterstock.com/image-photo/smiling-caucasian-female-backpacker-walking-600w-1788835094.jpg"},
                  {width: '110', height: '170', title: "Young female hiker", src: "https://image.shutterstock.com/image-photo/middle-age-woman-wearing-mountaineering-600w-1790791223.jpg"}
                 ],
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
