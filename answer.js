function scoreAnswers(collectAnswer, ageAnswer, kidsAnswer, catsAnswer, foodAnswer){
collectAnswer = collectAnswer.toLowerCase();
//ageAnswer = ageAnswer.toLowerCase();
kidsAnswer = kidsAnswer.toLowerCase();
catsAnswer = catsAnswer.toLowerCase();
foodAnswer = foodAnswer.toLowerCase();

let score = 0;
console.log('from answer function', ageAnswer)
    if(collectAnswer === 'pony') {
        score += 1;
    }
    if(ageAnswer === '29') {
        score += 1;
    }
    if(kidsAnswer === 'one') {
        score += 1;
    }
    if(catsAnswer === 'two') {
        score += 1;
    }
    if(foodAnswer === 'vegan') {
        score += 1;
    }

    return score;
}

export default scoreAnswers;