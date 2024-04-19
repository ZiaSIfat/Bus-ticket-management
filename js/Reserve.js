function scrollToSection() {
    // Get the section to scroll to by its ID
    const targetSection = document.getElementById("targetSection");

    // Smoothly scroll to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });
}




let clickCount = 0;
const maxSelectedSeats = 2; // Assuming there are 2 selected seat slots
let totalPrice = 0;
const seatPrice = 550; // Price per seat

function updateSelectedSeat(button) {
    clickCount++;
    if (clickCount > maxSelectedSeats) {
        clickCount = 1; // Reset clickCount to 1 when it exceeds maxSelectedSeats
    }
    const seat = button.innerText; // Get the seat text from the clicked button
    const selectedSeat = document.querySelector(`.selectedSeat${clickCount}`);
    const selectedClass = document.querySelector(`.selectedClass${clickCount}`);
    if (selectedSeat && selectedClass) {
        selectedSeat.textContent = seat; // Update the selected seat
        selectedClass.textContent = 'Economy'; // Assuming it's always 'Economy'
        totalPrice += seatPrice; // Increment the total price by the seat price
        document.getElementById('totalPrice').textContent = `BDT ${totalPrice}`; // Update the total price display
    }
    
    button.classList.add('bg-green-500'); // Change button background color to green
    button.disabled = true;
     // Disable the button to prevent multiple clicks
}

// Function to apply coupon and calculate discounted price
function applyCoupon() {
    // Get the input value
    var couponInput = document.getElementById('couponInput').value;
    
    // Define coupon codes and their corresponding discounts
    var coupons = {
        'NEW15': 0.15, // 15% discount for NEW15
        'COUPLE20': 0.20 // 20% discount for COUPLE20
    };
    
    // Get the total price
    var totalPrice = parseFloat(document.getElementById('totalPrice').innerText);
    
    // Check if the entered coupon code is valid
    if (coupons.hasOwnProperty(couponInput)) {
        // Calculate discounted price
        var discount = coupons[couponInput];
        var discountedPrice = totalPrice - (totalPrice * discount);
        
        // Update the total price with discount
        document.getElementById('totalPrice').innerText = discountedPrice.toFixed(2);
        
        // Display success message
        alert("Coupon applied successfully! Your discounted price is $" + discountedPrice.toFixed(2));
    } else {
        // Display error message for invalid coupon code
        alert("Invalid coupon code! Please enter a valid coupon.");
    }
}





const passengerNameInput = document.getElementById('passengerName');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phoneNumber');
const nextButton = document.getElementById('nextButton');
const popupSection = document.getElementById('popupSection');

function checkInputs() {
    const passengerName = passengerNameInput.value.trim();
    const email = emailInput.value.trim();
    const phoneNumber = phoneNumberInput.value.trim();

    if (passengerName !== '' && email !== '' && phoneNumber !== '') {
        nextButton.removeAttribute('disabled');
    } else {
        nextButton.setAttribute('disabled', 'disabled');
    }
}

function showPopupSection(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Hide all sections except the popup section
    document.querySelectorAll('section:not(#popupSection)').forEach(section => {
        section.style.display = 'none';
    });
    popupSection.style.display = 'flex'; // Show the popup section
}

function showAllSections() {
    // Show all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'flex';
    });
    popupSection.style.display = 'none'; // Hide the popup section
}

passengerNameInput.addEventListener('input', checkInputs);
emailInput.addEventListener('input', checkInputs);
phoneNumberInput.addEventListener('input', checkInputs);

nextButton.addEventListener('click', showPopupSection);

// Add click event listener to the "Next" button in the popup section
const popupNextButton = document.querySelector('#popupSection button');
popupNextButton.addEventListener('click', showAllSections);


