window.addEventListener("load", function() {
  const confirmButton = document.getElementById("confirm-button");

  function confirmQuiz() {
    let confirm = document.getElementById("confirm-box");
    
    if (confirm.checked) {
      alert("Test");
    }
    
  }

  confirmButton.addEventListener("click", confirmQuiz);
})