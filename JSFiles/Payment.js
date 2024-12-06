document.addEventListener('DOMContentLoaded', function () {
    const paymentMethods = document.getElementsByName('payment-method');
    const creditCardDetails = document.getElementById('credit-card-details');
    const confirmPaymentButton = document.getElementById('confirm-payment');

    // Toggle visibility of credit card fields based on payment method selection
    paymentMethods.forEach(method => {
        method.addEventListener('change', () => {
            if (method.value === 'credit-card') {
                creditCardDetails.style.display = 'block'; // Show credit card fields
            } else {
                creditCardDetails.style.display = 'none'; // Hide credit card fields
            }
        });
    });

    // Handle Confirm Payment button click
    confirmPaymentButton.addEventListener('click', function (event) {
        const selectedMethod = document.querySelector('input[name="payment-method"]:checked');

        if (selectedMethod) {
            if (selectedMethod.value === 'cash') {
                // Redirect for cash payment
                window.location.href = 'confirmation.html';
            } else if (selectedMethod.value === 'credit-card') {
                // Validate credit card inputs before redirecting
                const cardNumber = document.getElementById('card-number').value.trim();
                const expiryDate = document.getElementById('expiry-date').value.trim();
                const cvv = document.getElementById('cvv').value.trim();

                if (cardNumber && expiryDate && cvv) {
                    window.location.href = 'confirmation.html';
                } else {
                    alert('Please fill out all credit card details.');
                }
            }
        } else {
            alert('Please select a payment method.');
            event.preventDefault(); // Prevent form submission
        }
    });
});
