//Variables for the 3 doors

const door1 = 1;
const door2 = 2;
const door3 = 3;

//Function for picking which door will have prize
function randomN(max) {
    return Math.floor((Math.random() * max) + 1);
  }

//For loop to see random door selection 10 times
for (i = 0; i < 10; i++) {
    
//Checking to see if door 1 is prize door

if (randomN(3) == door1) {

    console.log("X O O");
} 

else if (randomN(3) == door2) {
    console.log("O X O");
}

else {
    console.log("O O X");
}

}