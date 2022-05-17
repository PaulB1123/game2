window.addEventListener("load", openPage);

hideScreens();

let lives;
let points;
let timeLeft;

let mySound = document.querySelector("#mysound");
let bgMusic = document.querySelector("#bgmusic");
let bgMusic2 = document.querySelector("#bgmusic2");
let alien_chicken_sound = document.querySelector("#alien_chicken_sound");
let good_chicken_sound = document.querySelector("#good_chicken_sound");

function openPage() {
  document.querySelector("#intro_page").classList.remove("hidden");
  document.querySelector("#intro_page").addEventListener("click", start);
}

function start() {
  console.log("this is following");
  document.querySelector("#intro_page").classList.add("hidden");
  document.querySelector("#background").classList.add("hidden");
  document.querySelector("#game").classList.remove("hidden");
  document.querySelector("#title_screen").classList.remove("hidden");

  document.querySelector("#how_to_play").addEventListener("click", playButtonSound);
  document.querySelector("#play_button").addEventListener("click", playButtonSound);
  document.querySelector("#settings_button").addEventListener("click", playButtonSound);
  document.querySelector("#music").addEventListener("click", playButtonSound);
  document.querySelector("#music").classList.add("sound_button");

  // Create eventListeners on screens
  playbgSound();
  bgMusic.addEventListener("ended", playbgSound);

  playbgSound2();
  bgMusic2.addEventListener("ended", playbgSound2);

  document.querySelector("#music").addEventListener("click", muteMusic);

  document.querySelector("#music").addEventListener("play", playSound);
  document.querySelector("#how_to_play").addEventListener("click", gameInstructions);
  document.querySelector("#play_button").addEventListener("click", startGame);
}

function playSound() {
  console.log("Play song");
  document.querySelector("#mysound").currentTime = 0;
  document.querySelector("#mysound").play();
}

function playButtonSound() {
  mySound.play();
}

function gameInstructions() {
  // Hide title screen and show instructions
  document.querySelector("#play_button2").addEventListener("click", playButtonSound);
  document.querySelector("#settings_button2").addEventListener("click", playButtonSound);
  document.querySelector("#music2").addEventListener("click", playButtonSound);
  document.querySelector("#music2").classList.add("sound_button2");
  document.querySelector("#music2").addEventListener("click", muteMusic2);
  document.querySelector("#title_screen").classList.add("hidden");
  document.querySelector("#instructions").classList.remove("hidden");
  document.querySelector("#play_button2").addEventListener("click", startGame);
}

function startGame() {
  console.log("start");
  document.querySelector("#title_screen").classList.add("hidden");
  document.querySelector("#instructions").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  document.querySelector("#game_background").classList.remove("hidden");
  document.querySelector("#game_ui").classList.remove("hidden");
  // Reset lives and points
  lives = 3;
  points = 0;

  if (lives === 3) {
    document.querySelector("#current_lives").classList.add("three_lives");
  }

  console.log("At gamestart: lives:" + lives + "/points:" + points);
  // Print lives & points values in UI
  document.querySelector("#current_points").textContent = points;

  //Adding sound for the backgroundmusic
  document.querySelector("#music3").classList.add("music_for_the_game");
  document.querySelector("#music3").addEventListener("click", playButtonSound);
  document.querySelector("#music3").addEventListener("click", muteMusic3);

  //Adding sound to the buttons of the game
  // document.querySelector("#restart_button").addEventListener("click", playButtonSound);
  document.querySelector("#Settings_for_the_game").addEventListener("click", playButtonSound);

  //Adding sound to the buttons of game over
  // document.querySelector("#sound_button3").addEventListener("click", playButtonSound);
  // document.querySelector("#no_sound_button3").addEventListener("click", playButtonSound);
  // document.querySelector("#settings_button3").addEventListener("click", playButtonSound);
  document.querySelector("#try_again").addEventListener("click", playButtonSound);

  //Adding sound to the buttons of level complete

  // document.querySelector("#sound_button4").addEventListener("click", playButtonSound);
  // document.querySelector("#no_sound_button4").addEventListener("click", playButtonSound);
  // document.querySelector("#settings_button4").addEventListener("click", playButtonSound);
  document.querySelector("#play_button3").addEventListener("click", playButtonSound);

  // Adding positions and movements for good chicken
  document.querySelector("#g_container1").classList.add("position1");
  document.querySelector("#g_container2").classList.add("position2");
  document.querySelector("#g_container3").classList.add("position3");
  document.querySelector("#g_container4").classList.add("position7");
  document.querySelector("#g_container5").classList.add("position8");
  document.querySelector("#g_container1").classList.add("moveDown1");
  document.querySelector("#g_container2").classList.add("moveDown2");
  document.querySelector("#g_container3").classList.add("moveDown3");
  document.querySelector("#g_container4").classList.add("moveDown7");
  document.querySelector("#g_container5").classList.add("moveDown8");

  // Adding alien chicken
  document.querySelector("#a_container1").classList.add("position4");
  document.querySelector("#a_container2").classList.add("position5");
  document.querySelector("#a_container3").classList.add("position6");
  document.querySelector("#a_container1").classList.add("moveDown4");
  document.querySelector("#a_container2").classList.add("moveDown5");
  document.querySelector("#a_container3").classList.add("moveDown6");

  // Adding eventlisteners (clicks) alien chicken
  document.querySelector("#a_container1").addEventListener("click", clickAlienChicken);
  document.querySelector("#a_container2").addEventListener("click", clickAlienChicken);
  document.querySelector("#a_container3").addEventListener("click", clickAlienChicken);
  document.querySelector("#a_container1").addEventListener("click", playSoundAlienChicken);
  document.querySelector("#a_container2").addEventListener("click", playSoundAlienChicken);
  document.querySelector("#a_container3").addEventListener("click", playSoundAlienChicken);
  // Adding for good chicken
  document.querySelector("#g_container1").addEventListener("click", clickGoodChicken);
  document.querySelector("#g_container2").addEventListener("click", clickGoodChicken);
  document.querySelector("#g_container3").addEventListener("click", clickGoodChicken);
  document.querySelector("#g_container4").addEventListener("click", clickGoodChicken);
  document.querySelector("#g_container5").addEventListener("click", clickGoodChicken);
  document.querySelector("#g_container1").addEventListener("click", playSoundGoodChicken);
  document.querySelector("#g_container2").addEventListener("click", playSoundGoodChicken);
  document.querySelector("#g_container3").addEventListener("click", playSoundGoodChicken);
  document.querySelector("#g_container4").addEventListener("click", playSoundGoodChicken);
  document.querySelector("#g_container5").addEventListener("click", playSoundGoodChicken);

  // animationiteration eve
  document.querySelector("#a_container1").addEventListener("animationiteration", restartCon);
  document.querySelector("#a_container2").addEventListener("animationiteration", restartCon);
  document.querySelector("#a_container3").addEventListener("animationiteration", restartCon);
  document.querySelector("#g_container1").addEventListener("animationiteration", restartCon);
  document.querySelector("#g_container2").addEventListener("animationiteration", restartCon);
  document.querySelector("#g_container3").addEventListener("animationiteration", restartCon);
  document.querySelector("#g_container4").addEventListener("animationiteration", restartCon);
  document.querySelector("#g_container5").addEventListener("animationiteration", restartCon);

  document.querySelector("#time_sprite").classList.add("time");
  document.querySelector("#time_sprite").addEventListener("animationend", gameOver);
}

function playSound2() {
  console.log("Play song");
  document.querySelector("#mysound2").currentTime = 0;
  document.querySelector("#mysound2").play();
}

function clickAlienChicken() {
  this.removeEventListener("click", clickAlienChicken);
  this.classList.add("paused");
  this.firstElementChild.classList.toggle("rotate");
  lives--;
  if (lives === 2) {
    document.querySelector("#current_lives").classList.add("two_lives");
  }

  if (lives === 1) {
    document.querySelector("#current_lives").classList.add("one_life");
  }
  this.firstElementChild.addEventListener("animationend", restartSpr1);
  if (lives === 0) {
    document.querySelector("#current_lives").classList.value = "";
    gameOver();
  }
  this.classList.remove("paused");
}

function clickGoodChicken() {
  this.removeEventListener("click", clickGoodChicken);
  this.classList.add("paused");
  this.firstElementChild.classList.toggle("rotate");
  points += 100;
  document.querySelector("#current_points").textContent = points;
  this.firstElementChild.addEventListener("animationend", restartSpr2);
  if (points === 500) {
    gameOver();
  }
  this.classList.remove("paused");
}

function playSoundAlienChicken() {
  alien_chicken_sound.currentTime = 0;
  alien_chicken_sound.play();
}

function playSoundGoodChicken() {
  good_chicken_sound.currentTime = 0;
  good_chicken_sound.play();
}

function restartCon() {
  console.log("restartCon");
  console.log(this);
  this.classList.value = "";
  this.firstElementChild.classList = "";

  // to jump a frame
  this.offsetHeight;

  // randomNumber()
  let rndPos = randomNumber(13);
  let rndMov = randomNumber(13);
  console.log("Pos: " + rndPos + " - Mov: " + rndMov);

  this.classList.add("moveDown" + rndMov);
  this.classList.add("position" + rndPos);
  this.addEventListener("click", clickAlienChicken);
}

function restartSpr1() {
  console.log("restartSpr1");
  console.log(this);
  this.parentElement.classList.value = "";
  this.classList.value = "";

  // to jump a frame
  this.offsetHeight;

  // randomNumber()
  let rndPos = randomNumber(13);
  let rndMov = randomNumber(13);
  console.log("Pos: " + rndPos + " - Mov: " + rndMov);

  this.parentElement.classList.add("moveDown" + rndMov);
  this.parentElement.classList.add("position" + rndPos);
  this.parentElement.addEventListener("click", clickAlienChicken);
}

function restartSpr2() {
  console.log("restartSpr2");
  console.log(this);
  this.parentElement.classList.value = "";
  this.classList.value = "";

  this.offsetHeight;

  let rndPos = randomNumber(13);
  let rndMov = randomNumber(13);
  console.log("Pos: " + rndPos + " - Mov: " + rndMov);

  this.parentElement.classList.add("moveDown" + rndMov);
  this.parentElement.classList.add("position" + rndPos);
  this.parentElement.addEventListener("click", clickGoodChicken);
}

function randomNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}

function gameOver() {
  console.log("gameOver");

  //Sound for game over screen
  document.querySelector("#music4").classList.add("sound_button3");
  document.querySelector("#music4").addEventListener("click", playButtonSound);
  document.querySelector("#music4").addEventListener("click", muteMusic4);

  document.querySelector("#music5").classList.add("sound_button4");
  document.querySelector("#music5").addEventListener("click", playButtonSound);
  document.querySelector("#music5").addEventListener("click", muteMusic5);

  // Stop all animations
  document.querySelector("#current_lives").classList.value = "";
  document.querySelector("#time_sprite").classList.value = "";
  document.querySelector("#a_container1").classList.value = "";
  document.querySelector("#a_container2").classList.value = "";
  document.querySelector("#a_container3").classList.value = "";
  document.querySelector("#g_container1").classList.value = "";
  document.querySelector("#g_container2").classList.value = "";
  document.querySelector("#g_container3").classList.value = "";
  document.querySelector("#g_container4").classList.value = "";
  document.querySelector("#g_container5").classList.value = "";
  // Remove eventlisteners on sprites
  document.querySelector("#a_container1").removeEventListener("click", clickAlienChicken);
  document.querySelector("#a_container2").removeEventListener("click", clickAlienChicken);
  document.querySelector("#a_container3").removeEventListener("click", clickAlienChicken);
  document.querySelector("#g_container1").removeEventListener("click", clickAlienChicken);
  document.querySelector("#g_container2").removeEventListener("click", clickAlienChicken);
  document.querySelector("#g_container3").removeEventListener("click", clickAlienChicken);
  document.querySelector("#g_container4").removeEventListener("click", clickAlienChicken);
  document.querySelector("#g_container5").removeEventListener("click", clickAlienChicken);
  // Remove eventlisteners on sprites
  document.querySelector("#a_chicken1").removeEventListener("animationend", restartSpr1);
  document.querySelector("#a_chicken2").removeEventListener("animationend", restartSpr1);
  document.querySelector("#a_chicken3").removeEventListener("animationend", restartSpr1);
  document.querySelector("#g_chicken1").removeEventListener("animationend", restartSpr2);
  document.querySelector("#g_chicken2").removeEventListener("animationend", restartSpr2);
  document.querySelector("#g_chicken3").removeEventListener("animationend", restartSpr2);
  document.querySelector("#g_chicken4").removeEventListener("animationend", restartSpr2);
  document.querySelector("#g_chicken5").removeEventListener("animationend", restartSpr2);

  // Show gameOver screen: Either you lost or you won
  if (lives === 0 || points < 500) {
    document.querySelector("#game_ui").classList.add("hidden");
    document.querySelector("#game_background").classList.add("hidden");
    document.querySelector("#game_over").classList.remove("hidden");
    document.querySelector("#try_again").addEventListener("click", startGame);
  } else {
    document.querySelector("#game_ui").classList.add("hidden");
    document.querySelector("#game_background").classList.add("hidden");
    document.querySelector("#level_complete").classList.remove("hidden");
    document.querySelector("#play_button3").addEventListener("click", startGame);
  }
}

function playbgSound() {
  bgMusic.play();
}

function playbgSound2() {
  bgMusic.play();
}

function muteMusic() {
  console.log("muteMusic");

  if (bgMusic.muted === false) {
    document.querySelector("#music").classList.add("no_sound_button");
    bgMusic.muted = true;
  } else {
    bgMusic.muted = false;
    document.querySelector("#music").classList.remove("no_sound_button");
  }
}

function muteMusic2() {
  console.log("muteMusic2");

  if (bgMusic.muted === false) {
    document.querySelector("#music2").classList.add("no_sound_button2");
    bgMusic.muted = true;
  } else {
    bgMusic.muted = false;
    document.querySelector("#music2").classList.remove("no_sound_button2");
  }
}

function muteMusic3() {
  console.log("muteMusic3");

  if (bgMusic.muted === false) {
    document.querySelector("#music3").classList.add("no_music_for_the_game");
    bgMusic.muted = true;
  } else {
    bgMusic.muted = false;
    document.querySelector("#music3").classList.remove("no_music_for_the_game");
  }
}

function muteMusic4() {
  console.log("muteMusic4");

  if (bgMusic.muted === false) {
    document.querySelector("#music4").classList.add("no_sound_button3");
    bgMusic.muted = true;
  } else {
    bgMusic.muted = false;
    document.querySelector("#music4").classList.remove("no_sound_button3");
  }
}

function muteMusic5() {
  console.log("muteMusic5");

  if (bgMusic.muted === false) {
    document.querySelector("#music5").classList.add("no_sound_button4");
    bgMusic.muted = true;
  } else {
    bgMusic.muted = false;
    document.querySelector("#music5").classList.remove("no_sound_button4");
  }
}

function hideScreens() {
  // Adding the "hidden" class to all screens and thereby making them invisible
  document.querySelector("#title_screen").classList.add("hidden");
  document.querySelector("#instructions").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  document.querySelector("#game_background").classList.add("hidden");
  document.querySelector("#game_ui").classList.add("hidden");
  document.querySelector("#game").classList.add("hidden");
  document.querySelector("#intro_page").classList.add("hidden");

  console.log("all the classes have been added");
}
