const form = document.querySelector(".form");
const first_name = document.querySelector(".first-name");
const last_name = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

const formInputElements = [first_name, last_name, password];

const isEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const isNotEmpty = (value) => {
  return value ? true : false;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  formInputElements.forEach((element) => {
    console.log("is", isNotEmpty(element.value));
    if (isNotEmpty(element.querySelector("input").value)) {
      element.querySelector(".icon-error").style.display = null;
      element.querySelector(".text-error").style.display = null;
    } else {
      element.querySelector(".icon-error").style.display = "block";
      element.querySelector(".text-error").style.display = "block";
    }
  });

  if (isEmail(email.querySelector("input").value)) {
    email.querySelector(".icon-error").style.display = null;
    email.querySelector(".text-error").style.display = null;
  } else {
    email.querySelector(".icon-error").style.display = "block";
    email.querySelector(".text-error").style.display = "block";
  }
});
