const URL = "https://dummyjson.com/products";

let products;

fetch(URL)
.then(response => {
    if(!response.ok){
        throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log(data);
    products = data.products;
    displayProducts(products);
});

function displayProducts(products) {
    let grid = document.querySelector("#products-grid");
    grid.innerHTML = '';
    
    products.forEach(product => {
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "product-card");
        
        let productImg = document.createElement("div");
        productImg.setAttribute("class", "product-img");
        
        let img = document.createElement("img");
        img.setAttribute("src", product.thumbnail);
        img.setAttribute("alt", product.title);
        
        let productInfo = document.createElement("div");
        productInfo.setAttribute("class", "product-info");
        
        let title = document.createElement("h3");
        title.innerText = product.title;
        
        let description = document.createElement("p");
        description.setAttribute("class", "product-description");
        description.innerText = product.description;
        
        let price = document.createElement("div");
        price.setAttribute("class", "product-price");
        price.innerText = "₹" + product.price;
        
        let button = document.createElement("button");
        button.setAttribute("class", "btn btn-primary");
        button.innerText = "Add to Cart";
        button.setAttribute("id", product.id);
        button.addEventListener("click", addToCartController);
        
        productImg.appendChild(img);
        productInfo.appendChild(title);
        productInfo.appendChild(description);
        productInfo.appendChild(price);
        productInfo.appendChild(button);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        grid.appendChild(productCard);
    });
}
