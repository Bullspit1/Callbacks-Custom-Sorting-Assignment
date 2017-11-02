// - sort the array first by the >name< ascending alphabetically
// - >If< the names are equal sort by descending age

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var res = students.sort(function(a, b) {
  // console.log(a.name);
  // console.log(b.name);
  if (a.name === b.name) {
    return b.age - a.age;
  } else if(a.name < b.name) {
    return - 1;
  } else if(a.name > b.name) {
    return 1;
  }
})

console.log(res);

// console.log(students["name"].sort());
 // var arr = []
 //  for (i = 0; i < students.length; i++) {
 //    var listOfStudents = students[i].name;
 //    console.log(listOfStudents);
 //    arr.push(listOfStudents);
 //    if (listOfStudents === students.name) {
 //      console.log(true)
 //    }else{
 //      console.log(false)}
 //    }
 //  console.log(arr.sort());

// students.sort(function(a, b){
//   console.log(a.name.sort());
// });

// students.sort(function(a, b){ // compares a and b
//   // console.log(a)
//   console.log(a.name);

// // var n = students[0].id[2];
// // console.log(n);
// return a.name;
// });

// num.sort();