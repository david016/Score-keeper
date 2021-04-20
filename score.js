const btnP1 = document.querySelector("#btn1")
const btnP2 = document.querySelector("#btn2")
const btnReset = document.querySelector("#btnReset")

const player1 = {
    score: 0,
    button: document.querySelector("#btn1"),
    display: document.querySelector("#displayP1")
}
const player2 = {
    score: 0,
    button: document.querySelector("#btn2"),
    display: document.querySelector("#displayP2")
}
const players = [player1, player2]

const reset = function () {
    for (let player of players) {
        player.score = 0;
        player.display.textContent = "0"
        player.display.style.color = "black"
        player.button.disabled = false

    }
}

const isGameOver = function (player, oponent) {
    return ((player.score === parseInt(document.querySelector("select").value)) || (oponent.score === parseInt(document.querySelector("select").value)))
}


const updateScore = function (player, oponent) {
    if (!isGameOver(player, oponent)) {
        player.score++
        player.display.textContent = player.score
        if (isGameOver(player, oponent)) {
            player.display.style.color = "green";
            oponent.display.style.color = "red";
            player.button.disabled = true
            oponent.button.disabled = true
        }
    }
}

btnP1.addEventListener("click", function () {
    updateScore(player1, player2)
})
btnP2.addEventListener("click", function () {
    updateScore(player2, player1)
})
btnReset.addEventListener("click", function () {
    reset()
})




// let scorePlayer1 = 0;
// let scorePlayer2 = 0;
// const maxScore = document.querySelector("select")

// const player1 = document.querySelector("#btn1")
// const player2 = document.querySelector("#btn2")
// const reset = document.querySelector("#btnReset")

// player1.addEventListener("click", function () {
//     if ((scorePlayer1.toString() === maxScore.value) || (scorePlayer2.toString() === maxScore.value)) {
//         console.log("max score reached")
//     }
//     else {
//         scorePlayer1++
//         if (scorePlayer1.toString() === maxScore.value) {
//             document.querySelector("#displayP1").style.color = "green";
//             document.querySelector("#displayP2").style.color = "red";
//             player1.disabled = true
//             player2.disabled = true
//         }
//         document.querySelector("#displayP1").textContent = scorePlayer1
//     }
// })

// player2.addEventListener("click", function () {
//     if ((scorePlayer2.toString() === maxScore.value) || (scorePlayer1.toString() === maxScore.value)) {
//         console.log("max score reached")
//     }
//     else {
//         scorePlayer2++
//         if (scorePlayer2.toString() === maxScore.value) {
//             document.querySelector("#displayP2").style.color = "green";
//             document.querySelector("#displayP1").style.color = "red";
//             player1.disabled = true
//             player2.disabled = true
//         }
//         document.querySelector("#displayP2").textContent = scorePlayer2
//     }
// })

// reset.addEventListener("click", function () {
//     scorePlayer1 = 0;
//     scorePlayer2 = 0;
//     document.querySelector("#displayP1").textContent = scorePlayer1
//     document.querySelector("#displayP2").textContent = scorePlayer2
//     document.querySelector("#displayP2").style.color = "black";
//     document.querySelector("#displayP1").style.color = "black";
//     player1.disabled = false
//     player2.disabled = false
// })