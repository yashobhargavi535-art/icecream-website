//==============================
// SHOW / HIDE PASSWORD
//==============================

function togglePassword() {

    const password = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    if (password.type === "password") {

        password.type = "text";

        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");

    }

}

//==============================
// DARK MODE
//==============================

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }

}

//==============================
// RTL MODE
//==============================

function toggleRTL() {

    document.body.classList.toggle("rtl");

    if (document.body.classList.contains("rtl")) {

        localStorage.setItem("rtl", "enabled");

    } else {

        localStorage.setItem("rtl", "disabled");

    }

}

//==============================
// LOAD SAVED SETTINGS
//==============================

window.onload = function () {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");

    }

    if (localStorage.getItem("rtl") === "enabled") {

        document.body.classList.add("rtl");

    }

};

//==============================
// LOGIN FORM
//==============================

const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username = document.querySelector('input[type="text"]').value.trim();

    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {

        alert("⚠️ Please enter your username and password.");

        return;

    }

    alert("🎉 Welcome, " + username + "!\n\nYou have successfully logged in to Frosty Scoop.");

    loginForm.reset();

    document.getElementById("password").type = "password";

    document.getElementById("eyeIcon").classList.remove("fa-eye-slash");
    document.getElementById("eyeIcon").classList.add("fa-eye");

});