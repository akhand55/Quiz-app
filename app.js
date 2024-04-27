let questions = [{
    'que': 'How long does the Indian Constitution take ?',
    'a': '2 years, 11 months, 17 days',
    'b': '2 years, 9 months, 11 days',
    'c': '1 years, 12 months, 9 days',
    'd': '1 years, 5 months, 4 days',
    'correct': 'a'
},
{
    'que': 'What day is World Tourism Day ?',
    'a': '27 Sept',
    'b': '25 Aug',
    'c': '01 June',
    'd': '21 Dec',
    'correct': 'a'
},
{
    'que': 'When is the World Population Day ?',
    'a': '02 Feb',
    'b': '11 July',
    'c': '29 Feb',
    'd': '29 July',
    'correct': 'b'
},
{
    'que': 'What year was the x-ray invented ?',
    'a': '1867',
    'b': '1843',
    'c': '1856',
    'd': '1895',
    'correct': 'd'
},
{
    'que': 'who discovered dynamite ?',
    'a': 'Thomas Edison',
    'b': 'Marie Curie',
    'c': 'Alfred Nobel',
    'd': 'Wilhelm Conrad Roentgen',
    'correct': 'c'
}]


let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

let quesBox = document.getElementById('quesBox');
let optionInputs = document.querySelectorAll(".options");

let loadQues = () => {
    if (index === total) {
        return endQuiz();
    }

    reset();
    let data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

let submitQuiz = () => {
    let data = questions[index];
    let ans = getAnswer();
    if (ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQues();
    return;
}

let getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

let reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

let endQuiz = () => {
    document.getElementById("box").innerHTML = `
<h3>Thank You for playing the quiz</h3>
<h2> ${right}/${total} are correct </h2>
`
}

loadQues()