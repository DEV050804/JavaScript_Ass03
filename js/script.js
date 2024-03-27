document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm');

    // Student ID and name
    const studentId = "200552715";
    const studentName = "Dev Patel";

    // <p> element for student info
    const studentInfo = document.createElement('p');
    studentInfo.textContent = `Student ID: ${studentId} | Name: ${studentName}`;

    // Append student info to the form
    form.appendChild(studentInfo);

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Object to store form values
        const formData = {};

        // Loop through input fields to capture form values dynamically
        form.querySelectorAll('input, select, textarea').forEach(input => {
            formData[input.name] = input.type === 'checkbox' ? input.checked : input.value;
        });

        // Output description to HTML
        const descriptionOutput = document.getElementById('descriptionOutput');
        descriptionOutput.innerHTML = `
            <p>Customer: ${formData.firstName} ${formData.lastName}</p>
            <p>Email: ${formData.email}</p>
            <p>Pizza Type: ${formData.pizzaTypes}</p>
            <p>Pizza Size: ${formData.pizzaSize}</p>
            <p>Extra Sauce: ${formData.moreSauce ? 'Yes' : 'No'}</p>
            <p>Extra Cheese: ${formData.moreCheese ? 'Yes' : 'No'}</p>
            <p>Quantity: ${formData.quantity}</p>
            <p>Telephone: ${formData.telephone}</p>
            <p>Address: ${formData.address}, ${formData.city}, ${formData.province}, ${formData.postal_code}</p>
            <p>Additional Notes: ${formData.additional_notes}</p>
        `;
    });

});
