const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

let formData = {
  email: "",
  message: "",
};

const savedData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};
form.elements.email.value = savedData.email ?? "";
form.elements.message.value = savedData.message ?? "";


form.addEventListener("input", (e) => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const message = event.target.elements.message.value.trim();

  if (email === "" || message === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = { email, message };
  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();
}