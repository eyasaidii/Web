function validateForm() {
    // Validation du nom et prénom
    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value.trim();
    var nameRegex = /^[a-zA-Z]+$/;

    if (nameValue === "" || !nameRegex.test(nameValue)) {
        alert("Veuillez saisir un nom et prénom valides (alphabet seulement).");
        return false;
    }

    // Validation du numéro de téléphone
    var phoneInput = document.getElementById("phone");
    var phoneValue = phoneInput.value.trim();
    var phoneRegex = /^\d{8}$/;

    if (!phoneRegex.test(phoneValue)) {
        alert("Veuillez saisir un numéro de téléphone valide (8 chiffres).");
        return false;
    }

    // Validation de l'adresse e-mail
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();
    var emailRegex = /^[\w-]+(\.[\w-]+)*@((esprit\.tn)|(gmail\.com)|(hotmail\.com))$/;

    if (!emailRegex.test(emailValue)) {
        alert("Veuillez saisir une adresse e-mail valide (@esprit.tn, @gmail.com, @hotmail.com).");
        return false;
    }

    // Si toutes les validations passent, le formulaire est soumis
    return true;
}
