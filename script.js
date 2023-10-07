const questions = [
    {
        question : "which is largest econnomy in the world",
        answers : [
            {text:"india", correct:false},
            {text:"china", correct:false},
            {text:"UK", correct:false},
            {text:"USA", correct:true},
        ]
    },
    {
        question : "Most populas countary",
        answers: [
            {text : "india", correct: true},
            {text : "china", correct: false},
            {text : "Pakistan", correct: false},
            {text : "USA", correct: false},
        ]
    },
    {
        question: "most powerful countary",
        answers:[
            {text : "Pakistan", correct: false},
            {text : "India", correct: false},
            {text : "UK", correct: false},
            {text : "USA", correct: true},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}
 function showQuestion(){
   resetState()
   let currentQuestion = questions[currentQuestionIndex]
  let  questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question
    
    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
         if(answer.correct){
             button.dataset.correct = answer.correct
        }
         button.addEventListener('click', selectAnswer);
    });
}


 function resetState(){
    nextButton.style.display = "none"
      while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild)
    }
 }


 function selectAnswer(e){
    const selectedbutton = e.target;
    const isCorrect = selectedbutton.dataset.correct === "true"
    if(isCorrect){
        selectedbutton.classList.add("correct")
        score++
    } else{
       selectedbutton.classList.add("incorrect")
    }
    Array.from(answerbuttons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    });
    nextButton.style.display ="block"
}
function showscore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}! `;
}


function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showscore()
    }
}



    nextButton.addEventListener("click", () =>{
        if(currentQuestionIndex < questions.length){
            handleNextButton()
        }else{
            startQuiz()
        }
    })
 
 
    
 startQuiz()