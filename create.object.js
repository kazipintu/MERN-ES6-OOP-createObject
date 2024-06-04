/*  ~ OOP CONCEPTS ~  */


// using: Object Literal //

const student = { name: "Sakib Al Hasan", role: "Inaugurate Showroom" }
console.log(student);


// using: Constructor //

const person = new Object()
console.log(person);

const man1 = Object.create(student);
console.log(man1);


{
  const student = { name: "Sakib Al Hasan", role: "Inaugurate Showroom" }
  console.log(student);
  const man = Object.create(student)
  console.log(man.role);
}


{
  const student = { name: "Sakib Al Hasan", role: "Inaugurate Showroom" }
  console.log(student);
  const man = Object.create(null)
  console.log(man.role);
}


{
  const student = { name: "Sakib Al Hasan", role: "Inaugurate Showroom" }
  console.log(student);
  const man = Object.create(student)
  console.log(man.name);
}


// using: Class //

{
  class People {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  const man = new People("David", 34)
  console.log(man);
  const newMan = new People('John', 25)
  console.log(newMan);
  const lady = new People('mary')
  console.log(lady);
  const newLady = new People(' ', 64)
  console.log(newLady);
  const kid = new People('', 12)
  console.log(kid);
}


{ // any function is called inside an object as a property is called "method" 
  const employee = {
    id: 103,
    name: "Masud",
    salary: 5000,
    role: 'supervisor',
    isReach: false,
    skill: ['english', 'billing', 'tendering'],
    bestFriend: { name: 'Kuddus', dept: 'planning' },
    workPerformance: function () {
      console.log(this.name, "is an workoholic man");
    },

    givingTreat: function (expense) {
      console.log(expense);
      this.salary = this.salary - expense;
      return this.salary;
    },

  }
  employee.workPerformance()
  const treat = employee.givingTreat(2000)
  console.log(treat);
}


{
  const employee = {
    id: 103,
    name: "Masud",
    salary: 5000,
    role: 'supervisor'
  }

  const key = Object.keys(employee);
  console.log(key);

  const value = Object.values(employee)
  console.log(value);

  const entryKeyValue = Object.entries(employee)
  console.log(entryKeyValue);

  // to change/edit any property from object
  employee.salary = 9000;
  console.log(employee.salary);
  console.log(employee);

  // to delete any property from object
  delete student.id
  console.log(student);
  console.log(student.id);  // undefined

  // to fix object
  Object.freeze(employee)  // NOT to delete or modify
  Object.seal(employee)    // NOT to delete but allow to modify
}

{
  // LOOP in an Object for-in loop

  const employee = {
    id: 103,
    name: "Masud",
    salary: 5000,
    role: 'supervisor',
    isReach: false,
  }

  for (const properties in employee) {
    
    console.log(properties);
    
  }

}