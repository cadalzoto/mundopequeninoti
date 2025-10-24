// Carrinho de compras
let cart = [];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Carregar carrinho do localStorage
    loadCart();
    updateCartCount();
    
    // Event listeners
    setupEventListeners();
});

// Configurar event listeners
function setupEventListeners() {
    // Menu toggle para mobile
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // Botão do carrinho
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', toggleCart);
    }
    
    // Fechar modal
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', toggleCart);
    }
    
    // Fechar modal clicando fora
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                toggleCart();
            }
        });
    }
}

// Toggle menu mobile
function toggleMenu() {
    const navbar = document.querySelector('.navbar ul');
    if (navbar) {
        navbar.classList.toggle('active');
    }
}

// Adicionar produto ao carrinho
function addToCart(id, name, price) {
    // Verificar se o produto já está no carrinho
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1
        });
    }
    
    // Salvar no localStorage
    saveCart();
    
    // Atualizar contador
    updateCartCount();
    
    // Mostrar feedback visual
    showAddToCartFeedback();
}

// Remover produto do carrinho
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartCount();
    renderCartItems();
}

// Atualizar contador do carrinho
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Animação no contador
        if (totalItems > 0) {
            cartCount.style.display = 'flex';
            cartCount.classList.add('pulse');
            setTimeout(() => cartCount.classList.remove('pulse'), 300);
        } else {
            cartCount.style.display = 'none';
        }
    }
}

// Abrir/Fechar modal do carrinho
function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.toggle('active');
        if (modal.classList.contains('active')) {
            renderCartItems();
        }
    }
}

// Renderizar itens do carrinho
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    
    if (!cartItemsContainer) return;
    
    // Limpar container
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
        if (cartTotalElement) {
            cartTotalElement.textContent = '0,00';
        }
        return;
    }
    
    // Renderizar cada item
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')} x ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remover item">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Atualizar total
    if (cartTotalElement) {
        cartTotalElement.textContent = total.toFixed(2).replace('.', ',');
    }
}

// Finalizar compra
function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    alert(`Obrigado pela sua compra!\n\nTotal de itens: ${itemCount}\nValor total: R$ ${total.toFixed(2).replace('.', ',')}\n\nEm breve você receberá um e-mail de confirmação.`);
    
    // Limpar carrinho
    cart = [];
    saveCart();
    updateCartCount();
    closeCart();
}

// Salvar carrinho no localStorage
function saveCart() {
    localStorage.setItem('mundoKidsCart', JSON.stringify(cart));
}

// Carregar carrinho do localStorage
function loadCart() {
    const savedCart = localStorage.getItem('mundoKidsCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Feedback visual ao adicionar ao carrinho
function showAddToCartFeedback() {
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.style.animation = 'none';
        setTimeout(() => {
            cartBtn.style.animation = 'bounce 0.5s ease';
        }, 10);
    }
}

// Filtrar produtos (para página de catálogo)
function filterProducts() {
    const categoryFilter = document.getElementById('categoryFilter');
    if (!categoryFilter) return;
    
    const selectedCategory = categoryFilter.value;
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.style.display = 'block';
            // Animação de entrada
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Ordenar produtos (para página de catálogo)
function sortProducts() {
    const sortFilter = document.getElementById('sortFilter');
    const catalogGrid = document.getElementById('catalogGrid');
    
    if (!sortFilter || !catalogGrid) return;
    
    const sortValue = sortFilter.value;
    const productCards = Array.from(catalogGrid.querySelectorAll('.product-card'));
    
    productCards.sort((a, b) => {
        switch(sortValue) {
            case 'price-asc':
                return parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'));
            case 'price-desc':
                return parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price'));
            case 'name':
                return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'));
            default:
                return 0;
        }
    });
    
    // Reordenar no DOM
    productCards.forEach(card => catalogGrid.appendChild(card));
}

// Enviar mensagem de contato
function sendMessage(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simulação de envio
    alert(`Mensagem enviada com sucesso!\n\nOlá ${name}, recebemos sua mensagem e entraremos em contato em breve através do e-mail ${email}.\n\nObrigado!`);
    
    // Limpar formulário
    event.target.reset();
}

// Animações CSS adicionais
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .pulse {
        animation: pulse 0.3s ease;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.3); }
    }
`;
document.head.appendChild(style);

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Animação de entrada dos elementos ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.product-card, .category-card, .benefit-card, .value-card');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

