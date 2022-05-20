const adviceId = document.getElementById("adviceId");
const adviceText = document.getElementById("adviceText");
const roll = document.getElementById("roll");

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const result = await response.json();
    adviceText.textContent = `"${result.slip.advice}"`;
    adviceId.textContent = `advice #${result.slip.id}`;
};

roll.addEventListener("click", getAdvice);
getAdvice(); // display advice on loading