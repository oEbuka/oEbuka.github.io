const quizData = [
    {
        question: "How many games did it take Cristiano Ronaldo to get his first UCL goal?",
        a: "13",
        b:"27",
        c:"4",
        d:"10",
        correct: "b"
    },

    {
        question: "Before adopting Red, what was Uniteds first colors?",
        a: "Yellow",
        b:"White",
        c:"Green",
        d:"Sky blue",
        correct: "c"
    },
    {
        question: "What player did Rangers try to sign after being alrted by football manager of his abilities?",
        a: "Messi",
        b:"Henry",
        c:"Mbappe",
        d:"Haaland",
        correct: "a"
    },
    {
        question: "What year was the first Euros held?",
        a: "1972",
        b:"1960",
        c:"1909",
        d:"1945",
        correct: "b"
    },

    {
        question: "What player tried to fraud his way to 1st place in the recently concluded Ballon D'Or 1st place?",
        a: "Simon Kjaer",
        b:"Messi",
        c:"Jorghino",
        d:"Karim Benzema",
        correct: "d"
    },

    {
        question: " How do you identify a $80m fraud ?",
        a: "A Fridge",
        b:"Sweat",
        c:"He'll be unlocked next year",
        d:"Golden Boy",
        correct: "a"
    },

    {
        question: "Why chelsea play so so good, is famously quoted from?",
        a: "Josep",
        b:"Jose",
        c:"Jorge",
        d:"Juami",
        correct: "a"
    },

    {
        question: "Which of these players is not signed to Puma?",
        a: "Pulisic",
        b:"Alaba",
        c:"Griezmann",
        d:"saka",
        correct: "b"
    },
    {
        question: "Which of these players currently have more than one league goal?",
        a: "Ankara Messi",
        b:"Jadon Ola Sancho",
        c:"Timothy Wene-Mighty",
        d:"Joao no-weak-foot Cancelo",
        correct: "c"
    },

    {
        question: "Salon D'Or latest winner?",
        a: "El sharaway",
        b:"Paul Pogba",
        c:"Balloteli",
        d:"Neymar Jr",
        correct: "b"
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz =0
let score=0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function  deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)

}

function getSelected(){
    let answer

    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected()

    if (answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}
                    /${quizData.length} questions, SIUUUUU!</h2>
                    <button onclick="location.reload()">Reload</button>
                    `
        }

    }
})