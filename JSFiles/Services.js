// JavaScript to handle the "Back" button functionality
document.querySelector('.back-btn').addEventListener('click', function () {
    if (document.referrer) {
      window.history.back(); // Navigate to the previous page
    } else {
      window.location.href = '../index.html'; // Fallback to the index page
    }
  });
  