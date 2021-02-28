const products = [
    {
        img: "img/legionY520.jpeg",
        name: "Legion Y520 15''",
        span: "Crank up every setting to the max.",
        price: "$729.99",
    },
    {
        img: "img/legionY920.jpeg",
        name: "Legion Y920",
        span: "Take your gaming to new levels.",
        price: "$729.99",
    },
    {
        img: "img/legionY700.jpeg",
        name: "Legion Y700 17''",
        span: "Crank up every setting to the max.",
        price: "$729.99",
    },
    {
        img: "img/ideaCentreY900.jpeg",
        name: "IdeaCentre Y900 RE",
        span: "Take your gaming to new levels.",
        price: "729.99",
    },
]

for (const product of products) {
    //console.log(product.name);
    const container = document.getElementById('products-container');
    const prodImage = document.createElement('img');
    prodImage.setAttribute('src', `${product.img}`);
    prodImage.setAttribute('class', 'prodImg');





    container.appendChild(prodImage);

}
