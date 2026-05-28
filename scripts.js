const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const mainScreen = document.getElementById("mainScreen");
const successScreen = document.getElementById("successScreen");

const charImg = document.getElementById("charImg");

const noMessages = [
  "Pookie please... 🥺",
  "Are you sure? 💔",
  "I will be sad 😢",
  "Don't do this 😭",
  "Last chance... 💀"
];

let noClickCount = 0;

/* No button runs away */

noBtn.addEventListener("mouseover", () => {

  const x = Math.random() * (window.innerWidth - 150);

  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

/* No button click */

noBtn.addEventListener("click", () => {

  noClickCount++;

  if(noClickCount < noMessages.length){
    noBtn.textContent = noMessages[noClickCount];
  }
  else{
    noBtn.textContent = "Okay... 😭";
  }

  charImg.src = "images/character-sad.png";
});

/* Yes button */

yesBtn.addEventListener("click", () => {

  mainScreen.classList.add("hidden");

  successScreen.classList.remove("hidden");

  createConfetti();
});

/* Confetti */

function createConfetti(){

  for(let i = 0; i < 150; i++){

    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.backgroundColor =
      ["#ff9a9e","#fad0c4","#4ade80","#ef4444"]
      [Math.floor(Math.random()*4)];

    confetti.style.animationDuration =
      (Math.random() * 3 + 2) + "s";

    confetti.style.opacity = Math.random();

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}