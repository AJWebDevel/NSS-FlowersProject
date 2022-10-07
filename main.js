
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/

//This function returns inexpensive flowers that cost less than 2.00 per flower.
const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify

    for (const flower of flowers) {
        if (flower.price < 2) {
            filteredFlowers.push(flower)
        }
    }
    return filteredFlowers  // Do not modify

}


//This function returns flowers that grow in USDA zones of 3 and 8.
const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify

    for (const flower of flowers) {
        if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
            filteredFlowers.push(flower)
        }
    }
    return filteredFlowers  // Do not modify
}



/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify

    for (const flower of flowers) {
        if (flower.colors.includes("Orange")) {
            filteredFlowers.push(flower)
        }
    }
    return filteredFlowers  // Do not modify
}


/* This function returns flowers with the type wrapped in an <article> tag, 
the color wrapped in a <section> tag, and the usdaZone in a <div> tag.
*/
const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify
    flowersHTMLString += `<body>`
    // below line loops through an individual flower object.
    for (const flower of flowers) {
        flowersHTMLString += `<article>`
        //The line below adds flower type to flowersHTMLString string and wraps it in <article>
        flowersHTMLString += `<h1>${flower.type}</h1>`
        //The line below adds flower color to flowersHTMLString string and wraps it in <section>
        for (const color of flower.colors) {
            flowersHTMLString += `<section>${color}</section>`
        }
        //The line below adds flower usda zone to flowersHTMLString string and wraps the zone in <div>
        for (const usdaZone of flower.usdaZones) {
            flowersHTMLString += `<div>${usdaZone}</div>`
        }
        flowersHTMLString += `</article>`
    }
    flowersHTMLString += `</body>`
    
    return flowersHTMLString  // Do not modify
}















































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

