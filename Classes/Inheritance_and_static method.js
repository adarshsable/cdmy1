class HospitalEmployee {                  // parent class
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  static generatePassword(){                        // static method--- call with class.method_name refer to line 47
    return Math.floor(Math.random()*10000);
  }
}

class Nurse extends HospitalEmployee {             // inheritance  // child class
  constructor(name, certifications) {
    super(name);                                     // inherits all methods and getter and properties
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']); // new instance of Nurse class 
nurseOlynyk.takeVacationDays(5);

console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);


console.log(HospitalEmployee.generatePassword());
