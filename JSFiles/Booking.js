document.addEventListener('DOMContentLoaded', function () {
    const planDropdown = document.getElementById('plan');
    const durationInput = document.getElementById('storage-duration');
    const pickupCheckbox = document.getElementById('pickup-delivery');
    const insuranceCheckbox = document.getElementById('insurance');
  
    const selectedPlan = document.getElementById('selected-plan');
    const totalPrice = document.getElementById('total-price');
  
    // Price constants
    const BASE_PRICE = 80; // per hour
    const PICKUP_COST = 50; // optional
    const INSURANCE_COST = 50; // optional
  
    function updateSummary() {
      const plan = planDropdown.value;
      const duration = parseInt(durationInput.value) || 0;
      const pickup = pickupCheckbox.checked ? PICKUP_COST : 0;
      const insurance = insuranceCheckbox.checked ? INSURANCE_COST : 0;
  
      const pricePerHour = plan === 'Saver' ? BASE_PRICE : BASE_PRICE + 40; // Flexi adds R40
      const total = pricePerHour * duration + pickup + insurance;
  
      selectedPlan.textContent = `Selected Plan: ${plan}`;
      totalPrice.textContent = `Total Price: R${total}`;
    }
  
    // Attach event listeners
    planDropdown.addEventListener('change', updateSummary);
    durationInput.addEventListener('input', updateSummary);
    pickupCheckbox.addEventListener('change', updateSummary);
    insuranceCheckbox.addEventListener('change', updateSummary);
  
    // Initialize summary
    updateSummary();
  });
  