userChoice="bomb";
const getUserChoice = userChoice => {
  // console.log(userChoice);
    userChoice=userChoice.toLowerCase();
if(userChoice=="rock" ||  userChoice=="paper" || userChoice=="scissors" || userChoice=="bomb"){
  return userChoice
}
else {
  console.log("Please choose right choice");
}

}
function getComputerChoice (){
  randomNumber=Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0: return "rock";break;
    case 1: return "paper";break;
    case 2: return "scissors";break;
  }
}

function determineWinner(user,computer){
if(user == computer){
 return "Game was a tie";}
if (user =="rock"){
   if(computer=="paper"){
     return "Computer Won"
   }
   else{
     return "User Won"
   }
}
if (user =="paper"){
   if(computer=="scissors"){
     return "Computer Won"
   }
   else{
     return "User Won"
   }
}
if (user =="scissors"){
   if(computer=="rock"){
     return "Computer Won"
   }
   else{
     return "User Won"
   }
}
if (user ="bomb"){
  return "User Won"
}

}
function playgame(){
computer=getComputerChoice();
user=getUserChoice(userChoice);
console.log(`User choice ${user}`)
console.log(`Computer choice ${computer}`)
console.log(determineWinner(user,computer));
}
playgame()
// console.log(determineWinner())
