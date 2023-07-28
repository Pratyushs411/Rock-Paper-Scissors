const handOptions = {
    "rock" : "./images/icon-rock.svg",
    "scissors" : "./images/icon-scissors.svg",
    "paper" : "./images/icon-paper.svg"
}
const Colorb = {
    "rock": "hsl(349, 71%, 52%)",
    "scissors" : "hsl(39, 89%, 49%)",
    "paper" : "hsl(230, 89%, 62%)"
}
let SCORE = 0;
const pickHand = (hand) =>{
    console.log(hand);
    let game = document.querySelector(".game");
    game.style.display = "none";
    let result=document.querySelector(".result");
    result.style.display="flex";
    let br = document.querySelector(".paper-final");
    document.getElementById("paper-result").src = handOptions[hand];
    br.style.borderColor = Colorb[hand];

    let hands = ["rock","paper","scissors"];
    let number = hands[Math.floor(3*(Math.random()))];
    console.log(number);
    let brf =  document.querySelector(".paper-finalh");
    document.getElementById("paper-result-comp").src = handOptions[number];
    brf.style.borderColor = Colorb[number];
    textResult(hand,number);

}
const textResult =(userHand,cpHand) =>{
    if(userHand == cpHand)
    {
        document.getElementById("fResult").textContent = "DRAW!";
    }
    else{
        if(userHand == "rock")
        {
            if(cpHand == "paper")
        {
            document.getElementById("fResult").textContent = "YOU LOSE!";
        }
        else{
            document.getElementById("fResult").textContent = "YOU WIN!"; 
            setScore(SCORE + 1);
        }
    }
    if(userHand == "paper")
        {
            if(cpHand == "scissors")
        {
            document.getElementById("fResult").textContent = "YOU LOSE!";
        }
        else{
            document.getElementById("fResult").textContent = "YOU WIN!"; 
            setScore(SCORE + 1);
        }
    }
    if(userHand == "scissors")
        {
            if(cpHand == "rock")
        {
            document.getElementById("fResult").textContent = "YOU LOSE!";
        }
        else{
            document.getElementById("fResult").textContent = "YOU WIN!"; 
            setScore(SCORE + 1);
        }
    }
    }
}
const setScore = (score) =>
{
    SCORE = score;
document.querySelector(".number-score").innerHTML = score;
}
const restart = () =>
{
    let game = document.querySelector(".game");
    game.style.display = "flex";
    let result=document.querySelector(".result");
    result.style.display="none";
}