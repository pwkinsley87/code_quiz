const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');

let currentQuestion = 0;
var score = 0;

let questions = [
    {
        question: "Which JavaScript container object stores multiple pieces of data of the same type together?",
        answers: [
            {option: "A div.", answer:false},
            {option: "An IF loop.", answer:false},
            {option: "An array.", answer:true}
        ]
    },
    {
        question: "What is JavaScript?",
        answers: [
            {option: "A text-based programming language used on the client-side and server-side which allows developers to make web pages interactive.", answer:true},
            {option: "A stylesheet language used to desbribe the presentation of a document written in HTML.", answer:false},
            {option: "A programming interface for web documents.", answer:false}
        ]
    },
    {
        question: "Which of the following is an example of Camelcase?",
        answers: [
            {option: "Document.GetElementById", answer:false},
            {option: "document.getelementbyid", answer:false},
            {option: "document.getElementById", answer:true}
        ]
    }
]

restartBtn.addEventListener('click', restart);
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener('click',submit);

function beginQuiz () {
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }   
    prevBtn.classList.add('hide');
}

function restart () {
    currentQuestion = 0;
    prevBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

function next(){
    currentQuestion++;
    if(currentQuestion>=2){
        nextBtn.classList.add('hide');
        prevBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    prevBtn.classList.remove('hide');
}

function prev(){
    currentQuestion--;
    if(currentQuestion<=0){
        prevBtn.classList.add('hide');
        nextBtn.classList.remove('hide');
    }
     questionText.innerHTML = questions[currentQuestion].question;
     trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
     trueBtn.onclick = () => {
         let ano=0;
         if(questions[currentQuestion].answers[ano].answer){
             if(score<3){
                 score++;
             }
         }
         userScore.innerHTML = score;
         if(currentQuestion<2){
             next();
         }
     }
     falseBtn.innerHTML = question[currentQUestion].answers[1].option;
     falseBtn.onclick = () => {
         let ano=1;
         if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }    
     }
     nextBtn.classList.remove('hide');
}

function submit(){
    prevBtn.classList.add('hide');
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');
    questionText.innerHTML = "Congratulations on submitting the quiz!"
}



beginQuiz();