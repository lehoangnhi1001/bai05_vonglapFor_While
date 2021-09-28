//Khai báo mảng các objects
var students = [
    {
    name : "Nhi",
    age : "22"
    },
    {
    name : "Quang",
    age : "23"
    },
    {
    name : "Phước",
    age : "19"
    } ]
    //in ra giá trị name trong mỗi object
    for(let student of students){
    for(let key in student){
    console.log(student.name);
     console.log(student.age);
    }
    }