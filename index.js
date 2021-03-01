

const products = [
    {
        img: "img/legionY520.jpeg",
        name: "Legion Y520 15''",
        span: "Crank up every setting to the max.",
        price: "$729.99",
        specs: {
            Processor: "Intel Core i3",
            OperatingSystem: "Windows 10 Profesional",
            Memory: "16 GB RAM",
            HardDrive: "512 GB SSD",
            Graphics: "NVIDIA Graphics 4",
        }
    },
    {
        img: "img/legionY920.jpeg",
        name: "Legion Y920",
        span: "Take your gaming to new levels.",
        price: "$729.99",
        specs: {
            Processor: "Intel Core i3",
            OperatingSystem: "Windows 10 Profesional",
            Memory: "16 GB RAM",
            HardDrive: "512 GB SSD",
            Graphics: "NVIDIA Graphics 4",
        }

    },
    {
        img: "img/legionY700.jpeg",
        name: "Legion Y700 17''",
        span: "Crank up every setting to the max.",
        price: "$729.99",
        specs: {
            Processor: "Intel Core i3",
            OperatingSystem: "Windows 10 Profesional",
            Memory: "16 GB RAM",
            HardDrive: "512 GB SSD",
            Graphics: "NVIDIA Graphics 4",
        }
    },
    {
        img: "img/ideaCentreY900.jpeg",
        name: "IdeaCentre Y900 RE",
        span: "Take your gaming to new levels.",
        price: "729.99",
        specs: {
            Processor: "Intel Core i3",
            OperatingSystem: "Windows 10 Profesional",
            Memory: "16 GB RAM",
            HardDrive: "512 GB SSD",
            Graphics: "NVIDIA Graphics 4",
        }
    },
]
const createCards = () => {
    for (const product of products) {
        const container = document.getElementById('products-container');
        const prodCont = document.createElement('div');
        prodCont.setAttribute('class', 'prod-container');
        const prodTag = document.createElement('img');
        prodTag.setAttribute('src', 'img/doorbuster.jpg');
        prodTag.setAttribute('class', 'doorbuster');
        const prodImage = document.createElement('img');
        prodImage.setAttribute('src', `${product.img}`);
        prodImage.setAttribute('class', 'prod-img');
        const prodTitle = document.createElement('a');
        prodTitle.setAttribute('href', '#')
        prodTitle.setAttribute('class', 'prod-title');
        prodTitle.textContent = (`${product.name}`);
        const prodSpan = document.createElement('span');
        prodSpan.setAttribute('class', 'prod-span');
        prodSpan.textContent = (`${product.span}`)
        const prodPrice = document.createElement('p');
        prodPrice.setAttribute('class', 'prod-price');
        prodPrice.textContent = (`${product.price}`)
        const prodRating = document.createElement('span');
        prodRating.innerHTML = ('<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> 5.0 (120)')
        prodRating.setAttribute('class', 'prod-rating');
        const buyButton = document.createElement('button');
        buyButton.setAttribute('class', 'buy-button');
        buyButton.textContent = ('SHOP NOW');

        prodCont.appendChild(prodTag);
        prodCont.appendChild(prodImage);
        prodCont.appendChild(prodTitle);
        prodCont.appendChild(prodSpan);
        prodCont.appendChild(prodPrice);
        prodCont.appendChild(prodRating);
        prodCont.appendChild(buyButton);

        for (const spec in product.specs) {
            console.log(product.specs[spec]);
            const specsCont = document.createElement('div');
            specsCont.setAttribute('class', 'specs-container');

            const specSpan = document.createElement('span');
            specSpan.setAttribute('class', 'spec-span');
            specSpan.textContent = (`${spec}`)

            const specName = document.createElement('p');
            specName.textContent = (`${product.specs[spec]}`)

            specsCont.appendChild(specSpan);
            specsCont.appendChild(specName);
            prodCont.appendChild(specsCont);
        }

        const divLink = document.createElement('div');
        divLink.setAttribute('class', 'div-link');

        const specLink = document.createElement('a');
        specLink.textContent = ('See Full Specs >');
        specLink.setAttribute('class', 'spec-link');
        specLink.setAttribute('href', '#')

        divLink.appendChild(specLink)
        prodCont.appendChild(divLink);

        container.appendChild(prodCont);

    }
}

createCards();

