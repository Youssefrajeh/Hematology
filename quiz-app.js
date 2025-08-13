// Quiz Application Logic
class QuizApp {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.quizStartTime = null;
        this.timer = null;
        this.timeLimit = 60; // Default time limit in seconds
        
        this.initializeElements();
        this.bindEvents();
        this.setupQuiz();
    }

    initializeElements() {
        // Screen elements
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        
        // Start screen elements
        this.questionCountSelect = document.getElementById('question-count');
        this.timeLimitSelect = document.getElementById('time-limit');
        this.shuffleQuestionsCheckbox = document.getElementById('shuffle-questions');
        this.startQuizBtn = document.getElementById('start-quiz');
        
        // Quiz screen elements
        this.progressFill = document.getElementById('progress-fill');
        this.currentQuestionSpan = document.getElementById('current-question');
        this.totalQuestionsSpan = document.getElementById('total-questions');
        this.timerDisplay = document.getElementById('timer');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.prevQuestionBtn = document.getElementById('prev-question');
        this.nextQuestionBtn = document.getElementById('next-question');
        this.finishQuizBtn = document.getElementById('finish-quiz');
        
        // Results screen elements
        this.scorePercentage = document.getElementById('score-percentage');
        this.correctAnswersSpan = document.getElementById('correct-answers');
        this.totalAnswersSpan = document.getElementById('total-answers');
        this.scoreMessage = document.getElementById('score-message');
        this.questionReview = document.getElementById('question-review');
        this.retakeQuizBtn = document.getElementById('retake-quiz');
        this.downloadResultsBtn = document.getElementById('download-results');
    }

    bindEvents() {
        this.startQuizBtn.addEventListener('click', () => this.startQuiz());
        this.prevQuestionBtn.addEventListener('click', () => this.previousQuestion());
        this.nextQuestionBtn.addEventListener('click', () => this.nextQuestion());
        this.finishQuizBtn.addEventListener('click', () => this.finishQuiz());
        this.retakeQuizBtn.addEventListener('click', () => this.retakeQuiz());
        this.downloadResultsBtn.addEventListener('click', () => this.downloadResults());
    }

    setupQuiz() {
        // Set default values
        this.totalQuestionsSpan.textContent = quizData.length;
        this.questionCountSelect.value = quizData.length;
        this.timeLimitSelect.value = this.timeLimit;
    }

    startQuiz() {
        // Get quiz settings
        const questionCount = parseInt(this.questionCountSelect.value);
        this.timeLimit = parseInt(this.timeLimitSelect.value);
        const shuffleQuestions = this.shuffleQuestionsCheckbox.checked;
        
        // Prepare questions
        this.questions = [...quizData];
        if (shuffleQuestions) {
            this.shuffleArray(this.questions);
        }
        
        // Limit questions if requested
        if (questionCount < this.questions.length) {
            this.questions = this.questions.slice(0, questionCount);
        }
        
        // Reset quiz state
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.quizStartTime = Date.now();
        
        // Update display
        this.totalQuestionsSpan.textContent = this.questions.length;
        this.showScreen(this.quizScreen);
        
        // Start timer if time limit is set
        if (this.timeLimit > 0) {
            this.startTimer();
        }
        
        // Display first question
        this.displayQuestion();
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        // Update progress
        this.currentQuestionSpan.textContent = this.currentQuestionIndex + 1;
        this.progressFill.style.width = `${((this.currentQuestionIndex + 1) / this.questions.length) * 100}%`;
        
        // Display question
        this.questionText.textContent = question.question;
        
        // Display options
        this.optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = `
                <input type="radio" name="question-${this.currentQuestionIndex}" value="${option}" id="option-${index}">
                <label for="option-${index}">${option}</label>
            `;
            
            // Check if this option was previously selected
            if (this.userAnswers[this.currentQuestionIndex] === option) {
                optionElement.querySelector('input').checked = true;
                optionElement.classList.add('selected');
            }
            
            // Add event listeners - make entire option box clickable
            const radio = optionElement.querySelector('input');
            const label = optionElement.querySelector('label');
            
            // Click on the entire option box
            optionElement.addEventListener('click', (e) => {
                // Don't trigger if clicking directly on radio button
                if (e.target !== radio) {
                    radio.checked = true;
                    this.selectOption(option);
                }
            });
            
            // Also keep the radio button change event
            radio.addEventListener('change', () => this.selectOption(option));
            
            this.optionsContainer.appendChild(optionElement);
        });
        
        // Add skip question button
        const skipButton = document.createElement('button');
        skipButton.className = 'btn btn-skip';
        skipButton.textContent = 'Skip Question';
        skipButton.addEventListener('click', () => this.skipQuestion());
        this.optionsContainer.appendChild(skipButton);
        
        // Update navigation buttons
        this.prevQuestionBtn.disabled = this.currentQuestionIndex === 0;
        this.nextQuestionBtn.textContent = this.currentQuestionIndex === this.questions.length - 1 ? 'Finish Quiz' : 'Next Question';
        
        // Show/hide finish button
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.finishQuizBtn.style.display = 'inline-block';
            this.nextQuestionBtn.style.display = 'none';
        } else {
            this.finishQuizBtn.style.display = 'none';
            this.nextQuestionBtn.style.display = 'inline-block';
        }
    }

    selectOption(selectedOption) {
        this.userAnswers[this.currentQuestionIndex] = selectedOption;
        
        // Update visual feedback
        const options = this.optionsContainer.querySelectorAll('.option');
        options.forEach(option => {
            option.classList.remove('selected', 'correct', 'incorrect');
            if (option.querySelector('input').checked) {
                option.classList.add('selected');
            }
        });
        
        // Show immediate feedback
        this.showAnswerFeedback(selectedOption);
    }
    
    showAnswerFeedback(selectedOption) {
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = selectedOption === question.answer;
        
        // Find the selected option element
        const options = this.optionsContainer.querySelectorAll('.option');
        options.forEach(option => {
            const radio = option.querySelector('input');
            if (radio.checked) {
                if (isCorrect) {
                    option.classList.add('correct');
                } else {
                    option.classList.add('incorrect');
                }
            }
        });
        
        // Show correct answer if wrong
        if (!isCorrect) {
            options.forEach(option => {
                const radio = option.querySelector('input');
                if (radio.value === question.answer) {
                    option.classList.add('correct');
                }
            });
        }
        
        // Disable all radio buttons after selection
        options.forEach(option => {
            const radio = option.querySelector('input');
            radio.disabled = true;
        });
        
        // Show feedback message
        this.showFeedbackMessage(isCorrect, question.answer);
    }
    
    showFeedbackMessage(isCorrect, correctAnswer) {
        // Remove existing feedback message
        const existingFeedback = this.optionsContainer.querySelector('.feedback-message');
        if (existingFeedback) {
            existingFeedback.remove();
        }
        
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback-message';
        
        if (isCorrect) {
            feedbackDiv.innerHTML = '<span class="correct-feedback">✓ Correct! Well done!</span>';
        } else {
            feedbackDiv.innerHTML = `<span class="incorrect-feedback">✗ Incorrect. The correct answer is: <strong>${correctAnswer}</strong></span>`;
        }
        
        this.optionsContainer.appendChild(feedbackDiv);
    }
    
    skipQuestion() {
        // Mark question as skipped
        this.userAnswers[this.currentQuestionIndex] = 'skipped';
        
        // Disable all radio buttons
        const options = this.optionsContainer.querySelectorAll('.option');
        options.forEach(option => {
            const radio = option.querySelector('input');
            radio.disabled = true;
        });
        
        // Show correct answer
        const question = this.questions[this.currentQuestionIndex];
        options.forEach(option => {
            const radio = option.querySelector('input');
            if (radio.value === question.answer) {
                option.classList.add('correct');
            }
        });
        
        // Show skip feedback message
        this.showSkipFeedback(question.answer);
    }
    
    showSkipFeedback(correctAnswer) {
        // Remove existing feedback message
        const existingFeedback = this.optionsContainer.querySelector('.feedback-message');
        if (existingFeedback) {
            existingFeedback.remove();
        }
        
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback-message';
        feedbackDiv.innerHTML = `<span class="skip-feedback">⏭ Question skipped. The correct answer is: <strong>${correctAnswer}</strong></span>`;
        
        this.optionsContainer.appendChild(feedbackDiv);
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    finishQuiz() {
        // Stop timer
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        // Calculate results
        const results = this.calculateResults();
        
        // Display results
        this.displayResults(results);
        
        // Show results screen
        this.showScreen(this.resultsScreen);
    }

    calculateResults() {
        let correctCount = 0;
        let skippedCount = 0;
        const results = [];
        
        this.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.answer;
            const isSkipped = userAnswer === 'skipped';
            
            if (isCorrect) {
                correctCount++;
            }
            if (isSkipped) {
                skippedCount++;
            }
            
            results.push({
                question: question.question,
                userAnswer: userAnswer,
                correctAnswer: question.answer,
                isCorrect: isCorrect,
                isSkipped: isSkipped
            });
        });
        
        const percentage = Math.round((correctCount / this.questions.length) * 100);
        const timeTaken = this.quizStartTime ? Math.round((Date.now() - this.quizStartTime) / 1000) : 0;
        
        return {
            totalQuestions: this.questions.length,
            correctAnswers: correctCount,
            skippedQuestions: skippedCount,
            percentage: percentage,
            timeTaken: timeTaken,
            results: results
        };
    }

    displayResults(results) {
        // Update score display
        this.scorePercentage.textContent = `${results.percentage}%`;
        this.correctAnswersSpan.textContent = results.correctAnswers;
        this.totalAnswersSpan.textContent = results.totalQuestions;
        
        // Add skipped questions info if any
        if (results.skippedQuestions > 0) {
            const skippedInfo = document.createElement('p');
            skippedInfo.className = 'skipped-info';
            skippedInfo.innerHTML = `<strong>Skipped Questions:</strong> ${results.skippedQuestions}`;
            this.scorePercentage.parentNode.appendChild(skippedInfo);
        }
        
        // Set score message
        let message = '';
        if (results.percentage >= 90) {
            message = 'Excellent! You have a strong understanding of hematology concepts.';
        } else if (results.percentage >= 80) {
            message = 'Great job! You have a good grasp of most hematology topics.';
        } else if (results.percentage >= 70) {
            message = 'Good work! You understand the basics well, with room for improvement.';
        } else if (results.percentage >= 60) {
            message = 'Fair performance. Review the topics you missed to strengthen your knowledge.';
        } else {
            message = 'Keep studying! Focus on the fundamental concepts and review regularly.';
        }
        this.scoreMessage.textContent = message;
        
        // Display question review
        this.questionReview.innerHTML = '';
        results.results.forEach((result, index) => {
            const reviewItem = document.createElement('div');
            let statusClass = 'incorrect';
            if (result.isCorrect) {
                statusClass = 'correct';
            } else if (result.isSkipped) {
                statusClass = 'skipped';
            }
            
            reviewItem.className = `question-review-item ${statusClass}`;
            
            let answerText = result.userAnswer || 'Not answered';
            if (result.isSkipped) {
                answerText = 'Skipped';
            }
            
            reviewItem.innerHTML = `
                <h4>Question ${index + 1}</h4>
                <p><strong>Question:</strong> ${result.question}</p>
                <p><strong>Your Answer:</strong> <span class="user-answer">${answerText}</span></p>
                <p><strong>Correct Answer:</strong> <span class="correct-answer">${result.correctAnswer}</span></p>
            `;
            this.questionReview.appendChild(reviewItem);
        });
    }

    startTimer() {
        let timeLeft = this.timeLimit;
        this.updateTimerDisplay(timeLeft);
        
        this.timer = setInterval(() => {
            timeLeft--;
            this.updateTimerDisplay(timeLeft);
            
            if (timeLeft <= 0) {
                clearInterval(this.timer);
                this.finishQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        this.timerDisplay.textContent = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        
        // Change color when time is running low
        if (seconds <= 10) {
            this.timerDisplay.style.color = '#dc3545';
            this.timerDisplay.style.animation = 'pulse 1s infinite';
        } else if (seconds <= 30) {
            this.timerDisplay.style.color = '#ffc107';
        } else {
            this.timerDisplay.style.color = '#dc3545';
            this.timerDisplay.style.animation = 'none';
        }
    }

    retakeQuiz() {
        this.showScreen(this.startScreen);
        this.setupQuiz();
    }

    downloadResults() {
        const results = this.calculateResults();
        const timestamp = new Date().toLocaleString();
        
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Hematology Quiz Results\n";
        csvContent += `Date: ${timestamp}\n`;
        csvContent += `Score: ${results.correctAnswers}/${results.totalQuestions} (${results.percentage}%)\n`;
        csvContent += `Time Taken: ${results.timeTaken} seconds\n\n`;
        csvContent += "Question,Your Answer,Correct Answer,Result\n";
        
        results.results.forEach((result, index) => {
            const question = result.question.replace(/"/g, '""');
            let userAnswer = result.userAnswer || 'Not answered';
            if (result.isSkipped) {
                userAnswer = 'Skipped';
            }
            userAnswer = userAnswer.replace(/"/g, '""');
            const correctAnswer = result.correctAnswer.replace(/"/g, '""');
            let resultText = 'Incorrect';
            if (result.isCorrect) {
                resultText = 'Correct';
            } else if (result.isSkipped) {
                resultText = 'Skipped';
            }
            
            csvContent += `"${question}","${userAnswer}","${correctAnswer}","${resultText}"\n`;
        });
        
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `hematology-quiz-results-${Date.now()}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    showScreen(screen) {
        // Hide all screens
        [this.startScreen, this.quizScreen, this.resultsScreen].forEach(s => s.classList.remove('active'));
        
        // Show requested screen
        screen.classList.add('active');
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

// Add CSS animation for timer pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Initialize the quiz app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
