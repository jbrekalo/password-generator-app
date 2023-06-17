const sliderEl = document.querySelector(".app__slider");
const sliderValue = document.querySelector(".app__char-number");
const sliderProgressBar = document.querySelector(".app__slider-progressbar");
const sliderButton = document.querySelector(".app__slider-button");

sliderEl.addEventListener("input", function (e) {
  const tempSliderValue = e.target.value;
  sliderValue.textContent = tempSliderValue;

  const progress = ((tempSliderValue - 1) / 19) * 100;
  console.log(progress);
  sliderProgressBar.style.width = `${progress}%`;
});
