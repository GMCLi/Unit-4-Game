//Variables
var crystalarray = [];//Empty array for crystals. Will be populated by random number generated and pushed into the array
var crystalbuttons = [];//Empty array for crystals to house their value
var wins = 0;//Wins start at 0
var loss = 0;//Loss start at 0
var totalscore = 0;//Total score start at 0
var randomNumber = "";


//General Flow
    //Game starts by generating random number(player's goal) between 19 and 120 and displays it (id="displayrandom")
    function randomize(){ //at the start of the document, run the reset function
        var randomNumber=Math.floor(Math.random() * 102+19);//randomly selects a number between 19-120 CONFIRMED OPERATIONAL
        console.log("goal to reach: " + randomNumber);//CONFIRMED OPERATIONAL
        $("#randomnumber").text(randomNumber);//displays the random number that the player must reach CONFIRMED OPERATIONAL
        totalscore = 0;//sets the player's score to 0 CONFIRMED OPERATIONAL
        console.log("player score: " + totalscore);//CONFIRMED OPERATIONAL
        $("#totalScore").text(totalscore);//displays the user's score as 0 NOT OPERATIONAL DOES NOT DISPLAY!!!!!!!!!!!!!!!!!
    }

    //Game starts by generating random numbers which are given as values for each crystal
    function givecrystalvalue() {
        //runs a for loop for the crystalbuttons array
            $("#crystalvalue1").attr("value", Math.floor(Math.random() * 12) + 1);//gives purple crystal a value CONFIRMED OPERATIONAL
            $("#crystalvalue2").attr("value", Math.floor(Math.random() * 12) + 1);//gives blue crystal a value CONFIRMED OPERATIONAL
            $("#crystalvalue3").attr("value", Math.floor(Math.random() * 12) + 1);//gives yellow crystal a value CONFIRMED OPERATIONAL
            $("#crystalvalue4").attr("value", Math.floor(Math.random() * 12) + 1);//gives green crystal a value CONFIRMED OPERATIONAL
            console.log(crystalvalue1);//CONFIRMED OPERATIONAL
            console.log(crystalvalue2);//CONFIRMED OPERATIONAL
            console.log(crystalvalue3);//CONFIRMED OPERATIONAL
            console.log(crystalvalue4);//CONFIRMED OPERATIONAL
    }

    //Player clicks crystals which add their value to totalscore.
        //Crystal 1 is clicked, it's value is added to totalscore.
    function crystalLogistics() {
        $("#crystalvalue1").click(function() {//NEED HELP!!!!!!!!!!!!!!
            totalscore = totalscore + crystalvalue1;
        })
        
    }

    //The newly summed up value gets displayed (id="totalscore")
    function displaytotalscore(){
        $("#totalScore").text();//NEED CONFIRMATION
    }

    //The totalscore is compared to the random number to determine win or loss
    function winlosslistener(){
        if (randomNumber == totalscore){//If totalscore === random number the player wins
            wins++;//The game adds 1 to wins array NEED CONFIRMATION
            startgame();//Restarts game with Wins and Losses in tact NEED CONFIRMATION
        }
        
        else if (randomNumber > totalscore){//If totalscore > random number the player loses
            loss++;//The game adds 1 to loss array NEED CONFIRMATION
            startgame();//Restarts game with Wins and Losses in tact NEED CONFIRMATION
        //Else player keeps playing SINCE THERE IS NO CHANGE, DO I NEED TO EVEN MAKE AN "ELSE"?
        }
    }

