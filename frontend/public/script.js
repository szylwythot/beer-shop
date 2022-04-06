let beers = [];

function Beer(title, sub, text, img){
    this.title = title;
    this.sub = sub;
    this.text = text;
    this.img = img;
}

const beerHtml = (beer) => {
    return `
        <div class="beer">
            <img src="/pub/image/${beer.img}">
            <h2>${beer.title}</h2>
            <p class="sub">${beer.sub}</p>
            <p class="text">${beer.text}</p>
        </div>
    `;
};

function processBeers(beersArray){
    let i = 0;
    for (const beer of beersArray) {
        beers.push(new Beer(beer.title, beer.sub, beer.text, beer.img));
    }
    return beers;
};

function renderBeers(beers){
    let beersHtml = "";
    for (const beer of beers) {
        beersHtml += beerHtml(beer);
    }

    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML(`beforeend`, `
    <div class="ball">
        <h1>Szilvi's Brewery</h1>
        <h3>Dive in our beer specialities!</h3>
        ${stripes()}
    </div>
    <div class="beers">
        ${beersHtml}
    </div>
    `);
}

let stripes = function () {
    let stripesHtml ="";
    // for (let i = 0; i < 7; i++) {
    //    stripesHtml += `
    //    <div class="stripe nth${i+1}"></div>
    //    `;
    // }
    for (let i = 0; i < 10; i++) {
        stripesHtml += `
        <div class="wideStripe nth${i}"></div>
        `;
     }
    stripesHtml += `
    <div class="hiddenStripe"></div>
    `;
    return stripesHtml;
};

window.addEventListener(`load`, async (event) =>{
    console.log("Page is loaded.");

    const fetchedBeers = await fetch(`pub/data.json`);
    const beersJson = await fetchedBeers.json();

    renderBeers(processBeers(beersJson.cards));
});