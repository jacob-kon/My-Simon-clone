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