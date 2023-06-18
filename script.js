const sliderEl = document.querySelector(".app__slider");
const sliderValue = document.querySelector(".app__length-number");
const sliderProgressBar = document.querySelector(".app__slider-progressbar");

sliderEl.addEventListener("input", function (e) {
  const tempSliderValue = e.target.value;
  sliderValue.textContent = tempSliderValue;

  const progress = ((tempSliderValue - 1) / 19) * 100;
  console.log(progress);
  sliderProgressBar.style.width = `${progress}%`;
});
