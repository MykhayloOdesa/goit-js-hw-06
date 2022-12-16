// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name-output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputValue = document.querySelector("input#name-input");
const spanValue = document.querySelector("span#name-output");

inputValue.addEventListener("input", onInputValue);

function onInputValue(event) {
  if (event.currentTarget.value !== "") {
    return (spanValue.textContent = event.currentTarget.value);
  } else {
    return (spanValue.textContent = "Anonymous");
  }
}
