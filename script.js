function submitForm(event) {
    event.preventDefault(); // Empêche le comportement par défaut de la soumission du formulaire

    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value.trim();
    var nameRegex = /^[a-zA-Z]+$/;

    var phoneInput = document.getElementById("phone");
    var phoneValue = phoneInput.value.trim();
    var phoneRegex = /^\d{8}$/;

    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();
    var emailRegex = /^[\w-]+(\.[\w-]+)*@((esprit\.tn)|(gmail\.com)|(hotmail\.com))$/;

    if (nameValue === "" || !nameRegex.test(nameValue) || !phoneRegex.test(phoneValue) || !emailRegex.test(emailValue)) {
        alert("Veuillez sremplir tous les champs correctement.");
        return;
    }

    // Affiche le message de succès et masque le formulaire
    var successMessage = document.getElementById("success-message");
    var contactForm = document.getElementById("contactForm");

    successMessage.innerHTML = "Formulaire envoyé avec succès!";
    successMessage.style.display = "block";
    contactForm.style.display = "none";
}
