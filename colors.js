'use strict';
const button = document.getElementsByClassName('btn');
const randomButton = document.getElementById('btn-random');
const newFeature = function () {
  console.log('Welcome to my app!');
};

randomButton.addEventListener('click', function () {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = '#' + randomColor;
});

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function () {
    document.body.style.backgroundColor = button[i].textContent;
  });
}

newFeature();
