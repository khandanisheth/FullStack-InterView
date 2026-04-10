// Step 1: Select all elements
const choices = document.querySelectorAll(".itemimg"); // all 3 option buttons
const resultSpans = document.querySelectorAll(".result span"); // win/lost/draw spans
const resetBtn = document.querySelector("button"); // reset button

// Step 2: Hide all result spans
function hideResults() {
    resultSpans.forEach(span => span.style.display = "none");
}

// Step 3: Show result based on win/lost/draw
function drawGame() {
    hideResults(); // sab hide karo
    document.querySelector(".result .draw").style.display = "inline-block"; // sirf draw show
}

function showWinner(userWin, userChoice, compChoice) {
    hideResults(); // sab hide karo
    if (userWin) {
        document.querySelector(".result .win").style.display = "inline-block";
        console.log(`✅ You Win! ${userChoice} beats ${compChoice}`);
    } else {
        document.querySelector(".result .lost").style.display = "inline-block";
        console.log(`❌ You Lose! ${compChoice} beats ${userChoice}`);
    }
}

// Step 4: Computer choice generate karne wala function
function genCompChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

// Step 5: Game logic yaha likha gaya hai — user aur computer dono ke choice ke basis pe
const playGame = (userChoice) => {
    const compChoice = genCompChoice(); // computer choice generate

    if (userChoice === compChoice) {
        // agar same choice hai to draw
        drawGame();
    } else {
        let userWin = true;
        // Niche win/lose condition check ho rahi hai
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        // Result show karo
        showWinner(userWin, userChoice, compChoice);
    }
};

// Step 6: User click kare to game start ho
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.querySelector("img").alt.toLowerCase(); // paper/rock/scissors
        playGame(userChoice); // game start
    });
});

// Step 7: Reset button click par result hata do
resetBtn.addEventListener("click", () => {
    hideResults();
});
