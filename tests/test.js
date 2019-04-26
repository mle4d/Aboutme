import scoreAnswers from '../answer.js';
const test = QUnit.test;

test('all answers wrong is 0', (assert) => {

    const collectAnswer = 'garbage';
    const ageAnswer = 30;
    const kidsAnswer = 'two';
    const catsAnswer = '50';
    const foodAnswer = 'not vegan';

    const expected = 0;
console.log('banana')
    const score = scoreAnswers(collectAnswer, ageAnswer, kidsAnswer, catsAnswer, foodAnswer);
   
    assert.equal(score, expected);
});

test('all answers right is 5', (assert) => {
    const collectAnswer = 'pony';
    const ageAnswer = '29';
    const kidsAnswer = 'one';
    const catsAnswer = 'two';
    const foodAnswer = 'vegan';
    const expected = 5;
    const score = scoreAnswers(collectAnswer, ageAnswer, kidsAnswer, catsAnswer, foodAnswer);
    assert.equal(score, expected);
});

test('all mixed-case answers right is 5', (assert) => {
    const collectAnswer = 'pony';
    const ageAnswer = '29';
    const kidsAnswer = 'one';
    const catsAnswer = 'two';
    const foodAnswer = 'vegan';
    const expected = 5;

    const score = scoreAnswers(collectAnswer, ageAnswer, kidsAnswer, catsAnswer, foodAnswer);
    assert.equal(score, expected);

    const message = 'you got ' + score + '/5!';

    quizResult.textContent = mesage;

    if(score <2) {
        quizResult.classList.add('boo');
        quizResult.classList.remove('yay');
    }
    else {
        quizResult.classList.add('yay');
        quizResult.classList.remove('boo');
    }
});

