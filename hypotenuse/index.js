const a = document.getElementById("a");
const b = document.getElementById("b");
const submit = document.getElementById("submit");
const invalid = document.getElementById("invalid-input");
const message = document.getElementById("msg");

submit.addEventListener("click", () => {
  invalid.style.display = "none";
  invalid.style.backgroundColor = "#9E1D1D";

  const x = parseFloat(a.value);
  const y = parseFloat(b.value);

  if (isNaN(x) || isNaN(y)) {
    invalid.style.display = "flex";
    message.innerText = "Invalid Input";
    return;
  }

  invalid.style.display = "flex";
  invalid.style.backgroundColor = "#0F9D58";
  message.innerText = `Hypotenuse is: ${Math.sqrt(
    Math.pow(x, 2) + Math.pow(y, 2)
  ).toFixed(3)}`;
});
