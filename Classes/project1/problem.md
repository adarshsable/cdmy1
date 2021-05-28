Build a Library <br>
Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.
<br>.
But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.<br>

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:
<br>
Book<br>
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).<br>
Getters: all properties have a getter<br>
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()<br>
Movie<br><br>
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)<br>
Getters: all properties have a getter<br>
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()<br>
CD<br>
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)<br>
Getters: all properties have a getter<br>
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()<br>
