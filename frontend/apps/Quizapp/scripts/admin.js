document.getElementById('addQuestionForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const quizId = document.getElementById('quizId').value;
    const questionText = document.getElementById('questionText').value;
    const options = document.getElementById('options').value.split(',');
    const correctAnswer = document.getElementById('correctAnswer').value;
    
    const response = await fetch('/quizzes/add-question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quizId, questionText, options, correctAnswer })
    });
    
    if (response.ok) {
      alert('Question added successfully');
    } else {
      alert('Failed to add question');
    }
  });
  
  document.addEventListener('DOMContentLoaded', async function () {
    const questionsList = document.getElementById('questionsList');
    
    if (questionsList) {
      const response = await fetch('/quizzes/questions');
      const questions = await response.json();
      
      questions.forEach(question => {
        const questionItem = document.createElement('div');
        questionItem.textContent = question.questionText;
        questionsList.appendChild(questionItem);
      });
    }
  });
  
  document.getElementById('assignQuizForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const userId = document.getElementById('userId').value;
    const quizId = document.getElementById('quizId').value;
    
    const response = await fetch('/quizzes/assign-quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, quizId })
    });
    
    if (response.ok) {
      alert('Quiz assigned successfully');
    } else {
      alert('Failed to assign quiz');
    }
  });
  