class Media{
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  } // get title

  get isCheckedOut(){
    return this._isCheckedOut;
  } //get isCheckedOut

  get ratings(){
    return this._ratings;
  } //get ratings

  set isCheckedOut(isCheckedOut){
    this._isCheckedOut = isCheckedOut;
  }

getAverageRating(){
let reducer = (currentSum, rating) => currentSum + rating;
const sum  = this._ratings.reduce(reducer);
let avg = sum/(this._ratings.length);
return avg;
}
toggleCheckedOutStatus(){
  if(this._isCheckedOut==true){
    this._isCheckedOut=false;
      }
   else{
          this._isCheckedOut=true;
      }
} //toggle


addRating(rating){
  this._ratings.push(rating);
}




} // Media

class Book extends Media{
  constructor(author, title, pages){
    super(title);
     this._author = author;
     this._pages = pages;
  }
  get author(){
    return this._author;
  } //get auithor;

  get pages(){
    return this._pages;
  } // get pages 

}  // Book

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());



class Movie extends Media{
  constructor(director, title, runTime){
    super(title)
    this._director = director;
    this._runTime = runTime;
  }

  get director(){
    return this._director;
  } //get director;

  get runtime(){
    return this._runTime;
  } // get runTime

} // Movie


const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(1);
console.log(speed.getAverageRating());



class CD extends Media{
  constructor(title, artist, songs){
    super(title)
    this._artist =  artist;
    this._songs = songs;
  }
  get artist(){
    return this._artist;
  } //get artist;

  get songs(){
    return this._songs;
  } // get songs
} // CD
