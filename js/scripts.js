window.addEventListener("load", function() {
  const confirmButton = document.getElementById("confirm-button");
  const question1Button = document.getElementById("question-one-button");
  
  function confirmQuiz(e) {
    e.preventDefault();
    let confirm = document.getElementById("confirm-box");
    const cover = document.getElementById("cover");
    const quizBody = document.getElementById("quiz-body");
    
    if (confirm.checked) {
      cover.setAttribute("class", "hidden");
      quizBody.removeAttribute("class", "hidden");
      quizBody.setAttribute("class", "quiz-box")
    }
  }

  function questionOne() {
    
  }

  confirmButton.addEventListener("click", confirmQuiz);
  question1Button.addEventListener("click", questionOne);
})