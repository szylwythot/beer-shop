let beers = [];

function Beer(title, sub, text){
    this.title = title;
    this.sub = sub;
    this.text = text;
}

const beerHtml = (beer) => {
    return `
        <div class="beer">
            <h2>${beer.title}</h2>
            <p class="sub">${beer.sub}</p>
            <p class="text">${beer.text}</p>
        </div>
    `;
};

function processBeers(beersArray){
    for (const beer of beersArray) {
        beers.push(new Beer(beer.title, beer.sub, beer.text));
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
    <h1>Szilvi's Brewery</h1>
    <h3>Dive in our beer specialities!</h3>
    <div class="beers">
        ${beersHtml}
    </div>
    `);
}

window.addEventListener(`load`, async (event) =>{
    console.log("Page is loaded.");

    const fetchedBeers = await fetch(`pub/data.json`);
    const beersJson = await fetchedBeers.json();

    renderBeers(processBeers(beersJson.cards));
});