function myFunction() {
    document.getElementById("big-canvas").style.visibility = "hidden";
}




// click to Start the GAME!
function startGame(){
  document.getElementById("big-canvas").style.display = "flex";
  document.getElementById("main-text").style.display = "none";
  // document.getElementById("main-text").id = "disapppeeeeear";

  if (gameStatus === 'paused'){
      // document.addEventListener("click", startGame, true);
      window.requestAnimationFrame(animation)
      gameStatus = 'game-on';
      setInterval(updateBlocks, 2000)
      // document.location.reload();
  } else if (gameStatus === 'game-off'){
    setInterval(updateBlocks, 1000)
  }
}
document.addEventListener("click", startGame, true);

function StartButton(){
  if (gameStatus === 'game-off'){
    gameStatus = 'game-on';
    animation();
    
  } else if (gameStatus === 'paused'){
    gameStatus = 'game-on'
    animation();
  } else if (gameStatus = 'game-over'){
    document.addEventListener("click", restart, true);
  }
    // else if (gameStatus === 'game-on'){
    // document.addEventListener("click", startGame, true);
    // restart()
  // }
}


