function scoreAnswers(collectAnswer, ageAnswer, kidsAnswer, catsAnswer, foodAnswer){
collectAnswer = collectAnswer.toLowerCase();
ageAnswer = ageAnswer.toLowerCase();
kidsAnswer = kidsAnswer.toLowerCase();
catsAnswer = catsAnswer.toLowerCase();
foodAnswer = foodAnswer.toLowercase();
}
let score = 0;

    if(collectAnswer === 'pins, my little ponies, stickers') {
        score += 1;
    }
    if(ageAnswer === '29') {
        score += 1;
    }
    if(kidsAnswer === '1, one') {
        score += 1;
    }
    if(catstAnswer === '2, two') {
        score += 1;
    }
    if(foodAnswer === 'vegan food, vegan') {
        score += 1;
    }

    return score;
}

export default scoreAnswers;
export default scoreAnswers;