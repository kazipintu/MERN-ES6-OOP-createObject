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