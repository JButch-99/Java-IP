window.addEventListener("load", function() {
  const confirmButton = document.getElementById("confirm-button");
  const question1Button = document.getElementById("question-one-button");
  const question2Button = document.getElementById("question-two-button");
  const question3Button = document.getElementById("question-three-button");
  
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
    question2Button.disabled = false;
    question1Button.disabled = true;
    document.querySelector("span#progress").innerHTML = "25%";
  }

  function questionTwo() {
    document.querySelector("span#progress").innerHTML = "50%";
    question2Button.disabled = true;
  }

  function questionThree() {

  }

  confirmButton.addEventListener("click", startQuiz);
  question1Button.addEventListener("click", questionOne);
  question2Button.addEventListener("click", questionTwo);
})