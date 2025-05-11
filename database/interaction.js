//Keeps track of what has been interacted with on the site
//Helps the mainPage update dynamically and add content to Lästa Articlar
//and render new cards
//id is the same as the correpsponding card/article in gameCards.json
let interaction = {

    newsPage: {
        id: 0,
        interacted: false
    },
    grannen: {
        id: 1,
        interacted: false
    },
    phus_video1: {
        id: 2,
        interacted: false
    },
    vilseledd: {
        id: 3,
        interacted: false
    },
    intervju_motstandare: {
        id: 4,
        interacted: false
    },
    artikel_assistent: {
        id: 5,
        interacted: false
    }, 
    kalender: {
        id: 6,
        interacted: false
    },
    borgmastaren_hittad: {
        id: 7,
        interacted: false
    },
    sistaArtikel: {
        id: 8,
        interacted: false
    }
}
