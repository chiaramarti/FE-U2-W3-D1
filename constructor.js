class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(anotherUser) {
    if (this.age < anotherUser.age) {
      return `${anotherUser.firstName} è più vecchio di ${this.firstName}.`;
    } else if (this.age > anotherUser.age) {
      return `${anotherUser.firstName} è più giovane di ${this.firstName}.`;
    } else {
      return `${anotherUser.firstName} ha la stessa età di ${this.firstName}.`;
    }
  }
}

x = new User("Mario", "Flamingo", 30, "Modena");
y = new User("Francesco", "Unicorn", 27, "Correggio");
z = new User("Saverio", "Carlino", 54, "Reggio Emilia");
console.log(x.compareAge(y));
console.log(y.compareAge(z));
console.log(z.compareAge(x));
