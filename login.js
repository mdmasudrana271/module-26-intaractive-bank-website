// step-1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step-2: to get email address indside the email input  field
  // always rember to use .value to get text form an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  // step-3 get password
  // 3.a:set id on the html element
  // 3.b: get the element
  //  3.c: get the value from the element
  const passwordField = document.getElementById("password-field");
  const password = passwordField.value;
  //   DANGER: DO NOT VERIFY email or password on the client side
  //   step-4: verify email and password
  if (email === "mr7123619@gmail.com" && password === "masudRana") {
    window.location.href = "bank.html";
  } else {
    alert("invalid user");
  }
});
