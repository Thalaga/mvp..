// Function to trigger downloading the receipt
function downloadReceipt() {
  alert("Your receipt is being downloaded...");

  // Create the receipt content as a string
  const receiptContent = `
    Receipt for Booking ID: 123456789
    Storage Location: Cape Town
    Payment Method: Credit Card
    Booking Time: 2024-12-04 18:00
    Total Amount: R150

    Thank you for booking with Drop & Lock! Your luggage is safe with us.
  `;

  // Create a Blob with the content of the receipt
  const blob = new Blob([receiptContent], { type: 'text/plain' });

  // Create a link element to download the blob
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'receipt.txt';  // Set the file name
  link.click();  // Programmatically trigger the download
}

// Function to share the booking details on WhatsApp
function shareOnWhatsApp() {
  const message = "I just booked with Drop & Lock! Check it out!";
  const url = "https://wa.me/?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

// Dynamically add booking details to the page
document.addEventListener('DOMContentLoaded', function () {
  const bookingDetails = {
    bookingID: "123456789",
    storageLocation: "Cape Town",
    paymentMethod: "Credit Card",
    bookingTime: "2024-12-04 18:00",
    totalAmount: "R150"
  };

  const detailsSection = document.getElementById('details');
  detailsSection.innerHTML = `
    <h3>Booking Details</h3>
    <ul>
      <li><strong>Booking ID:</strong> ${bookingDetails.bookingID}</li>
      <li><strong>Storage Location:</strong> ${bookingDetails.storageLocation}</li>
      <li><strong>Payment Method:</strong> ${bookingDetails.paymentMethod}</li>
      <li><strong>Booking Time:</strong> ${bookingDetails.bookingTime}</li>
      <li><strong>Total Amount:</strong> ${bookingDetails.totalAmount}</li>
    </ul>
  `;
});
