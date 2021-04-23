let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 22;

if(runnerAge >= 18 && registeredEarly == true){
  raceNumber += 1000;
}

if(runnerAge >= 18 && registeredEarly == true){
  console.log(`${raceNumber} will race at 9:30am.`);
}
else if(runnerAge < 18 ){
  console.log(`Youth registration ${raceNumber} run at  12:30 pm`);
}
