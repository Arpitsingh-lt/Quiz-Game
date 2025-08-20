const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "HTML stands for?",
    options: ["Hyper Text Makeup Language", "Hyper Text Markup Language", "High Text Machine Language", "None"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Who is known as the Missile Man of India?",
    options: ["A.P.J. Abdul Kalam", "Vikram Sarabhai", "C.V. Raman", "Homi Bhabha"],
    answer: "A.P.J. Abdul Kalam"
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["France", "Germany", "Italy", "Spain"],
    answer: "France"
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Ganga", "Nile", "Yangtze"],
    answer: "Nile"
  },
  {
    question: "What is the chemical symbol for Gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    answer: "Au"
  },
  {
    question: "How many bones are there in the human body?",
    options: ["206", "208", "210", "205"],
    answer: "206"
  },
  {
    question: "Who invented the World Wide Web (WWW)?",
    options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
    answer: "Tim Berners-Lee"
  },
  {
    question: "Which programming language is used for web apps?",
    options: ["Python", "HTML", "C++", "SQL"],
    answer: "HTML"
  },
  {
    question: "Who played the role of Iron Man in Marvel movies?",
    options: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo", "Tom Holland"],
    answer: "Robert Downey Jr."
  },
  {
    question: "Which Indian movie won an Oscar in 2023 for Best Original Song?",
    options: ["RRR", "Lagaan", "Gully Boy", "Jawan"],
    answer: "RRR"
  },
  {
    question: "What is the boiling point of water?",
    options: ["100°C", "90°C", "80°C", "110°C"],
    answer: "100°C"
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Who wrote the Indian National Anthem?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Subhash Chandra Bose"],
    answer: "Rabindranath Tagore"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const quizEl = document.getElementById("quiz");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionBtns.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.disabled = false;
    btn.style.backgroundColor = " wheat";
  });
  nextBtn.disabled = true;
}

function selectOption(btn) {
  const selected = btn.textContent;
  const correct = questions[currentQuestion].answer;

  optionBtns.forEach(b => b.disabled = true);

  if (selected === correct) {
    score++;
    btn.style.backgroundColor = "#14d114ff";
  } else {
    btn.style.backgroundColor = "#f60000d0";
  }

  nextBtn.disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  quizEl.classList.remove("hidden");
  resultEl.classList.add("hidden");
  loadQuestion();
}

loadQuestion();
