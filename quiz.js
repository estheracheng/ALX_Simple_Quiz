const correctAnswer = '4';
function checkAnswer() {
    const selected = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');
    feedback.textContent = '';
    feedback.classList.remove('correct', 'incorrect');
    if (!selected) {
        feedback.textContent = 'Please select an answer';
        feedback.classList.add('incorrect');
        return;
    const userAnswer = selected.value
    }
    if (userAnswer === correctAnswer) {
        feedback.textContent = 'Correct! Well done.';
        feedback.classList.add('correct');
    } else {
        feedback.textContent = 'Incorrect. Try again!';
        feedback.classList.add('incorrect');
    }

}

