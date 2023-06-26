const appResult = document.querySelector(".app__result");
const appCopyLabel = document.querySelector(".app__copied");
const sliderEl = document.querySelector(".app__slider");
const sliderValue = document.querySelector(".app__length-number");
const sliderProgressBar = document.querySelector(".app__slider-progressbar");

const checkUpper = document.getElementById("uppercase");
const checkLower = document.getElementById("lowercase");
const checkNumber = document.getElementById("numbers");
const checkSymbol = document.getElementById("symbols");

const btnGenerate = document.querySelector(".app__button");
const btnCopy = document.querySelector(".app__icon-copy");

let charLength = 10;

const passGenerator = function () {
  let result = "";
  let chars = "";

  const charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charLowercase = "abcdefghijklmnopqrstuvwxyz";
  const charNumbers = "0123456789";
  const charSymbols = "!@#&()–[{}]:;',?/*`~$^+=<>";

  if (checkUpper.checked) {
    chars += charUppercase;
  }

  if (checkLower.checked) {
    chars += charLowercase;
  }

  if (checkNumber.checked) {
    chars += charNumbers;
  }

  if (checkSymbol.checked) {
    chars += charSymbols;
  }

  let counter = 0;
  while (counter < charLength) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
    counter += 1;
  }

  return result;
};

sliderEl.addEventListener("input", function (e) {
  const tempSliderValue = e.target.value;
  sliderValue.textContent = tempSliderValue;

  charLength = tempSliderValue;

  const progress = ((tempSliderValue - 1) / 19) * 100;
  sliderProgressBar.style.width = `${progress}%`;
});

btnGenerate.addEventListener("click", function (e) {
  e.preventDefault();

  appResult.textContent = passGenerator();
  appCopyLabel.classList.add("hidden");
});

btnCopy.addEventListener("click", function (e) {
  e.preventDefault();

  let copy = appResult.textContent;
  navigator.clipboard.writeText(`${copy}`);

  appCopyLabel.classList.remove("hidden");
});
