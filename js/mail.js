const fullNameInput = document.querySelector("#full-name");
const mailIcon = document.querySelector("form img");
const emailInput = document.querySelector("#mail");

fullNameInput.addEventListener("input", function() {
  if (fullNameInput.value) {
    mailIcon.style.animation = "moveToEmail 2s ease-in-out forwards";
  }
});

mailIcon.addEventListener("animationend", function() {
  emailInput.focus();
});