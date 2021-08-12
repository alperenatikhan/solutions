class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    console.log(`Hi, my name is ${this.firstName} ${this.lastName}`);
  }
}

class Guest extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.fullName = `${firstName} ${lastName}`;
  }
}
class Employee extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  //For logging the "permission level" I added a method
  /*
  amIPermitted() {
    console.log(`My permission level is ${this.permissionLevel}`);
  }
  */
}

class Director extends Employee {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.permissionLevel = 'Extra Permission';
  }
}

class Clerk extends Employee {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.permissionLevel = 'Standard Permission';
  }
}

var clerk = new Clerk('Lionel', 'Messi');
var director = new Director('Jan', 'Kowalski');
clerk.sayHello();
//clerk.amIPermitted();

var guest1 = new Guest('Christiano', 'Ronaldo');

director.sayHello();
//director.amIPermitted();
