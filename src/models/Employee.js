class Employee {
  constructor(id, name, position, salary) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  // Getter methods
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }

  getSalary() {
    return this.salary;
  }

  // Setter methods
  setName(newName) {
    this.name = newName;
  }

  setPosition(newPosition) {
    this.position = newPosition;
  }

  setSalary(newSalary) {
    this.salary = newSalary;
  }
}
 module.exports = Employee;