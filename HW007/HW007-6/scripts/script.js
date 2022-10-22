const firstnameInput = document.getElementById("firstname"),
  firstnameSpan = document.getElementById("firstname_validation"),
  phoneCodeInput = document.getElementById("phone-code"),
  phoneCodeSpan = document.getElementById("phone-code_validation"),
  phoneNumberInput = document.getElementById("phone-number"),
  phoneNumberSpan = document.getElementById("phone-number_validation"),
  emailInput = document.getElementById("email"),
  emailSpan = document.getElementById("email_validation"),
  passwordInput = document.getElementById("password"),
  passwordSpan = document.getElementById("password_validation"),
  repasswordInput = document.getElementById("repassword"),
  repasswordSpan = document.getElementById("repassword_validation"),
  registerBtn = document.getElementById("submit");

let firstnameValidate,
  phoneCodeValidate,
  phoneNumberValidate,
  emailValidate,
  passwordValidate,
  repasswordValidate = false;
firstnameInput.addEventListener("input", firstnameValidation);
phoneCodeInput.addEventListener("input", phoneCodeValidation);
phoneNumberInput.addEventListener("input", phoneNumberValidation);
emailInput.addEventListener("input", emailValidation);
passwordInput.addEventListener("input", passwordValidation);
repasswordInput.addEventListener("input", repasswordValidation);
registerBtn.addEventListener("click", registerFunction);

function firstnameValidation() {
  if (firstnameInput.value) {
    firstnameSpan.textContent = "✅";
    firstnameValidate = true;
  } else {
    firstnameSpan.textContent = "❌";
    firstnameValidate = false;
  }
}

function phoneCodeValidation() {
  let regex = /^(\+|00)[0-9]*$/;
  if (regex.test(phoneCodeInput.value)) {
    phoneCodeSpan.textContent = "✅";
    phoneCodeValidation = true;
  } else {
    phoneCodeSpan.textContent = "❌";
    phoneCodeValidation = false;
  }
}

function phoneNumberValidation() {
  let regex = /^09(0[1-2]|1[0-9]|3[0-9]|2[0-1]|9[0-9])[0-9]{3}[0-9]{4}$/;
  if (regex.test(phoneNumberInput.value)) {
    phoneNumberSpan.textContent = "✅";
    phoneNumberValidation = true;
  } else {
    phoneNumberSpan.textContent = "❌";
    phoneNumberValidation = false;
  }
}

function emailValidation() {
  let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  if (regex.test(emailInput.value)) {
    emailSpan.textContent = "✅";
    emailValidate = true;
  } else {
    emailSpan.textContent = "❌";
    emailValidate = false;
  }
}

function passwordValidation() {
  const minMaxLength = /^[\s\S]{8,32}$/,
    upper = /[A-Z]/,
    lower = /[a-z]/,
    number = /[0-9]/,
    special = /[ !"#$%&'()*+,\-./:;?@[\\\]^_`{|}~]/;
  if (
    minMaxLength.test(passwordInput.value) &&
    upper.test(passwordInput.value) &&
    lower.test(passwordInput.value) &&
    number.test(passwordInput.value) &&
    special.test(passwordInput.value)
  ) {
    passwordSpan.textContent = "✅";
    passwordValidate = true;
  } else {
    passwordSpan.textContent = "❌";
    passwordValidate = false;
  }
}

function repasswordValidation() {}

function registerFunction() {}
