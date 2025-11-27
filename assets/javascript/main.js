// Main Js

function addToCartController() {
    let productId = this.id;
    let currentProduct = products.filter(product => product.id == productId)[0];
    cartObj.addItem(currentProduct.id, currentProduct.title, currentProduct.price, currentProduct.thumbnail);
    showCart();
    displayCart();
}

function deleteFromCartController() {
    cartObj.deleteItem(this.id);
    displayCart();
}

function displayCart() {
    let ul = document.querySelector("#cart-list");
    console.log(ul);
    ul.innerHTML = "";
    cartObj.cart.forEach(item => {
        let li = document.createElement("li");
        li.className = "cart-item";
        
        let img = document.createElement("img");
        img.className = "cart-item-img";
        img.src = item.image;
        
        let itemInfo = document.createElement("div");
        itemInfo.className = "cart-item-info";
        
        let span = document.createElement("span");
        span.className = "cart-item-name";
        span.innerText = item.title;
        
        let priceSpan = document.createElement("span");
        priceSpan.className = "cart-item-price";
        priceSpan.innerText = "₹" + (item.price * item.quantity);
        
        itemInfo.appendChild(span);
        itemInfo.appendChild(priceSpan);
        
        let qtyControls = document.createElement("div");
        qtyControls.className = "qty-controls";
        
        let minusBtn = document.createElement("button");
        minusBtn.innerText = "-";
        minusBtn.addEventListener("click", function() {
            cartObj.updateQuantity(item.id, item.quantity - 1);
            displayCart();
        });
        
        let qtySpan = document.createElement("span");
        qtySpan.innerText = item.quantity;
        
        let plusBtn = document.createElement("button");
        plusBtn.innerText = "+";
        plusBtn.addEventListener("click", function() {
            cartObj.updateQuantity(item.id, item.quantity + 1);
            displayCart();
        });
        
        qtyControls.appendChild(minusBtn);
        qtyControls.appendChild(qtySpan);
        qtyControls.appendChild(plusBtn);
        
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "btn-delete";
        deleteBtn.innerHTML = "<i class='fa fa-trash'></i>";
        deleteBtn.setAttribute("id", item.id);
        deleteBtn.addEventListener("click", deleteFromCartController);
        
        li.appendChild(img);
        li.appendChild(itemInfo);
        li.appendChild(qtyControls);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    });
    

    document.querySelector("#cart-count").innerText = cartObj.getTotalItems();
    document.querySelector("#cart-total").innerText = cartObj.getTotal().toFixed(2);
}

function showCart() {
    let sidebar = document.querySelector("#sidebar");
    sidebar.classList.remove("hidden");
}

function toggleCart() {
    let sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("hidden");
}

function clearCartController() {
    if(confirm("Are you sure you want to clear the cart?")) {
        cartObj.clearCart();
        displayCart();
    }
}

function searchProducts() {
    let searchTerm = this.value.toLowerCase();
    let filteredProducts = products.filter(p => {
        return p.title.toLowerCase().includes(searchTerm) || 
               p.description.toLowerCase().includes(searchTerm);
    });
    displayProducts(filteredProducts);
}


document.querySelector("#cartToggle").addEventListener("click", toggleCart);
document.querySelector("#clear-cart").addEventListener("click", clearCartController);
document.querySelector("#searchInput").addEventListener("input", searchProducts);

displayCart();
