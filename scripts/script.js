//Variaveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const erroMessage = document.querySelector(".error-message");
let textAttempts = document.querySelector(".screen2 h2");
const buttonTry = document.querySelector("#btnTry");
const buttonReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);

let attempts = 1;
let textPlural = "tentativas";

//Eventos
buttonTry.addEventListener("click", handleTryClick);
buttonReset.addEventListener("click", handleTryAgain);
document.addEventListener("keydown", handleEnterKey);

//Funções Callback (Metodos)
function handleTryClick(event) {
  event.preventDefault();
  const inputNumber = document.querySelector("#inputResult");
  const result = Number(inputNumber.value);

  if (result === randomNumber) {
    toggleScreen();
    if (attempts === 1) {
      textPlural = "tentativa";
    }
    textAttempts.innerHTML = `Você acertou em ${attempts} ${textPlural}.`;
  } else if (result !== randomNumber && inputNumber.value !== "") {
    erroMessage.classList.remove("hide");
    attempts++;
  } else {
    erroMessage.classList.add("hide");
  }

  inputNumber.value = "";
}

function handleTryAgain(e) {
  toggleScreen();
  erroMessage.classList.add("hide");
  attempts = 1;
  textPlural = "tentativas";
  randomNumber = Math.round(Math.random() * 10);
}

function handleEnterKey(e) {
  if (e.key === "Enter" && screen1.classList.contains("hide")) {
    handleTryAgain(e);
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
