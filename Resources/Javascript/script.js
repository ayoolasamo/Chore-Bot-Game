let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let currentPlaying=true;

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let numClosedDoors =3;
let openDoor1;
let openDoor2;
let openDoor3;

const isBot = (door) => {
    if(door.src === botDoorPath) {
      return true;

    } else {
      return false;
  }
}

const isClicked = (door) => {
    
    if (door.src === closedDoorPath) {
      return false;
    } else {
      return true;
    }
  }

const playDoor =(door) =>{
    numClosedDoors--;
    if   (numClosedDoors === 0){
        gameOver('win');
    }
    else if (isBot(door)) {
        gameOver('lose');
      }
}

const randomChoreDoorGenerator =()=>{
    var choreDoor= Math.floor(Math.random()*numClosedDoors);
    if(choreDoor === 0){
        openDoor1 = botDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = beachDoorPath;
    }
    else if (choreDoor === 1){   
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } 
    else{
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
}

doorImage1.onclick = () => {
    if(currentPlaying && !isClicked(doorImage1)) {
        
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}



doorImage2.onclick=()=>{
    if(currentPlaying && !isClicked(doorImage2)) {
       
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
      }
}

doorImage3.onclick=()=>{
    if(currentPlaying && !isClicked(doorImage3)) {
        
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}   
startButton.onclick =() =>{
    if(currentPlaying === false) {
        startRound();
    }
}
const startRound =()=>{
    numClosedDoors = 3;
    doorImage1.src =closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src =closedDoorPath;
    startButton.innerHTML ='Good Luck!';
    currentPlaying =true;
    randomChoreDoorGenerator();

}


const gameOver=(status)=> {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    }
    else {
        startButton.innerHTML = 'Game over! Play again?'
      }
      currentPlaying =false;
}
startRound();