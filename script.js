let namee = document.querySelector("#name");
let username = document.querySelector("#username");

let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#phone");

let password = document.querySelector("#password");
let conformPassword = document.querySelector("#confirmPassword");

let gender = document.querySelector(".gender");
let register = document.querySelector(".btn");

register.addEventListener("click", function () {
  if (password.value === conformPassword.value) {
    console.log(
      "Name: " + namee.value,
      "Username: " + username.value,
      "Email: " + email.value,
      "Phone: " + phoneNumber.value,
      "Password: " + password.value,
      "Confirm Password: " + conformPassword.value
    );
  } else {
    return console.log("password does not match");
  }
});
