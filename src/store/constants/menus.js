import messages from './messages.js';
export default{
    mainMenu: {
        pages:[
            {
                message: messages.pages.creative.fullName,
                link: createLink(messages.pages.creative.fullName)
            },
            {
                message: messages.pages.editorial.fullName,
                link: createLink(messages.pages.editorial.fullName)
            },
            {
                message: messages.pages.vectors.fullName,
                link: createLink(messages.pages.vectors.fullName)
            },
            {
                message: messages.pages.free.fullName,
                link: createLink(messages.pages.free.fullName)
            },
        ]
    },
    editorialMenu: {
        pages:[
            {
                message: messages.pages.editorial.page1,
                link: '/editorial/' //Treba ovo sve dinamicki
            },
            {
                message: messages.pages.editorial.page2,
                link: '/editorial/news'
            },
            {
                message: messages.pages.editorial.page3,
                link: '/editorial/sports'
            },
            {
                message: messages.pages.free.fullName,
                link: '/editorial/entertainment'
            },
        ]
    }
}

function createLink(msg){
    return './' + (msg.replace(/\s/g, '-')).toLowerCase();
}