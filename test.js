
// const array1 = [1, 3, 8, 6, 5];
// const array2 = [1, 2, 8, 5];




// const newArray=[]
// const found = array2.filter((index,val)=>{
   
//     return array1.includes(index)
// })
// newArray.push(found)

// console.log(newArray.flat());
// const array1 = [1, 3, 4, 6, 5];
// const array2 = [1, 7, 8, 5];
//  const newArray = [...new Set([...array1, ...array2])]
// // console.log(newArray)
//     for (let i = 1; i <= 8; i++) {
//         let result = newArray.includes(i)
//         if(result == false){
//             console.log(i)
//         }
//     }

//     let arr = [1,2,3,4,5,6]
//     function isOdd(array , newArray = []) {
//         for (let i = 0; i < array.length; i++) {
//             if (array[i]%2 !== 0){

//                 newArray.push(array[i])
//             }
           
//         }
//         return newArray
//     }
//     const result = isOdd(arr)
//     console.log(result)
//     // in string to remove duplicate charecater   
//      let str = 'aabbccddn'
//      let Nresult = str.split('')
//      let newStr 
//      for (let i = 0; i < Nresult.length; i++) {
//          let element = Nresult.includes(str)
//         console.log(element)
//      }
// Problem - 2
// Find prime numbers from 0 to given number
    // function isPrime(number){

    //     for (let i = 2; i <= 10; i++) {
    //        let flag = 0
    //     for (let j = 2; j < i; j++) {
    //          if( i % j  == 0){
    //            flag = 1
    //             break
    //          }
    //       }
    //       if (i > 1 && flag == 0) {
    //        console.log(i)
    //       }
           
    //     }
         
    // }
    
   

  // Problem - 3
 //  Print reverse of given number
    // function reverseNumber(str) {
    //       const result = str.split('')  
    //        newArray = result.reverse()
    //         newStr= newArray.join("")
    //        let number = parseInt(newStr)
    //        console.log(number)
    // }
    // reverseNumber ("1234")
        
    
    // Problem - 4 
    // Write a program which takes string as argument and return the character of given position 
//     function newString(str,position) {
//     //     for (let i = 1; i < str.length; i++) {
//     //     let result = str[position]
//     //     console.log(result)
//     //     break
//     // }
//     return str[position]
//     }
//    const result= newString("hello world" , 6)
//    console.log(result)

    // Position - 5
    // Remove space found in string
         

    // function removeSpace(str) {
    //      let newStr = str.split(" ")
    //      let newStr1 = newStr.join("")
     
    //      console.log(newStr1)
    // }
    //  removeSpace("hello world how are you")


    //  Problem - 6
	// Returns all the vowels and consonants from the string

    //     function getVowelsandconsnanets(str){
    //          let result = str.split("")
    //          let vowels = []
    //          let consonants = []
    //          for (let i = 0; i < str.length; i++) {
    //          c = str.charAt(i)
             
    //          if(c == "a"||c == "i" ||c == "e"||c == "o" ||c == "u"){
    //             vowels.push(c)
    //          }
    //          else{
    //             consonants.push(c)
    //          }
    //         }
    //          console.log(vowels)
    //          console.log(consonants)
             
            
    // }
    //     getVowelsandconsnanets('exprot')

        // function commonString(str) {

        //    for (let i = 0; i <= str.length; i++) {
        //       for (let j = i+1; j <= str.length; j++) {
        //       if (str[j] == str[i]) {
        //         console.log(str[j])
        //         } 
        //       }
        //     }
          
        // }
        // commonString('helloworld')

    //  Problem - 6
    function modifyArray(arr, callback) {
        // do something to arr here
        arr.push(100);
        // then execute the callback function that was passed
        callback();
      }
      
     let arr = [1, 2, 3, 4, 5];
      
      modifyArray(arr, function() {
        console.log("array has been modified", arr);
      });
	// 
    // problem -7 
    var string = "Welcome to this Javascript Guide!";

 // Output becomes !ediuG tpircsavaJ siht ot emocleW
// var reverseEntireSentence = reverseBySeparator(string, "");
   
//  // Output becomes emocleW ot siht tpircsavaJ !ediuG
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
  
// }
// console.log(reverseEntireSentence)
// console.log(reverseEachWord)
var firstWord = "Mary";
var secondWord = "Army";

isAnagram(firstWord, secondWord); // true

function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}
//Create a function which takes key of an array of object as an argument and returns expected output below
const data = [
	{ name: 'John', type: 'student', age: 20 },
	{ name: 'Morgan', type: 'student', age: 18 },
	{ name: 'Chris', type: 'labour', age: 45 },
];
   
function stnLabo(type) {
   const studnetandlabourData = {}
  let result = data.filter((d,index,data)=>{
    console.log('type :>> ', type);
    console.log('data :>> ', data.type);
    console.log('type[index] :>> ', type[index])
   return d.type === type
  
  })
  studnetandlabourData[type] = result
  return studnetandlabourData
}
 const d = stnLabo("labour")
  console.log(d)

// { "student":[{name:"John",type:"student"},{ name: 'Morgan', type: 'student', age: 18 }],
// "labour":[	{ name: 'Chris', type: 'labour', age: 45 },]
// }