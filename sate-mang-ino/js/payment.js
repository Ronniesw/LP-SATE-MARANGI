function displayOrderSummary() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  var orderSummaryDiv = document.getElementById('orderSummary');
  orderSummaryDiv.innerHTML = '';

  var totalPrice = 0;

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];

    var itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <h3>${item.productName}</h3>
      <p>Price: $${item.price}</p>
    `;

    orderSummaryDiv.appendChild(itemDiv);

    totalPrice += item.price;
  }

  var totalPriceDiv = document.getElementById('totalPrice');
  totalPriceDiv.innerHTML = `Total Price: $${totalPrice}`;
}

function makePayment(event) {
  event.preventDefault(); // Prevent form submission

  var fullName = document.getElementById('fullName').value;
  var accountNumber = document.getElementById('accountNumber').value;
  var paymentMethod = document.getElementById('paymentMethod').value;

  if (paymentMethod === 'BCA') {
    // Process payment using Bank BCA
    // Implement the necessary logic for making a payment via Bank BCA

    // Example: Display a success message with admin's bank account number
    var adminAccountNumber = '1234567890'; // Replace with the actual admin's bank account number
    alert('Payment successful! Thank you for your purchase. Transfer the payment to Bank BCA account: ' + adminAccountNumber);

    // Get user's order details from cart.html
    var orderDetails = getOrderDetailsFromCart(); // Implement this function to retrieve the order details

    // Get user's address from the form
    var userAddress = document.getElementById('userAddress').value;

    // Prepare WhatsApp message
    var message = 'Saya sudah membayar atas nama ' + fullName + ' dengan pesanan ' + orderDetails + '. Kirim ke alamat: ' + userAddress;

    // Redirect to WhatsApp with the prepared message
    var whatsappLink = 'https://wa.me/+6285174341238?text=' + encodeURIComponent(message); // Replace "whatsappphonenumber" with the actual WhatsApp phone number
    window.location.href = whatsappLink;
  } else {
    // Process payment using other methods
    // Implement the necessary logic for making a payment using other methods

    // Example: Display a success message
    alert('Payment successful! Thank you for your purchase.');

    // Redirect to a success page
    window.location.href = 'success.html';
  }
}

function getOrderDetailsFromCart() {
  // Implement this function to retrieve the order details from the cart
  // Return the order details as a string
  // Example implementation:
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  var orderDetails = '';

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    orderDetails += item.productName + ' (Rp' + item.price + ')';
    if (i < cartItems.length - 1) {
      orderDetails += ', ';
    }
  }

  return orderDetails;
}
