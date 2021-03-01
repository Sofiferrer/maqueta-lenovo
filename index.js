const products = getProducts();

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

const ham = document.querySelector(".ham");
const menu = document.querySelector(".menu");
const xIcon = document.querySelector(".fa-times");
const menuIcon = document.querySelector(".fa-bars");

const toggleMenu = () => {

    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        xIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        xIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

ham.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll(".nav-item");

navLinks.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", toggleMenu);
    }
)