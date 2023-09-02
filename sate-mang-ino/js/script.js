// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};


// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};

// Fungsi Untuk Menambah Cart
function addToCart(productName, price) {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  var item = {
    productName: productName,
    price: price,
  };

  cartItems.push(item);

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  alert('Product added to cart!');
}

// Cart Options
function displayCart() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  var cartItemsDiv = document.getElementById('cartItems');
  cartItemsDiv.innerHTML = '';

  var totalPrice = 0;

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];

    var itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <h3>${item.productName}</h3>
      <p>Price: Rp.${item.price} Rb</p>
      <button class="delete-button" onclick="deleteItem(${i})">Delete</button>
    `;

    cartItemsDiv.appendChild(itemDiv);

    totalPrice += item.price;
  }

  var totalPriceDiv = document.getElementById('totalPrice');
  totalPriceDiv.innerHTML = `Total: Rp.${totalPrice} Rb`;
}

function deleteItem(index) {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  if (index >= 0 && index < cartItems.length) {
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCart();
  }
}
function deleteItem(index) {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  if (index >= 0 && index < cartItems.length) {
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCart();
  }
}

function deleteAll() {
  localStorage.removeItem('cartItems');
  displayCart();
}

function checkout() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  if (cartItems.length > 0) {
    // Redirect to payment.html
    window.location.href = 'payment.html';
  } else {
    alert('Cart is empty. Please add items to proceed.');
  }
}

displayCart();


displayCart();

function addToCart(productName, price) {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  var item = {
    productName: productName,
    price: price,
  };

  cartItems.push(item);

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  alert('Product added to cart!');
  
  displayCart(); // Call displayCart function after adding the item
}




// Fungsi untuk mengirim pesan ke WhatsApp
function sendMessage() {
  var name = document.getElementById('name').value;
  var message = document.getElementById('message').value;

  // Format pesan dengan menggunakan parameter dalam URL
  var text = "Halo, saya " + name + ". Pesan saya: " + message;

  // Nomor telepon penerima WhatsApp
  var phoneNumber = "nomor_telepon";

  // Membangun URL untuk membuka WhatsApp dengan pesan terisi
  var url = "https://wa.me/" + +6282130188790 + "?text=" + encodeURIComponent(text);

  // Buka WhatsApp pada tab baru
  window.open(url, '_blank');
}

// Menangani pengiriman formulir
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah pengiriman formulir

  sendMessage(); // Mengirim pesan ke WhatsApp setelah formulir dikirim
});
