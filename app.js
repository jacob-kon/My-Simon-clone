//********game variables*********
let currGameList =[]; // array of the current game color pattern 
let gameLevel =0; // every time user guesses pattern =>goes up 1
let gameOver = true;
let levelComplete = false;
let currentChoise = 'none';
let currentLevelList =[];
let nextColorIndex =0;
let userScore =0;

//game sounds
let redAudio = new Audio('sounds/red.mp3')
let blueAudio = new Audio('sounds/blue.mp3')
let yellowAudio = new Audio('sounds/yellow.mp3')
let greenAudio = new Audio('sounds/green.mp3')
let wrongAudio = new Audio('sounds/wrong.mp3')
let endGame =document.querySelector('.endGame')
let startGame =document.querySelector(".startGame")
let scoreHeading = document.querySelector('.scoreHeading');
let heading = document.querySelector('.heading')

// selectors for the game buttons
let red = document.querySelector(".red")
let blue = document.querySelector(".blue")
let yellow = document.querySelector(".yellow")
let green = document.querySelector(".green")

//event listeners for color clicks
red.addEventListener('click',function(){
     if (currGameList.length>currentLevelList.length && gameOver=== false){
        red.classList.toggle('redBright');
            setTimeout(function(){
                red.classList.toggle('redBright');
            },400)
        currentChoise = 'red';
        currentLevelList.push('red')
        userInputCheck();
        if(gameOver===true){
           gameEnded()
        }else{
            redAudio.play();
        }
    }
})
blue.addEventListener('click',function(){
    if (currGameList.length>currentLevelList.length && gameOver=== false){
        blue.classList.toggle('blueBright');
            setTimeout(function(){
                blue.classList.toggle('blueBright');
            },400)
        currentChoise = 'blue';
        currentLevelList.push('blue')
        userInputCheck();
        if(gameOver===true){
            gameEnded()
        }else{
            blueAudio.play();
        }
    }
})
yellow.addEventListener('click',function(){
    if (currGameList.length>currentLevelList.length && gameOver=== false){
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
        green.classList.toggle('greenBright');
            setTimeout(function(){
                green.classList.toggle('greenBright');
            },400)
        currentChoise = 'green';
        currentLevelList.push('green')
        userInputCheck();
        if(gameOver===true){
            gameEnded()
        }else{
            greenAudio.play();
        }
    }
})

//event listner to end game at any time
endGame.addEventListener('click',function(){
    if(gameOver === false){
        gameOver=true;
        gameEnded()
    }
})
//1.function to choose a random color and insert it to the currGameList
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

//2.function for light display at end of game
function lightDisplay(){
            red.classList.toggle('redBright');
            setTimeout(function(){
                red.classList.toggle('redBright')
                blue.classList.toggle('blueBright');
                setTimeout(function(){
                    blue.classList.toggle('blueBright');
                    yellow.classList.toggle('yellowBright');
                    setTimeout(function(){
                        yellow.classList.toggle('yellowBright')
                        green.classList.toggle('greenBright');
                        setTimeout(function(){
                            green.classList.toggle('greenBright');
                        },100)
                    },100)
                },100)
            },100)
           
}

//3 function to play the curr level back to user
function playList(arr){
    setTimeout(()=>{
    },1000)
    let c=0;
    let soundSpeed = 1 // plays sound at normal speed
    let lightSpeed = 400 // lights up for .4 of a second
    let intervalSpeed =1000 //interval between colors in 1 sec
    if (userScore < 3){
        soundSpeed = 1 
        lightSpeed = 400 
        intervalSpeed =1000 
    }else if(userScore >=3 && userScore < 8){
        soundSpeed = 1.3 
        lightSpeed = 250 
        intervalSpeed =700 
    }else if (userScore >= 8 && userScore <12){
        soundSpeed = 1.4 
        lightSpeed = 200 
        intervalSpeed =550 
    }else{
        soundSpeed = 1.7 
        lightSpeed = 160 
        intervalSpeed =400 
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

// 4 function to empty an array
function emptyArray(arr){
    let j = arr.length
    for(let i=0; i<j; i++){
        arr.pop()
    }
}

// 5 function to reset all variables when game ends
function gameEnded(){
    heading.innerText ="GAME OVER"
    wrongAudio.play()
    lightDisplay()
    scoreHeading.innerText= `Score: ${userScore}`;
    userScore=0;
    emptyArray(currGameList)
    emptyArray(currentLevelList);
    nextColorIndex =0;
} 

//6 function to accept and test users input
function userInputCheck(){
    if(currentChoise === currGameList[nextColorIndex]){
        nextColorIndex++
        if (nextColorIndex === currGameList.length){
            userScore++
            scoreHeading.innerText = `Score: ${userScore}`
            emptyArray(currentLevelList);
            randColor();
            playList(currGameList);
            nextColorIndex=0;
        }
    }else{
        gameOver =true;
        }
}

//game code
startGame.addEventListener('click',function(){
    scoreHeading.innerText= `Score: ${userScore}`;
    heading.innerText ="Follow Me"
    gameOver = false;
    console.log('t',currGameList.length)
    if (currGameList.length === 0){
        randColor()
        playList(currGameList)
    }else{
        setTimeout(()=>{
            heading.innerText ="Follow Me"
        },4000)
        heading.innerText ="PLEASE END GAME BEFORE STARTING A NEW ONE!"
    }
    
})






   




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    




