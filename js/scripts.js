window.addEventListener("load", function() {
  const confirmButton = document.getElementById("confirm-button");
  const question1Button = document.getElementById("question-one-button");
  const question2Button = document.getElementById("question-two-button");
  
  function startQuiz(e) {
    e.preventDefault();
    confirmQuiz();
    disableButton();
  }

  function confirmQuiz() {
    let confirm = document.getElementById("confirm-box");
    const cover = document.getElementById("cover");
    const quizBody = document.getElementById("quiz-body");
    
    if (confirm.checked) {
      cover.setAttribute("class", "hidden");
      quizBody.removeAttribute("class", "hidden");
      quizBody.setAttribute("class", "quiz-box")
    }
  }

  function disableButton() {
    question2Button.disabled = true;
  }

  function questionOne() {
    alert("Test");
  }

  confirmButton.addEventListener("click", startQuiz);
  question1Button.addEventListener("click", questionOne);
})