async function fetchQuizzes() {
    const response = await fetch('/quizzes/assigned');
    const quizzes = await response.json();
    const quizList = document.getElementById('quizList');
    
    quizzes.forEach(quiz => {
      const quizItem = document.createElement('div');
      quizItem.innerHTML = `<p>${quiz.title}</p><button onclick="takeQuiz(${quiz.id})">Take Quiz</button>`;
      quizList.appendChild(quizItem);
    });
  }
  
  function takeQuiz(quizId) {
    window.location.href = `takeQuiz.html?quizId=${quizId}`;
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const quizList = document.getElementById('quizList');
    
    if (quizList) {
      fetchQuizzes();
    }
  });
  
  async function fetchQuiz(quizId) {
    const response = await fetch(`/quizzes/${quizId}`);
    const quiz = await response.json();
    const quizContainer = document.getElementById('quizContainer');
    
    quiz.questions.forEach(question => {
      const questionItem = document.createElement('div');
      questionItem.innerHTML = `
        <p>${question.questionText}</p>
        ${question.options.map((option, index) => `<input type="radio" name="question${question.id}" value="${option}"> ${option}<br>`).join('')}
      `;
      quizContainer.appendChild(questionItem);
    });
    
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Quiz';
    submitButton.addEventListener('click', async function () {
      const answers = quiz.questions.map(question => {
        const selectedOption = document.querySelector(`input[name="question${question.id}"]:checked`);
        return { questionId: question.id, answer: selectedOption ? selectedOption.value : null };
      });
      
      const response = await fetch(`/quizzes/${quizId}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ answers })
      });
      
      const result = await response.json();
      alert(`Your score: ${result.score}`);
    });
    quizContainer.appendChild(submitButton);
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const quizId = params.get('quizId');
    
    if (quizId) {
      fetchQuiz(quizId);
    }
  });
  