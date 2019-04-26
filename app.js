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
  
  const score = scoreAnswers(collectAnswer, ageAnswer, kidsAnswer, catsAnswer, foodAnswer);

  const message = 'you got ' + score + '/5!';

  quizResult.textContent = message;

  if(score < 2) {
      quizResult.classList.add('boo');
      quizResult.classList.remove('yay');
  }
  else {
      quizResult.classList.add('yay');
      quizResult.classList.remove('boo');
  }
});