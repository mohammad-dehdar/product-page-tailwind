const searchInput = document.getElementById("search-input")
const products = document.querySelectorAll(".product-item")
const buttons = document.querySelectorAll(".filter")
const priceButton = document.getElementById("search-price").querySelector("button")

const changeClass = (filter) => {
    buttons.forEach((button) => {
        button.dataset.filter === filter ? button.classList.add("selected") : button.classList.remove("selected")
    })
}

const searchPriceHandler = (event) => {
    const searchPrice = +event.target.parentElement.children[0].value
    console.log(searchPrice);
    products.forEach((product) => {
        const productPrice = +product.children[2].innerText.split(" ")[1];
        
        if (!searchPrice) {
            product.style.display = "block"
        } else {
            searchPrice === productPrice ? product.style.display = "block" : product.style.display = "none";
        }
    })
}

const searchHandler = (event) => {
    const input = event.target.value.toLowerCase().trim();
    const product = products.forEach(product => {
        const productName = product.children[1].innerText.toLowerCase();
        if (productName.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none"
        }
    })
}

const buttonHandler = (event) => {
    const data = event.target.dataset.filter;
    changeClass(data)
    const product = products.forEach(product => {
        const category = product.dataset.category;
        if (data === "all") {
            product.style.display = "block";
        } else {
            data === category ? product.style.display = "block" : product.style.display = "none"
        }
    })
}

const start = () => {
    buttons.forEach((button) => {
        button.addEventListener("click", buttonHandler)
    })
    searchInput.addEventListener("keyup", searchHandler)
    priceButton.addEventListener("click", searchPriceHandler)    
}

window.addEventListener("load", start)

