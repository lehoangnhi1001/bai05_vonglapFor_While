//Khai báo mảng các objects
var students = [
    {
      name : "Nhi",
      age : '22'
    },
    {
      name : "Quang",
      age : '23'
    },
    {
    name : "Phước",
    age : '19'
    } ]
    //in ra giá trị name trong mỗi object
    for(let i=0; i<students.length; i++){
      console.log(students[i].name);
      console.log(students[i].age);
    }