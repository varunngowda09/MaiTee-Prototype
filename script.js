// --- 1. DATA (Inventory) ---
const products = [
    // === THE ESSENTIALS (Solids) ===
    // Note: Colors are Hex Codes matching the fabric
    { 
        id: 1, 
        name: "The Kora Tee (Beige)", 
        price: 699, 
        type: 'solid', 
        img: 'https://placehold.co/300x400/e8e4dc/1a1a1a?text=Kora+Tee+(Beige)' 
    },
    { 
        id: 2, 
        name: "Oversized Cargo (Black)", 
        price: 1299, 
        type: 'solid', 
        img: 'https://placehold.co/300x400/1a1a1a/ffffff?text=Cargo+Pants' 
    },
    { 
        id: 3, 
        name: "Bamboo Linen Shirt (Olive)", 
        price: 1499, 
        type: 'solid', 
        img: 'https://placehold.co/300x400/556b2f/ffffff?text=Linen+Olive' 
    },
    { 
        id: 4, 
        name: "The Mock Neck (Charcoal)", 
        price: 899, 
        type: 'solid', 
        img: 'https://placehold.co/300x400/36454F/ffffff?text=Mock+Neck' 
    },
    { 
        id: 5, 
        name: "Heavyweight Hoodie (Grey)", 
        price: 1999, 
        type: 'solid', 
        img: 'https://placehold.co/300x400/808080/ffffff?text=Heavy+Hoodie' 
    },
    { 
        id: 6, 
        name: "Pleated Trousers (Navy)", 
        price: 1599, 
        type: 'solid', 
        img: 'https://placehold.co/300x400/000080/ffffff?text=Pleated+Pants' 
    },
    { 
        id: 7, 
        name: "The Boxy Fit (White)", 
        price: 699, 
        type: 'solid', 
        img: 'https://placehold.co/300x400/ffffff/000000?text=Boxy+White+Tee' 
    },
    { 
        id: 8, 
        name: "Utility Vest (Tan)", 
        price: 1199, 
        type: 'solid', 
        img: 'https://placehold.co/300x400/d2b48c/000000?text=Utility+Vest' 
    },
    { 
        id: 9, 
        name: "Relaxed Sweatshorts", 
        price: 799, 
        type: 'solid', 
        img: 'https://placehold.co/300x400/708090/ffffff?text=Sweatshorts' 
    },
    { 
        id: 10, 
        name: "Essential Tank (Ribbed)", 
        price: 499, 
        type: 'solid', 
        img: 'https://placehold.co/300x400/000000/ffffff?text=Ribbed+Tank' 
    },

    // === THE CHAOS (Memes/Text) ===
    // Note: Dark backgrounds with Neon text to match the "Meme Mode"
    { 
        id: 11, 
        name: "MaloDrama Tee", 
        price: 699, 
        type: 'meme', 
        img: 'https://placehold.co/300x400/000000/2962FF?text=MaloDrama+(Blue)' 
    },
    { 
        id: 12, 
        name: "HasTag Tee #LOL", 
        price: 599, 
        type: 'meme', 
        img: 'https://placehold.co/300x400/000000/ffffff?text=%23HasTag' 
    },
    { 
        id: 13, 
        name: "System Failure Hoodie", 
        price: 1899, 
        type: 'meme', 
        img: 'https://placehold.co/300x400/000000/FF0000?text=Error+404' 
    },
    { 
        id: 14, 
        name: "BeneFits (Good Fits)", 
        price: 799, 
        type: 'meme', 
        img: 'https://placehold.co/300x400/ffffff/000000?text=BeneFits+Graphic' 
    },
    { 
        id: 15, 
        name: "TuMuch (Too Much)", 
        price: 699, 
        type: 'meme', 
        img: 'https://placehold.co/300x400/FF0000/ffffff?text=TuMuch+Red' 
    },
    { 
        id: 16, 
        name: "MaiType Typography", 
        price: 749, 
        type: 'meme', 
        img: 'https://placehold.co/300x400/111111/39FF14?text=MaiType+Neon' 
    },
    { 
        id: 17, 
        name: "Ctrl+Alt+Del Tee", 
        price: 649, 
        type: 'meme', 
        img: 'https://placehold.co/300x400/000000/ffffff?text=CTRL+ALT+DEL' 
    },
    { 
        id: 18, 
        name: "Lorem Ipsum Sample", 
        price: 599, 
        type: 'meme', 
        img: 'https://placehold.co/300x400/ececec/000000?text=Lorem+Ipsum' 
    },
    { 
        id: 19, 
        name: "SwaGger (Street)", 
        price: 899, 
        type: 'meme', 
        img: 'https://placehold.co/300x400/000000/FFA500?text=SwaGger+Gold' 
    },
    { 
        id: 20, 
        name: "HaiStreet (High St)", 
        price: 1299, 
        type: 'meme', 
        img: 'https://placehold.co/300x400/1a1a1a/2962FF?text=HaiStreet+Jacket' 
    }
];

// --- 2. INITIALIZATION (The Fix) ---
const toggle = document.getElementById('vibeToggle');
const body = document.body;
const logo = document.querySelector('.logo');
const cartCountBtn = document.querySelector('.cart');
const userGreeting = document.getElementById('user-greeting'); // Login Button
const loginModal = document.getElementById('login-modal');
const usernameInput = document.getElementById('username-input');

// A. Load Cart from Memory
let cart = JSON.parse(localStorage.getItem('maiteeCart')) || [];

// B. Load User from Memory
let currentUser = localStorage.getItem('maiteeUser');

// C. Load Theme from Memory
const savedTheme = localStorage.getItem('maiteeTheme');

// --- 3. RUN ON LOAD ---
window.onload = function() {
    // 1. Restore Theme
    if (savedTheme === 'meme') applyTheme(true);
    else applyTheme(false);

    // 2. Restore Cart UI
    updateCartUI();

    // 3. Restore User Login
    if (currentUser) {
        userGreeting.textContent = "HI, " + currentUser.toUpperCase();
    }

    // 4. Render Shop (if on shop page)
    if (window.location.pathname.includes("shop.html")) {
        renderShopPage();
    }
};

// --- 4. THEME LOGIC ---
function applyTheme(isMemeMode) {
    if (isMemeMode) {
        body.classList.add('meme-mode');
        logo.style.fontFamily = "'Courier Prime', monospace";
        if(toggle) toggle.checked = true;
    } else {
        body.classList.remove('meme-mode');
        logo.style.fontFamily = "'Oswald', sans-serif";
        if(toggle) toggle.checked = false;
    }
}

if(toggle) {
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            applyTheme(true);
            localStorage.setItem('maiteeTheme', 'meme');
        } else {
            applyTheme(false);
            localStorage.setItem('maiteeTheme', 'aesthetic');
        }
    });
}

// --- 5. SHOP LOGIC ---
function renderShopPage() {
    const gridSolid = document.getElementById('grid-solid');
    const gridMeme = document.getElementById('grid-meme');

    if (!gridSolid || !gridMeme) return; // Safety check

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" class="product-img" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button class="add-btn" onclick="addToCart(${product.id})">ADD TO CART</button>
        `;
        if (product.type === 'solid') gridSolid.appendChild(card);
        else gridMeme.appendChild(card);
    });
}

// --- 6. CART LOGIC ---
function addToCart(id) {
    // Find item in the full list (or check if it exists in the abbreviated list for now)
    // IMPORTANT: Ensure your 'products' array has all 20 items defined above!
    const product = products.find(p => p.id === id); 
    
    if (product) {
        cart.push(product);
        saveCart();
        updateCartUI();
        alert("Added to stash!");
    } else {
        console.error("Product not found ID:", id);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('maiteeCart', JSON.stringify(cart));
}

function updateCartUI() {
    if(cartCountBtn) cartCountBtn.textContent = `CART (${cart.length})`;
    
    // Only try to update the modal if it exists on the page
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');

    if (cartItemsContainer && cartTotalEl) {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotalEl.textContent = total;
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    <span>${item.name}</span>
                    <span>₹${item.price} <button onclick="removeFromCart(${index})" style="color:red; background:none; border:none; cursor:pointer;">x</button></span>
                `;
                cartItemsContainer.appendChild(div);
            });
        }
    }
}

// --- 7. LOGIN LOGIC ---
if (userGreeting) {
    userGreeting.addEventListener('click', () => {
        if (currentUser) {
            // If already logged in, maybe ask to logout?
            if(confirm("Logout?")) {
                localStorage.removeItem('maiteeUser');
                window.location.reload();
            }
        } else {
            loginModal.style.display = 'block';
        }
    });
}

function loginUser() {
    const name = usernameInput.value;
    if (name) {
        localStorage.setItem('maiteeUser', name);
        currentUser = name;
        userGreeting.textContent = "HI, " + name.toUpperCase();
        closeModal('login-modal');
    }
}

// --- 8. MEME LAB LOGIC (The Fix) ---
// Find the button and input from index.html
const memeBtn = document.querySelector('.submit-btn'); // Ensure class matches HTML
const memeInput = document.querySelector('.lab-container input');

if (memeBtn && memeInput) {
    memeBtn.addEventListener('click', () => {
        const joke = memeInput.value;
        if (!joke) {
            alert("Type a joke first!");
            return;
        }

        // WhatsApp Logic for Meme Submission
        const phoneNumber = "919999999999"; // REPLACE WITH YOUR NUMBER
        const message = `Yo MaiTee Team! Here is my meme idea:%0A%0A"${joke}"%0A%0AIf you print this, I want a free tee!`;
        
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
    });
}

// --- 9. UTILS ---
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
window.onclick = function(event) {
    const cartModal = document.getElementById('cart-modal');
    if (event.target == cartModal) cartModal.style.display = "none";
    if (event.target == loginModal) loginModal.style.display = "none";
}

// Checkout Function
function checkout() {
    if (cart.length === 0) { alert("Cart is empty!"); return; }
    let message = "Hi MAITEE! I want to order:%0A";
    cart.forEach(item => { message += `- ${item.name} (₹${item.price})%0A`; });
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `%0ATotal: ₹${total}`;
    
    // Add User Name if logged in
    if(currentUser) message += `%0ACustomer: ${currentUser}`;
    
    message += "%0A%0AShipping Address: [Type Here]";
    const phoneNumber = "919999999999"; // REPLACE WITH YOUR NUMBER
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
}
