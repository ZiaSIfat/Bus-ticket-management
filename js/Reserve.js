function scrollToSection() {
    // Get the section to scroll to by its ID
    const targetSection = document.getElementById("targetSection");

    // Smoothly scroll to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });
}

// function updateSelectedSeat(button) {
//     // Get the text of the clicked button
//     var selectedSeat = button.innerText;
//     // Update the content of the selected seat div
//     var selectedSeatElement = document.getElementById("selectedSeat");
//     selectedSeatElement.innerText = selectedSeat;
// }

// JavaScript
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
    button.disabled = true; // Disable the button to prevent multiple clicks
}

// const passengerNameInput = document.getElementById('passengerName');
// const emailInput = document.getElementById('email');
// const phoneNumberInput = document.getElementById('phoneNumber');
// const nextButton = document.getElementById('nextButton');
// const popupSection = document.getElementById('popupSection');

// function checkInputs() {
//     const passengerName = passengerNameInput.value.trim();
//     const email = emailInput.value.trim();
//     const phoneNumber = phoneNumberInput.value.trim();

//     if (passengerName !== '' && email !== '' && phoneNumber !== '') {
//         nextButton.removeAttribute('disabled');
//     } else {
//         nextButton.setAttribute('disabled', 'disabled');
//     }
// }

// function showPopupSection(event) {
//     event.preventDefault(); // Prevent the default form submission behavior
//     popupSection.classList.remove('hidden');
// }

// passengerNameInput.addEventListener('input', checkInputs);
// emailInput.addEventListener('input', checkInputs);
// phoneNumberInput.addEventListener('input', checkInputs);

// nextButton.addEventListener('click', showPopupSection);

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
