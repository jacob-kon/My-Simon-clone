//********game variables*********
let currGameList =[]; // array of the current game color pattern 
let gameLevel =0; // every time user guesses pattern =>goes up 1
let gameOver = true;
let levelComplete = false;
let currentChoise = 'none';
let currentLevelList =[];
let nextColorIndex =0;
let checkTry =0;
let userScore =0;


//game sounds
let redAudio = new Audio('sounds/red.mp3')
let blueAudio = new Audio('sounds/blue.mp3')
let yellowAudio = new Audio('sounds/yellow.mp3')
let greenAudio = new Audio('sounds/green.mp3')
let wrongAudio = new Audio('sounds/wrong.mp3')
let endGame =document.querySelector('.endGame')
let startGame =document.querySelector(".startGame")
let score = document.querySelector('.score');
let heading = document.querySelector('.heading')




// selectors for the game buttons
let red = document.querySelector(".red")
let blue = document.querySelector(".blue")
let yellow = document.querySelector(".yellow")
let green = document.querySelector(".green")


//event listeners for color clicks
red.addEventListener('click',function(){
     if (currGameList.length>currentLevelList.length && gameOver=== false){
        console.log('clicked red')
        red.classList.toggle('redBright');
            setTimeout(function(){
                red.classList.toggle('redBright');
            },400)
        currentChoise = 'red';
        currentLevelList.push('red')
        userInputCheck();
        // nextColorIndex++
        if(gameOver===true){
           gameEnded()
        }else{
            redAudio.play();
        }
       
    }
    
})
blue.addEventListener('click',function(){
    if (currGameList.length>currentLevelList.length && gameOver=== false){
        console.log('clicked blue')
        blue.classList.toggle('blueBright');
            setTimeout(function(){
                blue.classList.toggle('blueBright');
            },400)
        currentChoise = 'blue';
        currentLevelList.push('blue')
        userInputCheck();
        // nextColorIndex++;
        if(gameOver===true){
            gameEnded()
        }else{
            blueAudio.play();
        }
    }
    
})
yellow.addEventListener('click',function(){
    if (currGameList.length>currentLevelList.length && gameOver=== false){
        console.log('clicked yellow')
        yellow.classList.toggle('yellowBright');
            setTimeout(function(){
                yellow.classList.toggle('yellowBright');
            },400)
        currentChoise = 'yellow';
        currentLevelList.push('yellow')
        userInputCheck();
        // nextColorIndex++;
        if(gameOver===true){
            gameEnded()
        }else{
            yellowAudio.play();
        }
    }
    
})
green.addEventListener('click',function(){
    if (currGameList.length>currentLevelList.length && gameOver=== false){
        console.log('clicked green')
        green.classList.toggle('greenBright');
            setTimeout(function(){
                green.classList.toggle('greenBright');
            },400)
        currentChoise = 'green';
        currentLevelList.push('green')
        userInputCheck();
        // nextColorIndex++;
        if(gameOver===true){
            gameEnded()
        }else{
            greenAudio.play();
        }
    }
    
})


//event listner to end game at any time
endGame.addEventListener('click',function(){
    console.log('clicked end game');
    gameOver=true;
    gameEnded()
    console.log(`value for gameOver is: ${gameOver}`)
})

function randColor(){
    let rand =Math.floor(Math.random()*4+1)
    gameLevel= gameLevel +1
    console.log('randColor just ran')
    if (rand === 1){
        currGameList.push('red')
    }else if(rand === 2){
        currGameList.push('blue')
    }else if(rand === 3){
        currGameList.push('yellow')
    }else{
        currGameList.push('green')
    }
    return currGameList
}




//1.5 function to play the curr level back to user
function playList(arr){
    setTimeout(()=>{
        console.log('get ready for next level')
    },1000)
    console.log(`the current game list is ${currGameList}`)
    let c=0;
    let soundSpeed = 1 // plays sound at normal speed
    let lightSpeed = 400 // lights up for .4 of a second
    let intervalSpeed =1000 //interval between colors in 1 sec
    if (userScore < 4){
        soundSpeed = 1 // plays sound at normal speed
        lightSpeed = 400 // lights up for .4 of a second
        intervalSpeed =1000 //interval between colors in 1 sec
    }else if(userScore >=4 && userScore < 8){
        soundSpeed = 1.3 // plays sound faster
        lightSpeed = 250 // lights up for less time
        intervalSpeed =700 //interval between colors in .7 sec
    }else if (userScore >= 8 && userScore <12){
        soundSpeed = 1.4 // plays sound faster
        lightSpeed = 200 // lights up for less time
        intervalSpeed =550 //interval between colors in .55 sec
    }else{
        soundSpeed = 1.7 // plays sound faster
        lightSpeed = 160 // lights up for less time
        intervalSpeed =400 //interval between colors in .4 sec
    }
    redAudio.playbackRate = soundSpeed
    blueAudio.playbackRate = soundSpeed
    yellowAudio.playbackRate = soundSpeed
    greenAudio.playbackRate = soundSpeed

    let interval = setInterval(function(){
        if (arr[c]==='red'){
            redAudio.play()
            red.classList.toggle('redBright');
            setTimeout(function(){
                red.classList.toggle('redBright');
            },lightSpeed)
            
        }else if(arr[c]==='blue'){
            blueAudio.play();
            blue.classList.toggle('blueBright');
            setTimeout(function(){
                blue.classList.toggle('blueBright');
            },lightSpeed)
        }else if(arr[c]==='yellow'){
            yellowAudio.play()
            yellow.classList.toggle('yellowBright');
            setTimeout(function(){
                yellow.classList.toggle('yellowBright');
            },lightSpeed)
        }else if (arr[c]==='green'){
            greenAudio.play();
            green.classList.toggle('greenBright');
            setTimeout(function(){
                green.classList.toggle('greenBright');
            },lightSpeed)
        }
        c++
        if (c=== arr.length)clearInterval(interval);
    },intervalSpeed)
    }

//1.5 function to play the curr level back to user working ver
// function playList(arr){
//     console.log(`the current game list is ${currGameList}`)
//     let c=0;
//     let interval = setInterval(function(){
//         if (arr[c]==='red'){
//             redAudio.play()
//             red.classList.toggle('redBright');
//             setTimeout(function(){
//                 red.classList.toggle('redBright');
//             },400)
            
//         }else if(arr[c]==='blue'){
//             blueAudio.play();
//             blue.classList.toggle('blueBright');
//             setTimeout(function(){
//                 blue.classList.toggle('blueBright');
//             },400)
//         }else if(arr[c]==='yellow'){
//             yellowAudio.play()
//             yellow.classList.toggle('yellowBright');
//             setTimeout(function(){
//                 yellow.classList.toggle('yellowBright');
//             },400)
//         }else if (arr[c]==='green'){
//             greenAudio.play();
//             green.classList.toggle('greenBright');
//             setTimeout(function(){
//                 green.classList.toggle('greenBright');
//             },400)
//         }
//         c++
//         if (c=== arr.length)clearInterval(interval);
//     },1000)
//     }

// #2.5 function to empty an array
function emptyArray(arr){
    let j = arr.length
    for(let i=0; i<j; i++){
        arr.pop()
    }
}

// 2.8 function to reset all variables when game ends
function gameEnded(){
    heading.innerText ="GAME OVER"
    wrongAudio.play()
    userScore=0;
    score.innerText=0;
    emptyArray(currGameList)
    emptyArray(currentLevelList);
    nextColorIndex =0;
} 

//#3 function to accept and test users input
function userInputCheck(){
    console.log('user input check just ran')
    
    if(currentChoise === currGameList[nextColorIndex]){
        console.log('good job')
        nextColorIndex++
        console.log(`nextcolorindex is:${nextColorIndex}`)
        console.log('')
        //if statement should run when level is complete
        //and a new color is added to the current game list
        if (nextColorIndex === currGameList.length){
            console.log('randColor, playList and emptyArray on the currentLevelList are about to run in userINputCheck becase level was completed')
            userScore++
            score.innerText=userScore
            console.log('new score is',score)
            //current level list array sould now be made empty
            emptyArray(currentLevelList);
            randColor();
            playList(currGameList);
            nextColorIndex=0;
            //time mechanizim goes here
        }
    }else{
        console.log('sorry game over start again');
        console.log('')
        gameOver =true;
        }
}

//game code
startGame.addEventListener('click',function(){
    heading.innerText ="Simon"
    gameOver = false;
    console.log('start game button was clicked')
    console.log('gameOver = false')
    // score.innerText ='SCORE 0';
    
    //add a color to list
    if (currGameList.length === 0){
        randColor()
        playList(currGameList)
    }else{
        console.log('cant do that in middle of game')
        console.log('to end game you must click end game button')
    }
    
})

//need to add code to detect user idle to make game over if user 
//doesnt respond in a given period of time.  found good article 
//and bookmarked it.  leave this for last its not so simple





   




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    




