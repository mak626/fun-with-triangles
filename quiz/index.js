const quizForm = document.forms[0];
const result = document.getElementById('result');
const message = document.getElementById('msg');
const green = 'var(--green)';
const red = 'var(--red)';
const blue = 'var(--primary-color-dark)';

const questions = [
  {
    question: 'If a triangle has angles 135°, 15°,30°. Is it an obtuse triangle?',
    answers: [
      {
        value: 'yes',
        correct: true,
      },
      {
        value: 'no',
        correct: false,
      },
    ],
  },
  {
    question: 'If a triangle has angles 115°, 25°,40°. Is it an acute triangle?',
    answers: [
      {
        value: 'yes',
        correct: false,
      },
      {
        value: 'no',
        correct: true,
      },
    ],
  },
  {
    question: 'If a triangle has angles 90°, 60°,30°. Is it a right angle triangle?',
    answers: [
      {
        value: 'yes',
        correct: true,
      },
      {
        value: 'no',
        correct: false,
      },
    ],
  },
  {
    question: 'A triangle has angles 60°, 60°, 60°. Is it an equilateral triangle?',
    answers: [
      {
        value: 'yes',
        correct: true,
      },
      {
        value: 'no',
        correct: false,
      },
    ],
  },
  {
    question: 'If a triangle has angles 25°, 75°, 80°. Is it an acute triangle?',
    answers: [
      {
        value: 'yes',
        correct: true,
      },
      {
        value: 'no',
        correct: false,
      },
    ],
  },
  {
    question: 'If a triangle has 2 sides with equal lengths and 75° angle between them. What is the type of triangle?',
    answers: [
      {
        value: 'Equilateral',
        correct: false,
      },
      {
        value: 'Isosceles',
        correct: true,
      },
      {
        value: 'Isosceles',
        correct: false,
      },
    ],
  },
  {
    question: ' If a triangle has 2 angles of 75°. What is the measure of third angle in degree?',
    answers: [
      {
        value: '25°',
        correct: false,
      },
      {
        value: '30°',
        correct: true,
      },
      {
        value: '15°',
        correct: false,
      },
    ],
  },
  {
    question: 'If a triangle has 2 sides with equal lengths and 60° angle between them. What is the type of triangle?',
    answers: [
      {
        value: 'Equilateral',
        correct: false,
      },
      {
        value: 'Isosceles',
        correct: false,
      },
      {
        value: 'Both',
        correct: true,
      },
    ],
  },
  {
    question: 'If a triangle has 2 sides with equal lengths and 60° angle between them. What is the type of triangle?',
    answers: [
      {
        value: '15cm',
        correct: false,
      },
      {
        value: '45cm',
        correct: false,
      },
      {
        value: '5cm',
        correct: true,
      },
    ],
  },
  {
    question: 'If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?',
    answers: [
      {
        value: 'Equilateral',
        correct: false,
      },
      {
        value: 'Isosceles',
        correct: false,
      },
      {
        value: 'Scalene',
        correct: true,
      },
    ],
  },
];

const addQuestions = () => {
  const form = document.getElementById('formQuiz');
  questions.forEach((e, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('questionDiv');

    const question = document.createElement('label');
    question.classList.add('question');
    question.innerText = `${index + 1}. ${e.question}`;

    questionDiv.appendChild(question);

    e.answers.forEach((ans) => {
      const answer = document.createElement('label');
      answer.classList.add('label');

      const radioButton = document.createElement('input');
      radioButton.type = 'radio';
      radioButton.value = ans.value;
      radioButton.name = index;

      answer.appendChild(radioButton);
      answer.innerHTML += ans.value;
      questionDiv.appendChild(answer);
    });

    form.appendChild(questionDiv);
  });

  const button = document.createElement('button');
  button.innerText = 'Submit';
  button.classList.add('button');
  button.id = 'submit';

  form.appendChild(button);
};

quizForm.addEventListener('submit', (event) => {
  event.preventDefault();
  result.style.display = 'none';
  const queDivs = document.getElementsByClassName('questionDiv');
  const submitButton = document.getElementById('submit');

  // Reset Quiz
  if (submitButton.innerText === 'Replay') {
    submitButton.innerText = 'Submit';
    for (let index = 0; index < queDivs.length; index++) queDivs[index].style.backgroundColor = blue;
    return;
  }

  const formData = new FormData(quizForm);

  for (let index = 0; index < queDivs.length; index++) queDivs[index].style.backgroundColor = red;

  let score = 0;

  for (let entry of formData) {
    let index = parseInt(entry[0]);
    const correctAnswer = questions[index].answers.find((e) => e.correct === true);

    if (entry[1] === correctAnswer.value) {
      queDivs[index].style.backgroundColor = green;
      score++;
    }
  }

  submitButton.innerText = 'Replay';
  result.style.display = 'flex';
  message.innerText = `Score: ${score}/10`;
  window.scrollTo(0, document.body.scrollHeight);
});

addQuestions();
