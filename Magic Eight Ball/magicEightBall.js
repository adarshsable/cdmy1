let userName = '';
userName ? console.log(`Hello, ${userName}! `) : console.log('Hello!');

const userQuestion = 'Will I become a warewolf tonight?';
console.log(`The user asked: ${userQuestion}`);

let randomNumber;
randomNumber = Math.floor(Math.random() *8);

let eightBall ='';

switch(randomNumber){
  case 0:
  eightBall = 'It is certain';
  break;
   case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'It is decidedly so';
  break;
  case 5:
  eightBall = 'Do not count on it';
  break;
  case 6:
  eightBall = 'My sources say no';
  break;
  case 7:
  eightBall = 'Do not count on it';
  break;
 default :
  eightBall = 'Signs point to yes';
  break;

}
console.log(eightBall);
