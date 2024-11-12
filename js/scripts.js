window.addEventListener("load", function() {
  const confirmButton = document.getElementById("confirm-button");
  const question1Button = document.getElementById("question-one-button");
  const question2Button = document.getElementById("question-two-button");
  const question3Button = document.getElementById("question-three-button");
  const question4Button = document.getElementById("question-four-button");
  const question5Button = document.getElementById("question-five-button");
  
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
    question3Button.disabled = true;
    question4Button.disabled = true;
    question5Button.disabled = true;
  }
  
  function questionOne() {
    document.querySelector("span#progress").innerHTML = "20%";
    
    question1Button.disabled = true;
    question2Button.disabled = false;
  }

  function questionTwo() {
    document.querySelector("span#progress").innerHTML = "40%";

    question2Button.disabled = true;
    question3Button.disabled = false;
  }

  function questionThree() {
    document.querySelector("span#progress").innerHTML = "60%";

    question3Button.disabled = true;
    question4Button.disabled = false;
  }

  function questionFour() {
    document.querySelector("span#progress").innerHTML = "80%";

    question4Button.disabled = true;
    question5Button.disabled = false;
  }

  function questionFive() {
    disableFive();
    revealed();
    
    function disableFive() {
      document.querySelector("span#progress").innerHTML = "100%"
      question5Button.disabled = true;
    }

    function revealed() {
      let revealed = document.getElementById("revealed-body");
      revealed.setAttribute("class", "hidden");
      revealed.removeAttribute("class");
      revealed.setAttribute("class", "reveal-body");
    }
  }

  confirmButton.addEventListener("click", startQuiz);
  question1Button.addEventListener("click", questionOne);
  question2Button.addEventListener("click", questionTwo);
  question3Button.addEventListener("click", questionThree);
  question4Button.addEventListener("click", questionFour);
  question5Button.addEventListener("click", questionFive);
})