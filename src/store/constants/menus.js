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
                link: createLink(messages.pages.editorial.fullName)
            },
            {
                message: messages.pages.editorial.page2,
                link: createLink(messages.pages.editorial.fullName) + createLink(messages.pages.editorial.page2)
            },
            {
                message: messages.pages.editorial.page3,
                link: createLink(messages.pages.editorial.fullName) + createLink(messages.pages.editorial.page3)
            },
            {
                message: messages.pages.free.fullName,
                link: createLink(messages.pages.editorial.fullName) + createLink(messages.pages.editorial.page4)
            },
        ]
    },
    burgerMenu:{
        pages:[
            {
                message: messages.pages.home,
                link: '/' //Treba ovo sve dinamicki
            },
            {
                message: messages.pages.customImg,
                link: createLink(messages.pages.customImg)
            },
            {
                message: messages.pages.pricing,
                link: createLink(messages.pages.pricing)
            },
            {
                message: messages.pages.faq,
                link: createLink(messages.pages.faq)
            },
            {
                message: messages.pages.contact,
                link: createLink(messages.pages.contact)
            },
        ]
    }
}

function createLink(msg){
    return '/' + (msg.replace(/\s/g, '-')).toLowerCase();
}