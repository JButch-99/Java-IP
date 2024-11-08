window.addEventListener("load", function() {
  const confirmButton = document.getElementById("confirm-button");

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

  confirmButton.addEventListener("click", confirmQuiz);
})