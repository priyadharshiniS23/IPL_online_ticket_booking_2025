document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let match = document.getElementById("match").value;
    let tickets = document.getElementById("tickets").value;
    
    if (name === "" || email === "" || phone === "" || match === "" || tickets === "") {
        alert("Please fill in all fields correctly.");
        return;
    }
    
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    
    document.getElementById("confirmationMessage").innerText = `Thank you, ${name}! Your booking for ${match} is confirmed.`;
    document.getElementById("bookingForm").reset();
});