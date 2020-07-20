registeredEarly=true;
 raceNumber = Math.floor(Math.random() * 1000);
runnersAge=21;
if(runnersAge>18 && registeredEarly){
  raceNumber+=1000;
}
if(registeredEarly && runnersAge>18){
  console.log(`${raceNumber} will run at 9:30 am`);
}
else if(!registeredEarly && runnersAge>18){
  console.log(`${raceNumber} will run at 11:00 am`);
}
else if (runnersAge<18){
  console.log(`${raceNumber} will run at 12:30 pm`);
}
else{
  console.log("Contact registration desk");
}
