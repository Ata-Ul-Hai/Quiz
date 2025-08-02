const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correct: "Paris"
  },
  {
    question: "Which language runs in the browser?",
    options: ["Python", "Java", "C", "JavaScript"],
    correct: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
    correct: "Cascading Style Sheets"
  }
];

let current = 0;
let score = 0;
let selected = "";

function showQuestion() {
  const q = quizData[current];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("option");
    btn.onclick = () => {
      selected = option;
      // Highlight selected button
      document.querySelectorAll(".option").forEach(b => b.style.backgroundColor = 'rgba(238, 247, 69, 0.7)');
      btn.style.backgroundColor = "#cce5ff";
    };
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  if (selected === "") {
    alert("Please select an answer!");
    return;
  }

  if (selected === quizData[current].correct) {
    score++;
  }

  current++;
  selected = "";

  if (current < quizData.length) {
    showQuestion();
  } 
  else {
    document.getElementById("button").remove();
    document.getElementById("result").innerText = `You scored ${score} out of ${quizData.length}!`;
    document.getElementById("options").innerHTML = "";
    document.getElementById("question").innerText = "Quiz Completed!";
  }
}

showQuestion();
