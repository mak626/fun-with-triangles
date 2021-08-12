const quizForm = document.forms[0];
const queDivs = document.getElementsByClassName("questionDiv");
const submitButton = document.getElementById("submit");
const result = document.getElementById("result");
const message = document.getElementById("msg");

const correctAns = [
  "option1",
  "option2",
  "option1",
  "option1",
  "option1",
  "option2",
  "option2",
  "option3",
  "option3",
  "option3",
];

quizForm.addEventListener("submit", (event) => {
  result.style.display = "none";

  event.preventDefault();
  const formData = new FormData(quizForm);
  let score = 0,
    index = 0;

  for (let entry of formData) {
    if (entry[1] == correctAns[index]) {
      queDivs[index].style.backgroundColor = "#0F9D58";
      score++;
    } else {
      queDivs[index].style.backgroundColor = "#9E1D1D";
    }
    index++;
  }

  submitButton.style.display = "none";
  result.style.display = "flex";
  message.innerText = `Score: ${score}/10`;
});
