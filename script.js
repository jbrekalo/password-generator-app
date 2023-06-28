const appResult = document.querySelector(".app__result");
const appCopyLabel = document.querySelector(".app__copied");
const sliderEl = document.querySelector(".app__slider");
const sliderValue = document.querySelector(".app__length-number");
const sliderProgressBar = document.querySelector(".app__slider-progressbar");

const checks = document.querySelectorAll(".checkbox");
const checkUpper = document.getElementById("uppercase");
const checkLower = document.getElementById("lowercase");
const checkNumber = document.getElementById("numbers");
const checkSymbol = document.getElementById("symbols");

const strengthBars = document.querySelectorAll(".app__strength-bar");

const btnGenerate = document.querySelector(".app__button");
const btnCopy = document.querySelector(".app__icon-copy");

const checkboxes = [checkUpper, checkLower, checkNumber, checkSymbol];
let charLength = 10;
let pointsCheckboxes = 5;
let pointsSlider = 0;
let pointsTotal = 0;

const passGenerator = function () {
  let result = "";
  let charactersSum = "";

  const characters = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789",
    "!@#&()-[{}]:;',?/*`~$^+=<>",
  ];

  checkboxes.forEach((checkbox, i) => {
    if (checkbox.checked) {
      charactersSum += characters[i];
    }
  });

  let counter = 0;
  while (counter < charLength) {
    result += charactersSum.charAt(
      Math.floor(Math.random() * charactersSum.length)
    );
    counter += 1;
  }

  return result;
};

const resetRating = function () {
  strengthBars.forEach((bar) => {
    bar.classList.remove("app__strength-bar--very-weak");
    bar.classList.remove("app__strength-bar--weak");
    bar.classList.remove("app__strength-bar--medium");
    bar.classList.remove("app__strength-bar--strong");
  });
};

const strengthRating = function () {
  pointsTotal = pointsSlider + pointsCheckboxes;

  if (pointsTotal <= 14.5) {
    resetRating();
    for (let i = 0; i < strengthBars.length - 3; i++) {
      const bar = strengthBars[i];
      console.log(bar);
      bar.classList.add("app__strength-bar--very-weak");
    }
  } else if (pointsTotal >= 14.5 && pointsTotal < 23) {
    resetRating();
    for (let i = 0; i < strengthBars.length - 2; i++) {
      const bar = strengthBars[i];
      bar.classList.add("app__strength-bar--weak");
    }
  } else if (pointsTotal >= 23 && pointsTotal < 31.5) {
    resetRating();
    for (let i = 0; i < strengthBars.length - 1; i++) {
      const bar = strengthBars[i];
      bar.classList.add("app__strength-bar--medium");
    }
  } else if (pointsTotal >= 31.5) {
    resetRating();
    for (let i = 0; i < strengthBars.length; i++) {
      const bar = strengthBars[i];
      bar.classList.add("app__strength-bar--strong");
    }
  }
};

sliderEl.addEventListener("input", function (e) {
  const tempSliderValue = e.target.value;
  sliderValue.textContent = tempSliderValue;

  charLength = Number(tempSliderValue);
  pointsSlider = Number(tempSliderValue);

  strengthRating();

  const progress = ((tempSliderValue - 1) / 19) * 100;
  sliderProgressBar.style.width = `${progress}%`;
});

checks.forEach((el) =>
  el.addEventListener("click", function () {
    pointsCheckboxes = 0;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        pointsCheckboxes += Number(checkbox.value);
      }
    });

    strengthRating();

    console.log(pointsCheckboxes);
  })
);

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
