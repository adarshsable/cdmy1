School Catalogue<br>
Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.
<br>
We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:
<br><br>
School<br>
Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)<br>
Getters: all properties have getters<br>
Setters: the numberOfStudents property has a setter<br>
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)<br><br><br>
Primary<br>
Includes everything in the School class, plus one additional property<br>
Properties: pickupPolicy (string)<br><br>
Middle<br>
Does not include any additional properties or methods<br><br>
High<br>
Includes everything in the School class, plus one additional property<br>
Properties: sportsTeams (array of strings)<br>
