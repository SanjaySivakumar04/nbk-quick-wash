document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const email = document.getElementById("email");
  const radios = document.querySelectorAll("input[name='gender']");

  form?.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Form submitted");
      console.log("Email: ", email?.value || "No email provided");

      let generalInquiry = "";
      radios.forEach((radio) => {
          if (radio.checked) {
              generalInquiry = radio.value;
          }
      });
      console.log("Gender: ", generalInquiry || "No gender selected");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const phoneNumber = document.getElementById("phoneNumber");
  const error = document.getElementById("error");

  function isNumber(key) {
      return /^[0-9]$/.test(key); // Check if the key is a digit
  }

  function isBs(key) {
      return key === "Backspace"; // Allow backspace
  }

  phoneNumber?.addEventListener("keydown", function (event) {
      const key = event.key;

      if (!(isNumber(key) || isBs(key))) {
          event.preventDefault(); // Prevent non-numeric input
          error.textContent = "Please enter only numbers";
      } else {
          error.textContent = "";
      }
  });
});

function isNumber(key) {
  return /^[0-9]$/.test(key);
}

function isBs(key) {
  return key === "Backspace";
}