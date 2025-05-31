const stages = [
    {
        answer: "GITSTART",
        clue: "Stage 2: The boy who codes his feelings but sometimes hides them in plain sight."
    },
    {
        answer: "LINKEDTWO",
        clue: "Im more famous than I look. Try googling !"
    },
    {
        answer: "LITHREE",
        clue: "Already crushed me a dozen times, yet I always look forward to it"
    },
    {
        answer: "IGFOUR",
        clue: "The pituitary gland is a major endocrine gland, that is important in controlling growth and development and the functioning of the other endocrine glands."
    },
    {
        answer: "GRVFIVE",
        clue: "Im done staring at the ceiling all the time. Whats next?"
    },
    {
        answer: "LKSIX",
        clue: "The photo is framed, but not on your wall?"
    },
    {
        answer: "SEVEN",
        clue: "Darta Jahaan Humse"
    },
    {
        answer: "GFLOVER",
        clue: "When will it be my turn to pick?"
    },
    {
        answer: "FINAL",
        clue: "https://drive.google.com/drive/folders/1YnZcsd-QymK-f4oGjUbxxuwD3CGvOWJM"
    },
];

let currentStage = 0;
const input = document.getElementById('codeInput');
const message = document.getElementById('message');
const clue = document.getElementById('clue');
const button = document.getElementById('submitBtn');

button.addEventListener('click',() => {
    const userInput = input.value.trim().toUpperCase();
    if(userInput === stages[currentStage].answer){
        currentStage++;
        if(currentStage < stages.length){
            clue.textContent = stages[currentStage].clue;
            message.textContent = "Correct! Next stage unlocked!";
        }else{
            clue.textContent = "You've finished the hunt priyu. CONGRATS!!";
            message.textContent = "Click a screenshot and send me for your prize!";
            input.style.display = "none";
            button.style.display = "none";
        }
        input.value = "";
    }else{
        message.textContent = "Hmm, not quite right bubu. Try again.";
    }
});