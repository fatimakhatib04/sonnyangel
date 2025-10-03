// Confetti functie
function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}


const emailForm = document.querySelector("main section form"); 
if (emailForm) {
  emailForm.addEventListener("submit", function(e) {
    e.preventDefault(); // voorkomt pagina reload
    launchConfetti();
  });
}


const cartButton = document.querySelector(".detail main section:first-of-type div button");
if (cartButton) {
  cartButton.addEventListener("click", function() {
    launchConfetti();
  });
}

