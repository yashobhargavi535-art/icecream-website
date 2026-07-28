// ================================
// PASSWORD SHOW / HIDE
// ================================

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");

    } else {

        password.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");

    }

});


// ================================
// CONFIRM PASSWORD SHOW / HIDE
// ================================

const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const confirmPassword = document.getElementById("confirmPassword");

toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");

    } else {

        confirmPassword.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");

    }

});


// ================================
// SIGNUP FORM VALIDATION
// ================================

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const fullName = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const phone = document.querySelector('input[type="tel"]').value.trim();

    const pass = password.value;
    const confirm = confirmPassword.value;

    if (fullName === "" || email === "" || phone === "" || pass === "" || confirm === "") {

        alert("Please fill in all the fields.");
        return;

    }

    if (phone.length !== 10 || isNaN(phone)) {

        alert("Please enter a valid 10-digit phone number.");
        return;

    }

    if (pass.length < 6) {

        alert("Password must contain at least 6 characters.");
        return;

    }

    if (pass !== confirm) {

        alert("Passwords do not match.");
        return;

    }

    alert("🎉 Congratulations! Your Frosty Scoop account has been created successfully.");

    signupForm.reset();

});