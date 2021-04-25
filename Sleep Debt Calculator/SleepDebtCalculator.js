const getSleepHours = day =>{
  if(day==='monday'){
    return 8;
  }else if(day==='tuesday'){
    return 7;
  }
  else if(day==='wednesday'){
    return 8;
  }else if(day==='thursday'){
    return 7;
}
else if(day==='friday'){
    return 8;
  }else if(day==='saturday'){
    return 7;
    }
    else{
      return 7;
    }
};

const getActualSleepHours = () => {
  return getSleepHours('monday')+ getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
  
};

const getIdealSleepHours = () =>{
  const idealHours = 7;
  return idealHours*7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours===idealSleepHours ){
    console.log('The User got the perfect amount of sleep');

  }
  else if(actualSleepHours>idealSleepHours){
        console.log('The User got more sleep than needed');
  }
  else {
        console.log('The User should get some rest');
  }
};
calculateSleepDebt();

