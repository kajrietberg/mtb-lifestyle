module.exports = {
    css: [
        '@/assets/css/style.scss'
    ],
    // modules: [
    //     '@nuxtjs/markdownit'
    // ],
    head: {
        title: 'MTB LifeStyle Webshop',
        titleTemplate: '%s - MTB LifeStyle',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'MTB LifeStyle is de webshop voor alles op het gebied van MountainBike vrijetijdskleding' },
            { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'MTB LifeStyle' },
            { hid: 'og:type', name: 'og:type', property:'og:type', content: 'Webshop' }
            // { hid: 'og:description', name: 'og:description', property:'og:description', content: '' },
            // { hid: 'og:image', name: 'og:image', property:'og:image', content: '' },
            // { hid: 'og:url', name: 'og:url', property:'og:url', content: 'https://' },
            // { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
            // { hid: 'twitter:site', name: 'twitter:site', content: '' },
            // { hid: 'twitter:title', name: 'twitter:title', content: '' },
            // { hid: 'twitter:description', name: 'twitter:description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    }
}