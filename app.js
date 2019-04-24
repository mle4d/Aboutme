import scoreAnswers from './answer.js';
const collectInput = document.getElementById('collect-answer')
const ageInput = document.getElementById('age-answer')
const kidsInput = document.getElementById('kids-answer')
const catsInput = document.getElementById('cats-answer')
const foodInput = document.getElementById('food-answer')
const submitButton = document.getElementById('submit-button')
const quizResult = document.getElementById('quiz-result')

submitButton.addEventListener('click', () => {
  const collectAnswer = collectInput.value;
  const ageAnswer = ageInput.value;
  const kidsAnswer = kidsInput.value;
  const catsAnswer = catsInput.value;
  const foodAnswer = foodInput.value;
  console.log('collect', collectAnswer);
  console.log (collectInputAnswer, ageInputAnswer, kidInputAnswer, catsInputAnswer, foodInputAnswer);
  const score = scoreAnswers(collectAnswer, ageAnswer, kidsAnswer, catsAnswer, foodAnswer);
  const message = 'You got ' + score + '/5 correct';
});
