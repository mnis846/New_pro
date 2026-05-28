const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const mainScreen = document.getElementById("mainScreen");
const successScreen = document.getElementById("successScreen");

const charImg = document.getElementById("charImg");

const noMessages = [
  "Pookie please 🥺",
  "Are you sure? 💔",
  "Think again 😭",
  "Don't break my heart 😢",
  "Last chance 💀",
  "You know you want to 😏"
];

let noClickCount = 0;
let yesScale = 1;

/* NO BUTTON */

noBtn.addEventListener("click", () => {

  noClickCount++;

  /* change text */
  if(noClickCount < noMessages.length){
    noBtn.textContent = noMessages[noClickCount];
  }

  /* make YES button bigger */
  yesScale += 0.25;

  yesBtn.style.transform = `scale(${yesScale})`;

  /* shrink NO button */
  const currentScale = 1 - (noClickCount * 0.08);

  noBtn.style.transform = `scale(${Math.max(currentScale,0.5)})`;

  /* move NO button randomly */
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;

  noBtn.style.position = "relative";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  /* sad image */
  charImg.src = "images/character-sad.png";
});

/* YES BUTTON */

yesBtn.addEventListener("click", () => {

  mainScreen.classList.add("hidden");

  successScreen.classList.remove("hidden");

  createConfetti();
});

/* CONFETTI */

function createConfetti(){

  for(let i = 0; i < 150; i++){

    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.backgroundColor =
      ["#ff4d6d","#ff8fa3","#ffc2d1","#caffbf"]
      [Math.floor(Math.random()*4)];

    confetti.style.animationDuration =
      (Math.random() * 3 + 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}
