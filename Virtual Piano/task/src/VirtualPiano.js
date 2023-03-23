
  let whitekeys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"];
  let blackkeys = ["KeyW", "KeyE", "KeyT", "KeyY", "KeyU"];

  document.addEventListener("keydown", function(event){
      if (whitekeys.includes(event.code)){
          console.log("The '" + event.key.toUpperCase() + "' was pressed." + " white_keys/" +event.key.toUpperCase()+ ".mp3")
          let audio = new Audio("white_keys/"+event.key.toUpperCase()+".mp3")
          audio.play()
      }
      else{
          console.log("Leer piano spelen!!")
      }
  })
  document.addEventListener("keydown", function(event){
      if (blackkeys.includes(event.code)){
          console.log("The '" + event.key.toUpperCase() + "' was pressed." + " black_keys/" +event.key.toUpperCase()+ ".mp3")
          let audio = new Audio("black_keys/"+event.key.toUpperCase()+".mp3")
          audio.play()
      }
      else{
          console.log("Leer piano spelen!!")
      }
  })

/**
document.addEventListener("keydown", function(event){
    if (event.code == "KeyA"){
        console.log("the 'A' key was pressed.")
        let audioA = new Audio("white_keys/A.mp3")
        audioA.play();
    }
    if (event.code == "KeyS"){
        console.log("the 'S' key was pressed.")
        let audioS = new Audio("white_keys/S.mp3")
        audioS.play();
    }
    if (event.code == "KeyD"){
        console.log("the 'D' key was pressed.")
        let audioD = new Audio("white_keys/D.mp3")
        audioD.play();
    }
    if (event.code == "KeyF"){
        console.log("the 'F' key was pressed.")
        let audioF = new Audio("white_keys/F.mp3")
        audioF.play();
    }
    if (event.code == "KeyG"){
        console.log("the 'G' key was pressed.")
        let audioG = new Audio("white_keys/G.mp3")
        audioG.play();
    }
    if (event.code == "KeyH"){
        console.log("the 'H' key was pressed.")
        let audioH = new Audio("white_keys/H.mp3")
        audioH.play();
    }
    if (event.code == "KeyJ"){
        console.log("the 'J' key was pressed.")
        let audioJ = new Audio("white_keys/J.mp3")
        audioJ.play();
    }
    else {
        console.log("Leer piano spelen!!")
    }
})
 */