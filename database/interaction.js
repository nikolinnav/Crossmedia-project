//Keeps track of what has been interacted with on the site
//Helps the mainPage update dynamically and add content to Lästa Articlar
//and render new cards
//id is the same as the correpsponding card/article in gameCards.json
let interaction = {

    newsPage: {
        id: 0,
        interacted: false,
        clicked: 0
    },
    grannen: {
        id: 1,
        interacted: false,
        found: false,
        clicked: 0
    },
    phus_video1: {
        id: 2,
        interacted: false,
        found: false
    },
    vilseledd: {
        id: 3,
        interacted: false,
        found: false
    },
    intervju_motstandare: {
        id: 4,
        interacted: false,
        found: false,
        clicked: 0
    },
    artikel_assistent: {
        id: 5,
        interacted: false,
        found: false
    }, 
    kalender: {
        id: 6,
        interacted: false,
        found: false,
        clicked: 0
    },
    borgmastaren_hittad: {
        id: 7,
        interacted: false,
        found: false
    },
    sistaArtikel: {
        id: 8,
        interacted: false,
        found: false
    }
}
