let ComputerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var Wins = 0;
var Losses = 0;
var OpportunitiesLeft = 10;
var OpportunitiesUsed = 0;
var chooseLetter = _ => ComputerChoice[Math.floor(Math.random() * ComputerChoice.length)];
var chosenLetter = chooseLetter()



var resetgame = function (){
    OpportunitiesLeft = 10;
    OpportunitiesUsed = 0;
    // var chooseLetter = _ => ComputerChoice[Math.floor(Math.random() * ComputerChoice.length)];
    chosenLetter = chooseLetter()
}


document.onkeydown = event => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (event.key === chosenLetter) {
            Wins++;
            OpportunitiesLeft--;
            OpportunitiesUsed++;
            alert('You Win!');
            resetgame();
        }
        
        else {
            OpportunitiesLeft--;
            OpportunitiesUsed++;
            alert('Try Again!')
        }

    }

    if (OpportunitiesLeft===0){
        Losses++;
        alert('You Loss!')
        resetgame();
    }


        document.querySelector('#Wins').innerHTML = 'Wins:' + Wins;
        document.querySelector('#Losses').innerHTML = 'Losses:' + Losses;
        document.querySelector('#OpportunityLeft').innerHTML = 'Opportunities Left:' +OpportunitiesLeft;
        document.querySelector('#OpportunityUsed').innerHTML = 'Opportunities Used:' +OpportunitiesUsed;
       

}
