const menu={
  _courses = {
   appetizers : [],
   mains : [],
   desserts : [],
   
  
 } ,// _courses
 get _courses(){
    return {
      appetizers: this.appetizers,
      mains : this.appetizers,
      desserts : this.desserts
      }
   } //courses
  addDishToCourse(courseName,dishName,dishPrice){
    const dish = {

    };
    this._course[courseName].push(dish);
 } ,//addToDishCourse

 getRandomDishFromCourse(courseName){
   const dishes =this._course[courseName];
   const randomIndex = Math.floor(Math.random()*dishes.length);
   return randomIndex;
 },

 generateRandomMeal(){
   const appetizer = menu.getRandomDishFromCourse('appetizers');
   const main = menu.getRandomDishFromCourse('mains');
   const dessert = menu.getRandomDishFromCourse('desserts');
   const totalPrice = appetizer.price + main.price + dessert.price;
   return `Your meal is ${appetizer.name}, ${main.name}, ... The price is $${totalPrice}.`
 },

};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);

let meal = menu.generateRandomMeal();
console.log(meal);
