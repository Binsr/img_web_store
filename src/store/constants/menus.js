import messages from './messages.js';
export default{
    mainMenu: {
        pages:[
            {
                message: messages.pages.mainMenu.page0.fullName, // .stockContent treba da bude .pageGenerated TODO
                link: createLink(messages.pages.mainMenu.page0.fullName)
            },
            {
                message: messages.pages.mainMenu.page1.fullName,
                link: createLink(messages.pages.mainMenu.page1.fullName)
            },
            {
                message: messages.pages.mainMenu.page2.fullName,
                link: createLink(messages.pages.mainMenu.page2.fullName)
            },
            {
                message: messages.pages.mainMenu.page3.fullName,
                link: createLink(messages.pages.mainMenu.page3.fullName)
            },
            {
                message: messages.pages.mainMenu.page4.fullName,
                link: createLink(messages.pages.mainMenu.page4.fullName)
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
            {
                message: messages.pages.custom,
                link: createLink(messages.pages.custom)
            },
        ]
    }
}

function createLink(msg){
    return '/' + (msg.replace(/\s/g, '-')).toLowerCase();
}