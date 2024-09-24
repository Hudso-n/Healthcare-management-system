document.addEventListener('DOMContentLoaded', () => {
    let patientIdCounter = 1;
    let appointmentIdCounter = 1;

    // Patient management functionality
    const patientForm = document.getElementById('patientForm');
    const patientList = document.getElementById('patientList');
    
    patientForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Auto-generate patient ID
        const id = `P-${patientIdCounter++}`;
        const name = document.getElementById('patientName').value;
        const age = document.getElementById('patientAge').value;
        const sex = document.getElementById('patientSex').value;
        const contact = document.getElementById('contactInfo').value;

        const patientDiv = document.createElement('div');
        patientDiv.classList.add('patient-entry');
        patientDiv.textContent = `Patient ID: ${id}, Name: ${name}, Age: ${age}, Sex: ${sex}, Contact: ${contact}`;
        patientList.appendChild(patientDiv);

        // Clear the form after submission
        patientForm.reset();
    });

    // Appointment management functionality
    const appointmentForm = document.getElementById('appointmentForm');
    const appointmentList = document.getElementById('appointmentList');
    
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Auto-generate appointment ID
        const appointmentId = `A-${appointmentIdCounter++}`;
        const patientId = document.getElementById('appointmentPatientId').value;
        const dateTime = document.getElementById('appointmentDateTime').value;

        const appointmentDiv = document.createElement('div');
        appointmentDiv.classList.add('appointment-entry');
        appointmentDiv.textContent = `Appointment ID: ${appointmentId}, Patient ID: ${patientId}, Date & Time: ${dateTime}`;
        appointmentList.appendChild(appointmentDiv);

        appointmentForm.reset();
    });

    // Billing management functionality
    const billingForm = document.getElementById('billingForm');
    const billingList = document.getElementById('billingList');

    billingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const patientId = document.getElementById('billingPatientId').value;
        const amount = document.getElementById('billingAmount').value;

        const billingDiv = document.createElement('div');
        billingDiv.classList.add('billing-entry');
        billingDiv.textContent = `Patient ID: ${patientId}, Amount: ₵${amount}`;
        billingList.appendChild(billingDiv);

        billingForm.reset();
    });
});
