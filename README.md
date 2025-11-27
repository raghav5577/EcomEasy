# EcomEasy - Simple Ecommerce Website

A lightweight, fully functional ecommerce website built with vanilla JavaScript, HTML5, and CSS3. Features real-time product search, shopping cart management with localStorage persistence, and dynamic product display from a REST API.

## 🌐 Live Demo

**[View Live Project](https://raghav5577.github.io/EcomEasy/)**

Deployed using GitHub Pages - try it out now!

## 🚀 Features

- **Product Catalog**: Display 100+ products fetched from DummyJSON API
- **Shopping Cart**: Full CRUD operations (Create, Read, Update, Delete)
- **LocalStorage Persistence**: Cart data persists across browser sessions
- **Real-time Search**: Filter products by title or description as you type
- **Quantity Controls**: Increment/decrement product quantities with +/- buttons
- **Responsive UI**: Clean, modern interface with smooth animations
- **Cart Management**: Add items, update quantities, remove items, or clear entire cart

## 📁 Project Structure

```
fsd_project/
├── index.html                          # Main HTML file
├── assets/
│   ├── stylesheets/
│   │   └── main.css                    # All styles
│   └── javascript/
│       ├── model.js                    # Cart data model & localStorage logic
│       ├── api.js                      # API fetching & product display
│       └── main.js                     # User interaction handlers & UI updates
└── README.md
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup (aside, main, section, nav)
- **CSS3**: Flexbox, Grid, transitions, utility classes
- **JavaScript ES6**: Arrow functions, template literals, closures, Promises
- **DOM APIs**: querySelector, createElement, classList, addEventListener
- **Browser Storage API**: localStorage for cart persistence
- **Font Awesome**: Icons for UI elements
- **DummyJSON API**: Free REST API for product data

## 🎯 Key Functions

### Cart Operations (model.js)
- `addItem(id, title, price, thumbnail)` - Add item or increment quantity
- `updateQuantity(id, quantity)` - Update item quantity or remove if 0
- `deleteItem(id)` - Remove item from cart
- `clearCart()` - Empty entire cart
- `getTotal()` - Calculate total price
- `getTotalItems()` - Calculate total item count
- `saveCart()` - Persist cart to localStorage
- `loadCart()` - Restore cart from localStorage

### UI Controllers (main.js)
- `addToCartController()` - Handles "Add to Cart" button clicks
- `deleteFromCartController()` - Handles trash icon clicks
- `displayCart()` - Renders cart items in sidebar
- `toggleCart()` - Show/hide cart sidebar
- `clearCartController()` - Handles "Clear Cart" with confirmation
- `searchProducts()` - Real-time product filtering

### Product Display (api.js)
- `displayProducts(products)` - Dynamically creates product cards
- Fetches from `https://dummyjson.com/products`

## 🔄 Program Workflow

### Page Load
1. **model.js** loads → `cartObj.loadCart()` restores cart from localStorage
2. **api.js** loads → Fetches products → Displays 100 product cards
3. **main.js** loads → Sets up event listeners → Displays restored cart

### Adding to Cart
1. User clicks "Add to Cart"
2. `addToCartController()` runs
3. Finds product in `products` array
4. `cartObj.addItem()` adds/updates item
5. Saves to localStorage
6. `showCart()` makes sidebar visible
7. `displayCart()` refreshes UI

### Updating Quantity
1. User clicks +/- button
2. Closure captures item details
3. `cartObj.updateQuantity()` updates quantity
4. Saves to localStorage
5. `displayCart()` refreshes UI

### Search
1. User types in search box
2. `searchProducts()` fires on every keystroke
3. Filters `products` array by title/description
4. `displayProducts()` shows only matching products

### Cart Persistence
- Every cart modification triggers `saveCart()`
- Cart saved as JSON string: `localStorage.setItem('ecomeasy_cart', JSON.stringify(cart))`
- On page load: `loadCart()` retrieves and parses cart data
- Cart survives browser refresh/close

## 🚦 Getting Started

### Option 1: View Online
Visit the live demo: **[https://raghav5577.github.io/EcomEasy/](https://raghav5577.github.io/EcomEasy/)**

### Option 2: Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/raghav5577/EcomEasy.git
   cd EcomEasy
   ```

2. **Open in browser**
   - Simply open `index.html` in any modern browser
   - No build process or dependencies required

3. **Start shopping!**
   - Browse 100 products
   - Search for specific items
   - Add to cart and manage quantities
   - Cart persists across sessions


## 🌟 Features in Detail

### Cart Sidebar
- Shows/hides with toggle button
- Displays product image, title, price
- Quantity controls with +/- buttons
- Delete button for each item
- Live total calculation
- Clear cart option with confirmation

### Product Cards
- Product image
- Title and description
- Price display (₹)
- Add to Cart button
- Hover effects

### Search Functionality
- Case-insensitive search
- Searches title AND description
- Real-time filtering (input event)
- Shows all products when search cleared

## 📝 Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Requires localStorage support
- JavaScript must be enabled

## 🐛 Known Limitations

- Checkout button not functional (placeholder)
- Desktop-only design (no mobile responsive styles)
- No user authentication
- No backend integration
- No payment processing

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**Raghav Karnatak**
- GitHub: [@raghav5577](https://github.com/raghav5577)

## 🙏 Acknowledgments

- [DummyJSON](https://dummyjson.com/) - Free REST API for product data
- [Font Awesome](https://fontawesome.com/) - Icon library
- Built as part of Full Stack Development projectwork

---

**Happy Shopping! 🛒**
