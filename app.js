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

//1.5 function to play the curr level back to user
function playList(arr){
    console.log(`the current game list is ${currGameList}`)
    let c=0;
    let interval = setInterval(function(){
        if (arr[c]==='red'){
            redAudio.play()
            red.classList.toggle('redBright');
            setTimeout(function(){
                red.classList.toggle('redBright');
            },400)
            
        }else if(arr[c]==='blue'){
            blueAudio.play();
            blue.classList.toggle('blueBright');
            setTimeout(function(){
                blue.classList.toggle('blueBright');
            },400)
        }else if(arr[c]==='yellow'){
            yellowAudio.play()
            yellow.classList.toggle('yellowBright');
            setTimeout(function(){
                yellow.classList.toggle('yellowBright');
            },400)
        }else if (arr[c]==='green'){
            greenAudio.play();
            green.classList.toggle('greenBright');
            setTimeout(function(){
                green.classList.toggle('greenBright');
            },400)
        }
        c++
        if (c=== arr.length)clearInterval(interval);
    },1000)
    }


    playList(currGameList)
//**************************************************************** */
//function for playing back the level to the user
// takes in an array of the current game list
// used promises to get sounds to work but i think call backs are
//simpler in this case
// let index = 0
// function colorPlayback(arr){
    
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if (currGameList[index]==="red"){
//             red.classList.toggle('redBright')
//             setTimeout(()=>{
//                 red.classList.toggle("redBright")
//             },800)
//             redAudio.play()
//             index++
//           }else if (currGameList[index]==="blue"){
//                 blue.classList.toggle('blueBright')
//                 setTimeout(()=>{
//                     blue.classList.toggle("blueBright")
//                 },800)
//                 blueAudio.play()
//                 index++
//           }else if (currGameList[index]==="green"){
//                 green.classList.toggle('greenBright')
//                 setTimeout(()=>{
//                     green.classList.toggle("greenBright")
//                 },800)
//                 greenAudio.play()
//                 index++
//           }else if (currGameList[index]==="yellow"){
//                 yellow.classList.toggle('yellowBright')
//                 setTimeout(()=>{
//                     yellow.classList.toggle("yellowBright")
//                 },800)
//                 yellowAudio.play()
//                 index++
//           }
//           resolve()
//         },1000)
//     })
// }
// colorPlayback()
//     .then(()=> colorPlayback()) 
//     .then(()=> colorPlayback())
//     .then(()=> colorPlayback())
//************************************************** */    
    




