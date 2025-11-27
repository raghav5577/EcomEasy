class Product {
    constructor(id, title, description, price, image, category) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
        this.category = category;
    }
}

let cartObj = {
    cart: [],
    
    addItem: function(id, title, price, thumbnail) {
        let existingItem = this.cart.find(item => item.id == id);
        
        if(existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                id: id,
                title: title,
                price: price,
                quantity: 1,
                image: thumbnail
            });
        }
        this.saveCart();
    },
    
    updateQuantity: function(id, quantity) {
        if(quantity <= 0) {
            this.deleteItem(id);
        } else {
            this.cart = this.cart.map(item => {
                if(item.id == id) {
                    item.quantity = quantity;
                }
                return item;
            });
            this.saveCart();
        }
    },
    
    deleteItem: function(id) {
        this.cart = this.cart.filter(item => item.id != id);
        this.saveCart();
    },
    
    clearCart: function() {
        this.cart = [];
        this.saveCart();
    },
    
    getTotal: function() {
        let total = 0;
        this.cart.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    },
    
    getTotalItems: function() {
        let total = 0;
        this.cart.forEach(item => {
            total += item.quantity;
        });
        return total;
    },
    
    saveCart: function() {
        if(window.localStorage) {
            localStorage.setItem('ecomeasy_cart', JSON.stringify(this.cart));
        } else {
            console.warn('LocalStorage not supported');
        }
    },
    
    loadCart: function() {
        if(window.localStorage) {
            let storedCart = localStorage.getItem('ecomeasy_cart');
            if(storedCart) {
                this.cart = JSON.parse(storedCart);
            }
        }
    }
}

// Initialize cart on load
cartObj.loadCart();
