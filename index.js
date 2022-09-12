//  import {myName,message} from "./second.js"
//  const age = myName("age")
//  console.log(age);
//  console.log(message)







// import { array } from "i/lib/util";
//

// console.log("welcome to tagline")
// const fruits =new Map()
// fruits.set("a",1)
// fruits.set("b",2)
// fruits.set("c",3)
// fruits.set("d",4)
// // fruits.delete("a")
// fruits.has("c")
// // console.log(fruits )
// const object = {fName:"John",lName:"patel",age:26}
// const arrays = [2,3,5,4,6,8]
//  var txt = "";
// for (const key in object) {
//     txt += object[key]+ " ";
// }
// console.log(txt);
// for (let values of arrays) {
//     values+=50
//     console.log(values)
// }
// const x = (a,b,c)=>
//    c = a + b

//   console.log(c)
// x(5,5)

// function display(some) {
//     document.getElementById("demo").innerHTML= some
// }
// function myCalculater(num1,num2) {
//     var sum = num1 + num2
//     // console.log(sum);
// }
//   const result = myCalculater(5,6)
//  console.log(result);

//  class myCar {
//      constructor(name,year)
//      {
//          this.name = name
//          this.year = year

//     }

//  }
//  let myCar1 = new myCar("ford",2014)
//  let myCar2 = new myCar("audi",2006)
//  console.log(myCar1);
//  console.log(myCar2)

// class studetails {
//     constructor(name,age,rollnum)
//     {
//         this.name = name
//         this.age = age
//         this.rollnum= rollnum
//     }
//     function () {

//     }
// }
// let std1 = new studetails("dipak",22,01)
// let std2 = new studetails("subhash",22,05)

// console.log(std1)
// console.log(std2)

// class employeeDetails{
//     constructor(empName,empage,bdate)
//     {
//         this.empName = empName
//         this.empage= empage
//         this.bdate = bdate
//     }
// }
// const empData1 = new employeeDetails("dipak", 21 , 28);
// const empData2 = new employeeDetails("shyam", 21 , 28);
// const empData3 = new employeeDetails("ritik", 21 , 28);
// const empData4 = new employeeDetails("tilak", 21 , 28);
// const empData6 = new employeeDetails("swapnil", 21 , 28);
// const empData =[]
// empData.push(empData1,empData2,empData3,empData4,empData6)
// console.log(empData);
//  companyDatails = {
//      name:'tagline',
//      loction:'sutat',
//      totalEmployee:'135'
//      }
// console.log(a)
// const a = 10
//  function name(params) {
//     var   a = "10"
//  }
//  console.log(a)

//     function sum(x,y,z){
// return x+y+z;

// }
// const numbers =[1,2,3];
// console.log(sum(...numbers))
// let pluseFive = (numb) => {
//   return numb + 2;
// };

// let f = pluseFive;
// console.log(pluseFive(5))
// let friends = ["dipak","raj","rutik","shyam",'pujesh']
// let numbers = [8,1,2,3,4,6,5,7,12]

// friends.toString()
// numbers.sort()
// friends.shift()
// // console.log(numbers.copyWithin(-2));
// const result = friends.filter(word => word.length >= 6);
// // console.log(result);
// const found = numbers.find(element => element > 1)
// console.log(found);



// function myDisplay(some) {
//   console.log(some)
// }
// let promise = new Promise(function(resolve, reject) {
//   // executor (the producing code, "singer")
//   let number = 5 
//   if (number == 5) {
//     resolve("ok")
//   }else{
//     reject("error")
//   }
//   setTimeout(()=>{
//   resolve("ohk")
//   })
// });
// promise.then(
//   function(value){myDisplay(value)},
 
//   function(error){myDisplay(error)},
//   )

//   function sayhi(){
//     console.log ('hello')
//   }
//   setTimeout(sayhi,5000);


//   function sayhiii( mesg,talk) {
//      console.log(mesg,talk);
//   }setTimeout(sayhiii,5000,"hello","how are you")

// setTimeout(() => console.log("World"));

// console.log("Hello");
// setTimeout(()=>{
//   console.log('dipak')
//   setTimeout(()=>{
//     console.log('hello')
//   },6000)
// },6000)
// let timeId = setInterval(() => {
//   console.log("hello how are you ? I'm dipak")
// }, 2000);
// setTimeout(() => {
//   clearInterval(timeId)
//   console.log('stop')
// }, 5000);
// function multiply(a, b = 1) {
//   return a * b;
// }

// console.log(multiply(5, 2));


// console.log(multiply(5));


// js object 
// let userData ={
//   name :"dipak",
//   age:"21"
// }
// let x = userData
// x.name="raju"
// console.log(x)
// console.log("name" in userData)
// console.log("age" in userData)
// console.log("subName" in userData)

// }
// userData.isAdmin = true;
// let key = prompt("what do you want to know  about the user ?",'name')
// alert(userData[key])
//  fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.apple );
// function getObjValue(name ,age){
// return{
//     name:name,
//     age:age
//   }
  
// }
// let user = getObjValue("john",30)
// console.log(user.name)
// console.log(user.age)
// let obj = {}
// obj.__proto__= 5
// console.log(obj.__proto__)
// let codes = {
//   "+49":"Germany",
//   "+41":"Switzerland",
//   "+44":"Great britain",
//   "+1":"usa"

// }
// for(let code in codes){
//   console.log(+code)
// }
// const StudentDtails = {}
// StudentDtails.name="john",
// StudentDtails.Surname = "patel"
// console.log(StudentDtails)
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// after the call

// function multiplyNumeric(menu) {
  
//   for (let key in menu) {
//      if (typeof menu[key] == 'number') {
//        menu[key] *= 2
//      }
//       console.log(menu[key])
//     }
// }
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ],
// }
// for (const i in myObj.cars) {
//   let x 
//   x += myObj.cars[i].name 
 
//   for (const j in  myObj.cars[i].models) {
//     x += myObj.cars[i].models[j]
//   }
//   console.log("\n",x)
  
// }
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };const str= JSON.stringify(person)
// console.log(str)
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "",
//   set lang(value) {
//     this.language = value;
//   }
// };
// person.lang = "english"
// console.log(person)
// function employeeDetails(fname,lname,age,basicSalary,gender){
//   this.firstName = fname;
//   this.lastname=lname;
//   this.age = age;
//   this.basicSal = basicSalary;
//   this.gender= gender
//   return
// }
//  let obj1 = new employeeDetails("dipak",'mahajan',21,12500,"male");
//  let obj2 = new employeeDetails("dipak",'mahajan',21,12500,"male");
//  let obj3 = new employeeDetails("dipak",'mahajan',21,12500,"male");
//  let obj4 = new employeeDetails("dipak",'mahajan',21,12500,"male");
//  let obj5 = new employeeDetails("dipak",'mahajan',21,12500,"male");
//  let obj6 = new employeeDetails("dipak",'mahajan',21,12500,"male");
//  console.log({...obj1})
//  const array =[obj1,obj2,obj3,obj4,obj5,obj6]
//  console.log(array)
// let a =4
// function myfunction() {

// return a*a
// }
//  const result = myfunction()
//  console.log(result)
// let counter = 0;
// function add() {
//   counter += 1
// }

// add()
// add()
// add()
// add()
// add()
// add()
// add()
// add()
// console.log(counter)
// function studentDetails(){
//   const studentDetails = {}
//   studentDetails.name=prompt("Eneter your name")
//   studentDetails.age = prompt("Eneter your age")
//   studentDetails.gender = prompt("Eneter your gender")
//   studentDetails.cName =prompt("Eneter your cName")
//   console.log(studentDetails)
// }
// studentDetails()
// let array = [1,2,3,4,5,6]
// let [firstvalue,secondsvalue] = array
// console.log(firstvalue)
// console.log(secondsvalue)
//  function addNumber(number) {
//    let total=0
//    for (let i = 0; i < number.length; i++) {
//            total+= number[i]
    
//    }
//    return total
//  }
//  let result = addNumber(array)
//  console.log(result);


// let options = {
//   title:"my manu",
//   items : ["item1","item2"]
// }
//  function showManu({title,
//   items:[item1,item2], 
//   width :w =100 
//   ,height :h = 100}) {
//   console.log (title)
  

// }
// showManu(options)


// function funfn1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("done")
//         }, 2000);
//         error = false
//         if (!error) {
//             resolve()
//             console.log("your promise has been resolve")
//         }else{
//             reject()
//             console.log ("your promise has not been resolve")
//         }
//     })
    
// }
// funfn1().then(function () {
//     console.log("dipak thanks for the resolve")
// }).catch(function (error) {
//     console.log("error" +" "+ error)
// })
