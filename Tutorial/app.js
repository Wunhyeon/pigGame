/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// var scores,roundScore,activePlayer,gameIsPlaying;

// init();
// //1.처음시작할때 상태
// function init(){
//     scores = [0,0];
//     roundScore = 0;
//     activePlayer = 0;
//     gameIsPlaying = true;

//     // console.log( document.getElementsByClassName('dice')[0]);
//     // console.log( document.getElementsByClassName('dice'));
//     document.getElementsByClassName('dice')[0].style.display = "none";
//     //document.querySelector('.dice').style.display='none';

//     //스코어 0으로
//     document.getElementById('score-0').textContent = scores[0];
//     document.getElementById('score-1').textContent = scores[1];

//     //current0으로
//     document.getElementById('current-0').textContent = roundScore;
//     document.getElementById('current-1').textContent = roundScore;

//     //플레이어 이름 초기화
//     document.querySelector('#name-0').classList.remove('winner');
//     document.querySelector('#name-1').classList.remove('winner');
//     document.querySelector('#name-0').textContent = "player 1";
//     document.querySelector('#name-1').textContent = "player 2";

//     //activePlayer 표시 초기화
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');
// }


// //2.롤 다이스 할때 점수판 업데이트
// //*1이 나오면 current0으로 만들고 상대턴으로
// document.getElementsByClassName('btn-roll')[0].addEventListener('click',rollDice);

// function rollDice(){
//     if(gameIsPlaying){

//         //주사위 굴리기
//         var diceDOM = document.getElementsByClassName('dice')[0];
//         diceDOM.style.display = "block";
//         var roll = Math.floor(Math.random() * 6)+1;
//         diceDOM.src = "dice-"+roll+".png"

//         //주사위가 1이아니라면 액티브 플레이어에 따라 굴린 주사위의 숫자가 current에 업데이트
//         if(roll !== 1){
//             roundScore += roll;
//             document.getElementById('current-'+activePlayer).textContent = roundScore;
//         }else{  //주사위가 1이 나오면 current 초기화되고 플레이어 턴이 넘어감
//             nextTurn();
//         }
//     }
    
// }
// //3.홀드 누르면 current의 점수가 스코어로 올라가고 상대턴으로
// document.getElementsByClassName('btn-hold')[0].addEventListener('click',holdScore);

// function holdScore(){
//     if(gameIsPlaying){
//         //라운드 스코어를 스코어로 업데이트
//         scores[activePlayer] += roundScore;
//         document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
//         //score가 100이 되면 현재 액티브플레이어가 위너, 아니면 current0으로 만들고 상대턴으로
//         //score가 100이 되면 현재 액티브플레이어가 위너, 모든 버튼 비활성화
//         if(scores[activePlayer] >= 20){
//             document.querySelector('#name-'+activePlayer).classList.add('winner');
//             document.querySelector('#name-'+activePlayer).textContent = "Winner!";
//             gameIsPlaying = false;
//         }else{//current 0으로 만들고 상대턴으로  
//             nextTurn();
//         }
//     }
// }

// //current 0으로 만들고 상대턴으로 넘기는 function
// function nextTurn(){
//     roundScore = 0;
//     document.getElementById('current-'+activePlayer).textContent = roundScore;
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;   //activePlayer를 바꿔준다.
//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');
// }

// //4.뉴게임 누르면 다시 처음부터
// document.querySelector('.btn-new').addEventListener('click',init);

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row.
 After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score,
 so that they can change the predefined score of 100. (Hint: you can read that 
    value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. 
 The player looses his current score when one of them is a 1. 
 (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores,roundScore,activePlayer,gameIsPlaying,rollValue,rollValue2;

init();
//1.처음시작할때 상태
function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gameIsPlaying = true;

    rollValue = []; //Challenge1
    rollValue2 = [];    //Chaellenge3

    document.querySelector('.winningCriteriaInput').disabled = !gameIsPlaying;//Challenge2

    // console.log( document.getElementsByClassName('dice')[0]);
    // console.log( document.getElementsByClassName('dice'));
    document.getElementsByClassName('dice')[0].style.display = "none";
    document.getElementsByClassName('dice2')[0].style.display = "none"; //Challenge3
    //document.querySelector('.dice').style.display='none';

    //스코어 0으로
    document.getElementById('score-0').textContent = scores[0];
    document.getElementById('score-1').textContent = scores[1];

    //current0으로
    document.getElementById('current-0').textContent = roundScore;
    document.getElementById('current-1').textContent = roundScore;

    //플레이어 이름 초기화
    document.querySelector('#name-0').classList.remove('winner');
    document.querySelector('#name-1').classList.remove('winner');
    document.querySelector('#name-0').textContent = "player 1";
    document.querySelector('#name-1').textContent = "player 2";

    //activePlayer 표시 초기화
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


//2.롤 다이스 할때 점수판 업데이트
//*1이 나오면 current0으로 만들고 상대턴으로
document.getElementsByClassName('btn-roll')[0].addEventListener('click',rollDice);

function rollDice(){
    if(gameIsPlaying){

        //주사위 굴리기
        var diceDOM = document.getElementsByClassName('dice')[0];
        var diceDOM2 = document.getElementsByClassName('dice2')[0]; //Challenge3
        diceDOM.style.display = "block";
        diceDOM2.style.display = "block";   //Challenge3
        var roll = Math.floor(Math.random() * 6)+1;
        var roll2 = Math.floor(Math.random() * 6) +1;
        //roll = 6;   //Challenge 1
        diceDOM.src = "dice-"+roll+".png"
        diceDOM2.src = "dice-"+roll2+".png"
        //Challenge 1
        var flag = true;
        var flag2 = true;   //Challenge3
        rollValue.push(roll);
        rollValue[rollValue.length-2] === 6 && rollValue[rollValue.length-1]===rollValue[rollValue.length-2] ? flag=false : flag = true;

        rollValue2.push(roll2);
        rollValue2[rollValue2.length-2] === 6 && rollValue2[rollValue2.length-1]===rollValue2[rollValue2.length-2] ? flag2=false : flag2 = true;

        //Challenge 2
        document.querySelector('.winningCriteriaInput').disabled = gameIsPlaying;

        //주사위가 1이아니라면 액티브 플레이어에 따라 굴린 주사위의 숫자가 current에 업데이트
        if(roll !== 1 && flag && roll2 !==1 && flag2){
            roundScore += roll + roll2;
            document.getElementById('current-'+activePlayer).textContent = roundScore;
        }else{  //주사위가 1이 나오면 current 초기화되고 플레이어 턴이 넘어감
            nextTurn();
        }
    }
    
}
//3.홀드 누르면 current의 점수가 스코어로 올라가고 상대턴으로
document.getElementsByClassName('btn-hold')[0].addEventListener('click',holdScore);

function holdScore(){
    if(gameIsPlaying){
        //라운드 스코어를 스코어로 업데이트
        scores[activePlayer] += roundScore;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
        //score가 100이 되면 현재 액티브플레이어가 위너, 아니면 current0으로 만들고 상대턴으로
        //score가 100이 되면 현재 액티브플레이어가 위너, 모든 버튼 비활성화

        // if(scores[activePlayer] >= 20){
        //     document.querySelector('#name-'+activePlayer).classList.add('winner');
        //     document.querySelector('#name-'+activePlayer).textContent = "Winner!";
        //     //버튼 비활성화
        //     gameIsPlaying = false;
        // }else{//current 0으로 만들고 상대턴으로  
        //     nextTurn();
        // }

        //Challenge 2 : 인풋박스에 넣은 수가 승패기준
        var inputValue = document.querySelector('.winningCriteriaInput').value;
        var criteria = 20;
        // inputValue === '' ? console.log("x는 빈문자열이다") : console.log("x는 빈문자열이 아니다");
        if(inputValue !== '') criteria = inputValue;
        
        if(scores[activePlayer] >= criteria){
            document.querySelector('#name-'+activePlayer).classList.add('winner');
            document.querySelector('#name-'+activePlayer).textContent = "Winner!";
            //버튼 비활성화
            gameIsPlaying = false;
        }else{//current 0으로 만들고 상대턴으로  
            nextTurn();
        }
    }
}

//current 0으로 만들고 상대턴으로 넘기는 function
function nextTurn(){
    roundScore = 0;
    document.getElementById('current-'+activePlayer).textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;   //activePlayer를 바꿔준다.
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    rollValue = []; //Challenge 1
}

//4.뉴게임 누르면 다시 처음부터
document.querySelector('.btn-new').addEventListener('click',init);
