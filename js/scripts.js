window.addEventListener("load", function() {
  const confirmButton = document.getElementById("confirm-button");
  const question1Button = document.getElementById("question-one-button");
  const question2Button = document.getElementById("question-two-button");
  const question3Button = document.getElementById("question-three-button");
  const question4Button = document.getElementById("question-four-button");
  const question5Button = document.getElementById("question-five-button");
  const revealButton = document.getElementById("reveal-button");
  const resetButton = document.getElementById("reset-button");
  

  function resetPage() {
    location.reload();
  }

  function startQuiz(e) {
    e.preventDefault();
    confirmQuiz();
    disableButton();

    function confirmQuiz() {
      let confirm = document.getElementById("confirm-box");
      const cover = document.getElementById("cover");
      const quizBody = document.getElementById("quiz-body");
      
      if (confirm.checked) {
        cover.setAttribute("class", "hidden");
        quizBody.removeAttribute("class", "hidden");
        quizBody.setAttribute("class", "quiz-box");
      }
    }

    function disableButton() {
      question2Button.disabled = true;
      question3Button.disabled = true;
      question4Button.disabled = true;
      question5Button.disabled = true;
    }  
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

  function showResults() {
    let radioOne = parseInt(document.querySelector("input[name='option']:checked").value);
    let radioTwo = parseInt(document.querySelector("input[name='option-2']:checked").value);
    let radioThree = parseInt(document.querySelector("input[name='option-3']:checked").value);
    let radioFour = parseInt(document.querySelector("input[name='option-4']:checked").value);
    let selectValue = document.getElementById("question-four").value;
    const resultOne = document.getElementById("result-one");
    const resultTwo = document.getElementById("result-two");
    const resultThree = document.getElementById("result-three");
    const radioSum = (radioOne + radioTwo + radioThree + radioFour);

    resultOne.setAttribute("class", "hidden");
    resultTwo.setAttribute("class", "hidden");
    resultThree.setAttribute("class", "hidden");

    if (4 === radioSum && selectValue === "game" || 4 === radioSum && selectValue === "casual") {
      resultOne.removeAttribute("class");
      resultOne.setAttribute("class", "result-text");
    } else if (radioSum >= 5 && 6 >= radioSum && selectValue === "soft" || 6 >= radioSum && selectValue === "web") {
      resultTwo.removeAttribute("class");
      resultTwo.setAttribute("class", "result-text");
    } else {
      resultThree.removeAttribute("class");
      resultThree.setAttribute("class", "result-text");
    }
  }

  resetButton.addEventListener("click", resetPage);
  confirmButton.addEventListener("click", startQuiz);
  question1Button.addEventListener("click", questionOne);
  question2Button.addEventListener("click", questionTwo);
  question3Button.addEventListener("click", questionThree);
  question4Button.addEventListener("click", questionFour);
  question5Button.addEventListener("click", questionFive);
  revealButton.addEventListener("click", showResults);
})