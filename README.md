# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshoot](/screenshot.png)

### Links

- Solution URL: [Frontend Mentor](https://your-solution-url.com)
- Live Site URL: [Password Generator App](https://jbrekalo.github.io/password-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Learned how both Chrome and Firefox handle sliders, got a better grasp on utility classes and CSS variables.

Also, I'm satisfied with the random character generator I came up with:

```js
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
```

### Continued development

Would like to focus on more DRY code, also on frameworks such as React.

### Useful resources

- [CSS tricks](https://css-tricks.com/sliding-nightmare-understanding-range-input/) - This helped me understand how sliders work for different browsers, somehow thought that this part will be more straightforward, but it proved to be a challenge. Was fun figuring it out.

## Author

- Frontend Mentor - [@Pegula00](https://www.frontendmentor.io/profile/Pegula00)
