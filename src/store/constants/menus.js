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
    }
}

function createLink(msg){
    return '/' + msg.replace(/\s/g, '-');
}