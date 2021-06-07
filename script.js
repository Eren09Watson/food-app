// console.log("hello");

const toggleMenu = document.querySelector(".menubar");
const nav = document.querySelector("nav");

toggleMenu.addEventListener("click", () => {
  // nav.classList.add()
  console.log("holo");
  toggleMenu.classList.toggle("close");
  nav.classList.toggle("active");
});

const date = document.querySelector("#date");

const thisYear = new Date();

date.textContent = thisYear.getFullYear();

// form validation

// get form

const myForm = document.querySelector("#myForm");
const input = myForm.querySelector("input");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log("hello");
  const inputValue = input.value.trim();

  if (inputValue == " ") {
    console("blank email");
  } else if (!isEmail(inputValue)) {
    console.log("invalid email");
    input.classList = "error";
  } else {
    console.log("success");
    input.classList = "success";
  }
});

function isEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
