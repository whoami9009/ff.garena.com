document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("email");
    const showPasswordCheckbox = document.getElementById("showPassword");

    showPasswordCheckbox.addEventListener("click", function () {
        passwordInput.type = this.checked ? "text" : "password";
    });
});
