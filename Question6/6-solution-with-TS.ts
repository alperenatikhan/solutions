class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    console.log(`Hi, my name is ${this.firstName} ${this.lastName}`);
  }
}

class Guest extends Person {
  fullName: string;

  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
    this.fullName = `${firstName} ${lastName}`;
  }
}
class Employee extends Person {
  permissionLevel: string;

  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  //for logging the type of permission, I added a method
  /*
  displayPermission() {
    console.log(`My permission level is ${this.permissionLevel}`);
  }
*/
  welcomeGuest(guest) {
    if (this.permissionLevel == 'Extra Permission') {
      console.log(
        `Welcome ${guest.firstName} ${guest.lastName}. What can I do for you?`
      );
    } else {
      console.log(`Welcome ${guest.firstName} ${guest.lastName}`);
    }
  }
}

class Director extends Employee {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
    this.permissionLevel = 'Extra Permission';
  }
}

class Clerk extends Employee {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
    this.permissionLevel = 'Standard Permission';
  }
}

var clerk = new Clerk('Lionel', 'Messi');
var director = new Director('Jan', 'Kowalski');
clerk.sayHello();
//clerk.displayPermission();

var guest1 = new Guest('Christiano', 'Ronaldo');

clerk.welcomeGuest(guest1);
director.sayHello();
//director.displayPermission();
director.welcomeGuest(guest1);

var employee = new Employee('Alperen', 'Atik');
employee.sayHello();
//employee.displayPermission();
employee.welcomeGuest(guest1);
