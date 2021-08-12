const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const submit = document.getElementById("submit");
const invalid = document.getElementById("invalid-input");
const message = document.getElementById("msg");

submit.addEventListener("click", () => {
  invalid.style.display = "none";
  invalid.style.backgroundColor = "#9E1D1D";

  const x = parseFloat(a.value);
  const y = parseFloat(b.value);
  const z = parseFloat(c.value);

  if (isNaN(x) || isNaN(y) || isNaN(z)) {
    invalid.style.display = "flex";
    message.innerText = "Invalid Input";
    return;
  }

  invalid.style.display = "flex";
  console.log(x + y + z);
  if (x + y + z == 180) {
    invalid.style.backgroundColor = "#0F9D58";
    message.innerText = "It is a triangle";
  } else {
    message.innerText = "Not a valid triangle";
  }
});
