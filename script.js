const coinFlipButton = document.getElementById("coin-flip-button");
const resultContainer = document.querySelector(".result-container");

function flipCoin() {
  const randomNumber = Math.floor(Math.random() * 2) + 1;

  resultContainer.classList.toggle("toss");
  resultContainer.textContent = "";

  setTimeout(() => {
    if (randomNumber === 1) {
      resultContainer.textContent = "Heads";
    } else if (randomNumber === 2) {
      resultContainer.textContent = "Tails";
    } else {
      resultContainer.textContent = "Error: Invalid random number";
    }
    resultContainer.classList.remove("toss");
  }, 800);
}

coinFlipButton.addEventListener("click", flipCoin);

