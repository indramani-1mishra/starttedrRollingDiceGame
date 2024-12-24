

let user1 = document.getElementById("user1");
let user2 = document.getElementById("user2");
let player1Score = document.getElementById("player1score");
let player2Score = document.getElementById("player2score");
let dice1 = document.getElementById("image1");
let dice2 = document.getElementById("image2");
let player1Wins = document.getElementById("win");
let rollsbutton = document.getElementById("rolldice");
let exitButton = document.getElementById("exit1");



let count = 0;
let count1 = 0;


function checkWinner() {
    let audio= new Audio('audio/win.mp3');
    audio.play().then(() => {
    if(randomNumber1 > randomNumber2) {
        player1Wins.textContent = "Player 1 wins!";
        count++;
        
    
    } else if(randomNumber1 < randomNumber2) {
        player1Wins.textContent = "Player 2 wins!";
        count1++;
    } else {
        player1Wins.textContent = "It's a tie!";
    }

}).catch(
    error => {
        console.error('Error playing sound:', error);
    });
}

// Using image tags to display dice images

function changeSource()
{
    if(randomNumber1 === 1)
        {
            dice1.src = "ph/one.png";
            
        }
        else if(randomNumber1===2) {
            dice1.src = "ph/two.png";
        }
        
        else if(randomNumber1===3) {
            dice1.src = "ph/three.png";
        }
        
        else if(randomNumber1===4) {
            dice1.src = "ph/four.png";
        }
        
        else if(randomNumber1===5) {
            dice1.src = "ph/five.png";
        }
        
        else if(randomNumber1===6) {
            dice1.src = "ph/six.png";
        }
        
        if(randomNumber2 === 1)
            {
            dice2.src = "ph/one.png";
        }
        
        else if(randomNumber2===2) {
            dice2.src = "ph/two.png";
        }
        
        else if(randomNumber2===3) {
            dice2.src = "ph/three.png";
        }
        
        else if(randomNumber2===4) {
            dice2.src = "ph/four.png";
        }
        else if(randomNumber2===5)
            {
            dice2.src = "ph/five.png";
        }
        
        else if(randomNumber2===6) {
            dice2.src = "ph/six.png";
        }
}

rollsbutton.addEventListener("click", ()=>{

    let audio= new Audio('audio/select.mp3');
    audio.play().then(() => {
 randomNumber1 = Math.floor(Math.random() * 6) + 1;
 randomNumber2 = Math.floor(Math.random() * 6) + 1;
 
 player1Score.textContent = randomNumber1;
 player2Score.textContent = randomNumber2;
 
 changeSource();
 checkWinner();
   


}) 
}).catch(() =>{
    console.error('Error playing sound:', error)
});


exitButton.addEventListener("click", () => {
    window.location.href = window.location.href;
});


//dice1.src = "ph/" + randomNumber1 + ".png";
// dice2.src = "ph/" + randomNumber2 + ".png";

