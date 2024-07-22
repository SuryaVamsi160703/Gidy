const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", function(e) {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "a" && password === "a") {
        // Successful login
        alert("You have successfully logged in.");
        window.location.href = "index.html"; // Redirect to the index.html page upon successful login
    } else {
        // Unsuccessful login
        loginErrorMsg.style.display = 'block'; // Show the error message
    }
});
