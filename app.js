/**
 * MPMC - Magiee Pasta Macroni Corner
 * Web App Logic & WhatsApp Booking Engine
 * Contact: Coming Soon
 * Location: Nyay Khand 1st, Indirapuram, Ghaziabad
 */

// Comprehensive Menu Data with authentic descriptions and food imagery
const MENU_ITEMS = [
    // Magiee Category
    {
        id: 'maggi-1',
        name: 'Classic Masala Tadka Maggi',
        category: 'maggi',
        price: 50,
        originalPrice: 60,
        rating: 4.8,
        spiceLevel: 'Medium',
        description: 'Authentic 2-minute nostalgia elevated with sautéed onions, fresh green chillies, tomatoes, and golden roasted masala.',
        image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=700&q=80',
        badge: 'Classic'
    },
    {
        id: 'maggi-2',
        name: 'Cheese Butter Blast Maggi',
        category: 'maggi',
        price: 79,
        originalPrice: 99,
        rating: 4.9,
        spiceLevel: 'Mild',
        description: 'Rich dollop of pure Amul butter simmered with noodles and showered with genuine melting mozzarella dairy cheese.',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80',
        badge: 'Bestseller'
    },
    {
        id: 'maggi-3',
        name: 'Peri-Peri Double Cheese Maggi',
        category: 'maggi',
        price: 89,
        originalPrice: 110,
        rating: 4.9,
        spiceLevel: 'Hot',
        description: 'Zesty peri-peri spice dust paired with sweet golden corn, crunchy capsicum, and a gooey double cheese blanket.',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80',
        badge: 'Chef Special'
    },
    {
        id: 'maggi-4',
        name: 'Veggie Delight Corn & Capsicum Maggi',
        category: 'maggi',
        price: 65,
        originalPrice: 75,
        rating: 4.7,
        spiceLevel: 'Medium',
        description: 'Loaded with sweet American corn kernels, crunchy capsicum, green peas, and fresh coriander in spicy broth.',
        image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=700&q=80',
        badge: 'Healthy Bite'
    },
    {
        id: 'maggi-5',
        name: 'Desi Paneer Tikka Maggi',
        category: 'maggi',
        price: 95,
        originalPrice: 120,
        rating: 4.8,
        spiceLevel: 'Hot',
        description: 'Juicy soft malai paneer cubes tossed in tandoori spices and combined with sizzling masala Maggi noodles.',
        image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80',
        badge: 'Popular'
    },
    {
        id: 'maggi-6',
        name: 'Spicy Schezwan Garlic Maggi',
        category: 'maggi',
        price: 75,
        originalPrice: 89,
        rating: 4.6,
        spiceLevel: 'Very Hot',
        description: 'Fiery street-style Schezwan chilli oil tadka with sautéed crushed garlic, scallions, and signature seasonings.',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80',
        badge: 'Spicy'
    },

    // Pasta Category
    {
        id: 'pasta-1',
        name: 'Creamy Alfredo White Sauce Pasta',
        category: 'pasta',
        price: 119,
        originalPrice: 140,
        rating: 4.9,
        spiceLevel: 'Mild',
        description: 'Authentic Penne tossed in velvety Italian white bechamel cream, fresh oregano, basil, sweet corn, and black olives.',
        image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281729?auto=format&fit=crop&w=700&q=80',
        badge: 'Bestseller'
    },
    {
        id: 'pasta-2',
        name: 'Spicy Arrabiata Red Sauce Pasta',
        category: 'pasta',
        price: 109,
        originalPrice: 130,
        rating: 4.7,
        spiceLevel: 'Hot',
        description: 'Simmered slow-cooked tangy plum tomatoes, crushed red pepper flakes, extra garlic, and garden-fresh bell peppers.',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80',
        badge: 'Zesty'
    },
    {
        id: 'pasta-3',
        name: 'Pink Sauce Mixed Delicacy Pasta',
        category: 'pasta',
        price: 129,
        originalPrice: 155,
        rating: 4.9,
        spiceLevel: 'Medium',
        description: 'The ultimate culinary fusion of rich creamy white Alfredo and tangy spicy red sauce loaded with mozzarella.',
        image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=700&q=80',
        badge: 'Must Try'
    },
    {
        id: 'pasta-4',
        name: 'Baked Double Cheese Italian Pasta',
        category: 'pasta',
        price: 149,
        originalPrice: 180,
        rating: 5.0,
        spiceLevel: 'Medium',
        description: 'Oven-style golden baked top layer with bubbling cheese crust, seasoned bell peppers, corn, and savory herbs.',
        image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=700&q=80',
        badge: 'Chef Choice'
    },
    {
        id: 'pasta-5',
        name: 'Spicy Peri-Peri Paneer Pasta',
        category: 'pasta',
        price: 139,
        originalPrice: 165,
        rating: 4.8,
        spiceLevel: 'Hot',
        description: 'Penne pasta tossed in spicy peri-peri cream with golden pan-seared paneer cubes and crunchy bell peppers.',
        image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=700&q=80',
        badge: 'Spicy Special'
    },

    // Macroni Category
    {
        id: 'macroni-1',
        name: 'Desi Tadka Masala Macroni',
        category: 'macroni',
        price: 69,
        originalPrice: 85,
        rating: 4.8,
        spiceLevel: 'Medium',
        description: 'Authentic Indian street canteen-style elbow macaroni sautéed in mustard seed tadka, onions, tomatoes, and chaat masala.',
        image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281729?auto=format&fit=crop&w=700&q=80',
        badge: 'Desi Nostalgia'
    },
    {
        id: 'macroni-2',
        name: 'Cheese Butter Cream Macroni',
        category: 'macroni',
        price: 85,
        originalPrice: 105,
        rating: 4.9,
        spiceLevel: 'Mild',
        description: 'Creamy elbow pasta tossed with fresh Amul butter, sweet corn kernels, grated cheese, and fragrant Italian herbs.',
        image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=700&q=80',
        badge: 'Kids Favorite'
    },
    {
        id: 'macroni-3',
        name: 'Tandoori Schezwan Macroni Blast',
        category: 'macroni',
        price: 89,
        originalPrice: 110,
        rating: 4.7,
        spiceLevel: 'Hot',
        description: 'Smoky tandoori marinade blended with fiery Schezwan chutney, diced paneer, and crunchy capsicum.',
        image: 'https://images.unsplash.com/photo-1516100882582-76c9a3ca2f18?auto=format&fit=crop&w=700&q=80',
        badge: 'Spicy Delight'
    },
    {
        id: 'macroni-4',
        name: 'Double Cheese Blast Macroni',
        category: 'macroni',
        price: 99,
        originalPrice: 125,
        rating: 4.8,
        spiceLevel: 'Mild',
        description: 'Excessively cheesy macaroni cooked in milk base, cheddar sauce and topped with melted cheese strings.',
        image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=700&q=80',
        badge: 'Super Cheesy'
    },
    {
        id: 'macroni-5',
        name: 'Makhani Malai Paneer Macroni',
        category: 'macroni',
        price: 95,
        originalPrice: 120,
        rating: 4.9,
        spiceLevel: 'Medium',
        description: 'Rich tomato cashew makhani gravy tossed with soft malai paneer cubes, butter, and tender macaroni.',
        image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80',
        badge: 'Chef Special'
    }
];

// Cart State Management
class CartManager {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('mpmc_cart')) || [];
        this.deliveryOption = 'free'; // 'free' (0-2 km), 'nominal' (2-3 km, ₹20), 'takeaway' (₹0)
        this.init();
    }

    init() {
        this.updateUI();
    }

    save() {
        localStorage.setItem('mpmc_cart', JSON.stringify(this.items));
        this.updateUI();
    }

    addItem(itemId) {
        const product = MENU_ITEMS.find(item => item.id === itemId);
        if (!product) return;

        const existingItem = this.items.find(item => item.id === itemId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        this.save();
        showToast(`Added ${product.name} to cart!`);
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.save();
    }

    changeQuantity(itemId, delta) {
        const item = this.items.find(item => item.id === itemId);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            this.removeItem(itemId);
        } else {
            this.save();
        }
    }

    setDeliveryOption(option) {
        this.deliveryOption = option;
        this.updateUI();
    }

    getSubtotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getDeliveryFee() {
        if (this.deliveryOption === 'free' || this.deliveryOption === 'takeaway') {
            return 0;
        } else if (this.deliveryOption === 'nominal') {
            return 20; // Nominal fee for 2 to 3 km
        }
        return 0;
    }

    getGrandTotal() {
        return this.getSubtotal() + this.getDeliveryFee();
    }

    getTotalItemCount() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    updateUI() {
        const totalCount = this.getTotalItemCount();
        const subtotal = this.getSubtotal();
        const deliveryFee = this.getDeliveryFee();
        const grandTotal = this.getGrandTotal();

        // Update counters in navbar and mobile bar
        const desktopCounter = document.getElementById('cart-counter');
        const mobileCounter = document.getElementById('mobile-cart-counter');
        if (desktopCounter) desktopCounter.innerText = totalCount;
        if (mobileCounter) mobileCounter.innerText = totalCount;

        // Update prices in Drawer
        const subtotalEl = document.getElementById('cart-subtotal');
        const deliveryFeeEl = document.getElementById('cart-delivery-fee');
        const grandTotalEl = document.getElementById('cart-grand-total');

        if (subtotalEl) subtotalEl.innerText = `₹${subtotal}`;
        if (deliveryFeeEl) {
            if (deliveryFee === 0) {
                deliveryFeeEl.innerHTML = `<span class="text-emerald-400 font-bold">FREE 🛵</span>`;
            } else {
                deliveryFeeEl.innerHTML = `<span class="text-brand-yellow font-bold">₹${deliveryFee} (2-3 km)</span>`;
            }
        }
        if (grandTotalEl) grandTotalEl.innerText = `₹${grandTotal}`;

        // Render Cart Items
        this.renderCartItems();
    }

    renderCartItems() {
        const container = document.getElementById('cart-items-container');
        if (!container) return;

        if (this.items.length === 0) {
            container.innerHTML = `
                <div class="text-center py-12 space-y-3">
                    <div class="w-16 h-16 mx-auto rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-2xl text-brand-amber">
                        <i class="fa-solid fa-basket-shopping"></i>
                    </div>
                    <h4 class="font-display text-sm font-bold text-brand-text">Your basket is empty</h4>
                    <p class="text-xs text-brand-muted max-w-xs mx-auto">Explore our hot Maggi, authentic Pastas, and spicy Macroni to add them here!</p>
                    <a href="#menu" onclick="closeCart()" class="inline-block mt-2 px-4 py-2 bg-brand-crimson text-white text-xs font-bold rounded-xl hover:bg-brand-red transition-colors shadow font-display">
                        Browse Menu
                    </a>
                </div>
            `;
            return;
        }

        container.innerHTML = this.items.map(item => `
            <div class="flex items-center justify-between gap-3 p-3 rounded-2xl bg-[#FAF7F2] border border-amber-200/80 shadow-sm">
                <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-xl object-cover shrink-0 border border-amber-200">
                
                <div class="flex-1 min-w-0">
                    <h5 class="font-display text-xs font-bold text-brand-text truncate">${item.name}</h5>
                    <div class="font-display text-xs font-black text-brand-crimson mt-0.5">₹${item.price} each</div>
                    <div class="text-[10px] text-brand-muted font-medium">Total: ₹${item.price * item.quantity}</div>
                </div>

                <div class="flex items-center gap-2 bg-white border border-amber-200 rounded-lg p-1 shadow-sm">
                    <button onclick="cartManager.changeQuantity('${item.id}', -1)" class="w-6 h-6 rounded flex items-center justify-center text-gray-500 hover:text-brand-text hover:bg-amber-100 transition-colors text-xs font-bold">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <span class="font-display text-xs font-bold text-brand-text w-4 text-center">${item.quantity}</span>
                    <button onclick="cartManager.changeQuantity('${item.id}', 1)" class="w-6 h-6 rounded flex items-center justify-center text-brand-crimson hover:bg-amber-100 transition-colors text-xs font-bold">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
}

const cartManager = new CartManager();

// Global Helper to add to cart
window.quickAddToCart = function(id) {
    cartManager.addItem(id);
};

// Toast notification helper
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;

    toastMsg.innerText = message;
    toast.classList.remove('opacity-0');
    toast.classList.add('opacity-100');

    setTimeout(() => {
        toast.classList.remove('opacity-100');
        toast.classList.add('opacity-0');
    }, 2400);
}

// Render Menu Function
function renderMenu(itemsToRender) {
    const grid = document.getElementById('menu-grid');
    const noResults = document.getElementById('no-results');
    if (!grid) return;

    if (itemsToRender.length === 0) {
        grid.innerHTML = '';
        if (noResults) noResults.classList.remove('hidden');
        return;
    }

    if (noResults) noResults.classList.add('hidden');

    grid.innerHTML = itemsToRender.map(item => `
        <div class="food-card rounded-3xl bg-white border border-amber-200/80 overflow-hidden flex flex-col justify-between group">
            
            <!-- Image & Tag Area -->
            <div class="relative h-48 sm:h-52 overflow-hidden bg-amber-50">
                <img src="${item.image}" alt="${item.name}" loading="lazy" class="food-img w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20"></div>
                
                <!-- Category Badge -->
                <div class="absolute top-3 left-3 flex items-center gap-1.5">
                    <span class="badge-veg bg-white shadow-sm" title="100% Pure Veg">
                        <span class="badge-veg-dot"></span>
                    </span>
                    <span class="font-display text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/90 text-brand-text border border-white/40 shadow-sm backdrop-blur-md">
                        ${item.badge}
                    </span>
                </div>

                <!-- Spice Level Badge -->
                <div class="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/20 px-2 py-0.5 rounded-full text-[11px] font-bold text-white flex items-center gap-1">
                    <i class="fa-solid fa-pepper-hot text-brand-red text-[10px]"></i>
                    <span>${item.spiceLevel}</span>
                </div>

                <!-- Price Tag on Image -->
                <div class="absolute bottom-3 left-3 flex items-baseline gap-2">
                    <span class="font-display text-2xl font-black text-brand-yellow drop-shadow-md">₹${item.price}</span>
                    <span class="font-display text-xs text-gray-200 line-through">₹${item.originalPrice}</span>
                </div>
            </div>

            <!-- Content Area -->
            <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                    <div class="flex items-center justify-between gap-2">
                        <h3 class="font-display text-base font-extrabold text-brand-text group-hover:text-brand-crimson transition-colors leading-snug">
                            ${item.name}
                        </h3>
                        <div class="flex items-center gap-1 text-xs text-amber-500 font-bold shrink-0">
                            <i class="fa-solid fa-star text-[11px]"></i>
                            <span>${item.rating}</span>
                        </div>
                    </div>
                    <p class="text-xs text-brand-muted mt-2 line-clamp-2 leading-relaxed font-normal">
                        ${item.description}
                    </p>
                </div>

                <!-- Action Button -->
                <div class="pt-3 border-t border-amber-100 flex items-center justify-between">
                    <span class="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                        <i class="fa-solid fa-motorcycle text-xs"></i> Free &lt; 2km
                    </span>
                    <button onclick="quickAddToCart('${item.id}')" class="px-4 py-2 bg-brand-crimson hover:bg-brand-red active:scale-95 text-white text-xs font-black rounded-xl shadow-md transition-all flex items-center gap-1.5 font-display">
                        <i class="fa-solid fa-plus text-[11px]"></i> Add to Cart
                    </button>
                </div>
            </div>

        </div>
    `).join('');
}

// Reset Search Filter
window.resetMenuFilter = function() {
    const searchInput = document.getElementById('menu-search');
    if (searchInput) searchInput.value = '';
    
    document.querySelectorAll('.menu-tab-btn').forEach(b => b.classList.remove('active'));
    const allTab = document.querySelector('[data-category="all"]');
    if (allTab) allTab.classList.add('active');

    renderMenu(MENU_ITEMS);
};

// Distance / Locality Calculation Engine
function initDistanceChecker() {
    const localitySelect = document.getElementById('locality-select');
    const customBox = document.getElementById('custom-distance-box');
    const customInput = document.getElementById('custom-distance-input');
    const statusText = document.getElementById('distance-status-text');
    const feeText = document.getElementById('distance-fee-text');
    const resultBadge = document.getElementById('distance-result-badge');

    function calculate(distanceVal) {
        const dist = parseFloat(distanceVal);

        if (isNaN(dist) || dist <= 2.0) {
            statusText.innerText = "FREE DELIVERY ELIGIBLE! 🚀";
            statusText.className = "font-display text-sm font-black text-emerald-700";
            feeText.innerText = "₹0 (FREE)";
            feeText.className = "font-display text-lg font-black text-emerald-700";
            resultBadge.className = "p-4 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-between";
            cartManager.setDeliveryOption('free');
            
            const cartSelect = document.getElementById('cust-distance-select');
            if (cartSelect) cartSelect.value = 'free';
        } else if (dist <= 3.0) {
            statusText.innerText = "DELIVERY AVAILABLE! (2-3 KM Zone)";
            statusText.className = "font-display text-sm font-black text-amber-700";
            feeText.innerText = "₹20";
            feeText.className = "font-display text-lg font-black text-amber-700";
            resultBadge.className = "p-4 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-between";
            cartManager.setDeliveryOption('nominal');
            
            const cartSelect = document.getElementById('cust-distance-select');
            if (cartSelect) cartSelect.value = 'nominal';
        } else {
            statusText.innerText = "DISTANCE > 3 KM (Contact Coming Soon for pickup/special ride)";
            statusText.className = "font-display text-xs font-bold text-rose-700";
            feeText.innerText = "Takeaway Only";
            feeText.className = "font-display text-sm font-black text-rose-700";
            resultBadge.className = "p-4 rounded-xl bg-rose-50 border border-rose-300 flex items-center justify-between";
            cartManager.setDeliveryOption('takeaway');

            const cartSelect = document.getElementById('cust-distance-select');
            if (cartSelect) cartSelect.value = 'takeaway';
        }
    }

    if (localitySelect) {
        localitySelect.addEventListener('change', (e) => {
            if (e.target.value === 'custom') {
                customBox.classList.remove('hidden');
                calculate(customInput.value || 1.0);
            } else {
                customBox.classList.add('hidden');
                calculate(e.target.value);
            }
        });
    }

    if (customInput) {
        customInput.addEventListener('input', (e) => {
            calculate(e.target.value);
        });
    }

    // Distance select inside Cart Drawer
    const custDistSelect = document.getElementById('cust-distance-select');
    if (custDistSelect) {
        custDistSelect.addEventListener('change', (e) => {
            cartManager.setDeliveryOption(e.target.value);
        });
    }
}

// Drawer Controls
function openCart() {
    const backdrop = document.getElementById('cart-drawer-backdrop');
    const drawer = document.getElementById('cart-drawer');
    if (backdrop && drawer) {
        backdrop.classList.remove('pointer-events-none', 'opacity-0');
        backdrop.classList.add('opacity-100');
        drawer.classList.remove('translate-x-full');
        document.body.classList.add('overflow-hidden');
    }
}

window.closeCart = function() {
    const backdrop = document.getElementById('cart-drawer-backdrop');
    const drawer = document.getElementById('cart-drawer');
    if (backdrop && drawer) {
        backdrop.classList.add('opacity-0', 'pointer-events-none');
        backdrop.classList.remove('opacity-100');
        drawer.classList.add('translate-x-full');
        document.body.classList.remove('overflow-hidden');
    }
};

// Coming Soon Notification Helper
window.notifyComingSoon = function() {
    showToast("📢 Booking & WhatsApp contact is Coming Soon! Stall opening shortly.");
};

// WhatsApp Checkout / Coming Soon Handler
function handleWhatsAppCheckout() {
    if (cartManager.items.length === 0) {
        alert("Your food basket is empty! Please add some delicious dishes before checkout.");
        return;
    }

    showToast("🚀 Online WhatsApp Booking is Opening Soon! Menu is currently in preview.");
    alert("🎉 Thank you for checking out MPMC (Magiee Pasta Macroni Corner)!\n\nOur direct WhatsApp & phone order line is COMING SOON. We are opening shortly at Nyay Khand 1st, Indirapuram!");
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render of Menu
    renderMenu(MENU_ITEMS);

    // Initial Distance Checker
    initDistanceChecker();

    // Drawer Event Listeners
    const openCartBtn = document.getElementById('open-cart-btn');
    const mobileCartBtn = document.getElementById('mobile-cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const backdrop = document.getElementById('cart-drawer-backdrop');
    const checkoutBtn = document.getElementById('checkout-whatsapp-btn');

    if (openCartBtn) openCartBtn.addEventListener('click', openCart);
    if (mobileCartBtn) mobileCartBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (backdrop) {
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) closeCart();
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleWhatsAppCheckout);
    }

    // Category Tabs Filter
    const tabButtons = document.querySelectorAll('.menu-tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            if (category === 'all') {
                renderMenu(MENU_ITEMS);
            } else {
                const filtered = MENU_ITEMS.filter(item => item.category === category);
                renderMenu(filtered);
            }
        });
    });

    // Search Input Filter
    const searchInput = document.getElementById('menu-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!query) {
                renderMenu(MENU_ITEMS);
                return;
            }

            const searchResults = MENU_ITEMS.filter(item => 
                item.name.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query) ||
                item.badge.toLowerCase().includes(query)
            );
            renderMenu(searchResults);
        });
    }

    // Set Copyright Year dynamically
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.innerText = new Date().getFullYear();
});
