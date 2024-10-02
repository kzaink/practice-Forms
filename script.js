let namee = document.querySelector("#name");
let username = document.querySelector("#username");

let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#phone");

let password = document.querySelector("#password");
let conformPassword = document.querySelector("#confirmPassword");

let register = document.querySelector(".btn");

if (password && conformPassword) {
  register.addEventListener("click", function () {
    console.log(
      "Name: " + namee.value,
      "Username: " + username.value,
      "Email: " + email.value,
      "Phone: " + phoneNumber.value,
      "Password: " + password.value,
      "Confirm Password: " + conformPassword.value
    );
  });
}
