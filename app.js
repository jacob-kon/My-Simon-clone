//********game variables*********
let currGameList =[]; // array of the current game color pattern 
let gameLevel =0; // every time user guesses entire pattern level goes up 1

//game sounds
let redAudio = new Audio('sounds/red.mp3')
let blueAudio = new Audio('sounds/blue.mp3')
let yellowAudio = new Audio('sounds/yellow.mp3')
let greenAudio = new Audio('sounds/green.mp3')
let wrongAudio = new Audio('sounds/wrong.mp3')


// selectors for the game buttons
let red = document.querySelector(".red")
let blue = document.querySelector(".blue")
let yellow = document.querySelector(".yellow")
let green = document.querySelector(".green")

//event listeners for color clicks
red.addEventListener('click',()=>{
    console.log('red was clicked')
    redAudio.play()
})
blue.addEventListener('click',()=>{
    console.log('blue was clicked')
    blueAudio.play()
})
yellow.addEventListener('click',()=>{
    console.log('yellow was clicked')
    yellowAudio.play()
})
green.addEventListener('click',()=>{
    console.log('green was clicked')
    greenAudio.play()
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


randColor()
randColor()
randColor()
randColor()
console.log(currGameList)

//function for playing back the level to the user
// takes in an array of the current game list
let index = 0
function colorPlayback(arr){
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log(index) 
          
          if (currGameList[index]==="red"){
            console.log('red')
            redAudio.play()
            index++
          }else if (currGameList[index]==="blue"){
                blueAudio.play()
                console.log('blue')
                index++
          }else if (currGameList[index]==="green"){
                greenAudio.play()
                console.log('green')
                index++
          }else if (currGameList[index]==="yellow"){
                yellowAudio.play()
                console.log('yellow')
                index++
          }
          
          resolve()
        },1000)
    })
}
colorPlayback()
    .then(()=> colorPlayback())
    .then(()=> colorPlayback())
    .then(()=> colorPlayback())
    
    




