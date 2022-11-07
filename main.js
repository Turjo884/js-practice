//

// Problem 1 
// function kilometerToMeter(kilometer){
//     if(kilometer < 0){
//         console.log('Sorry, You Entered Wrong Number')
//     }
//     else if(kilometer > 0){
//         var meter = kilometer * 1000 ;
//         return meter;
//     }
// }
// var isMeter = kilometerToMeter(27.66)
// console.log(isMeter);


// Problem 2
// function budgetCalculator(watch,phone,laptop){
//     var watchPrice = 50;
//     var phonePrice = 100;
//     var laptopPrice = 500;
//     var calc = watch*watchPrice + phone*phonePrice + laptop*laptopPrice;
//     return calc;
// }
// var totalBudget = budgetCalculator(2,1,3)
// console.log(totalBudget);


// // Problem 3
// var tenDaysCost = 1000;
// var twentyDaysCost = 800;

// function hotelCost(howManyDay){
//     if(howManyDay < 0){
//         console.log("Sorry Maybe You Entered Wrong Number , You can't stay Negative Days")
//     }
//     else if(howManyDay > 0 && howManyDay <= 10 ){
//         var totalcost = howManyDay *100;
//     }
//     else if(howManyDay > 10 && howManyDay <= 20 ){
//         var totalcost = (howManyDay-10) * 80 + tenDaysCost;
//     }
//     else if(howManyDay > 20){
//         totalcost = (howManyDay-20) * 50 + tenDaysCost + twentyDaysCost;
//     }
//     return totalcost;
// }
// var totalHotelCost = hotelCost(22)
// console.log(totalHotelCost);


// // Problem 4
// function megaFriend(friendsArray){
//     if(friendsArray.length == 0){
//         console.log('Sorry, You Entered An Empty Array');
//     }
//     else{
//         var size = 0;
//         for(var i = 0 ; i < friendsArray.length ; i ++){
//             if(friendsArray[i].length > size ){
//                 size = friendsArray[i].length;
//                 var theName = friendsArray[i];
//             }
//     }
//     return theName;
//     }
// }
// realMegaFriend = megaFriend(['Jamil','Abdullah','Rahim','Saad','Najmul','Golam Rabbi','Jhankar Mahbub']);
// console.log(realMegaFriend);

// const x = 10;
// const y = 20;
// const z = 30;

// if( x > y  && x > z){
//     console.log("first one is the biggest number");
// }
// else if(y > x && y > z ){
//     console.log("second one is the biggest number");
// }
// else if(z > x && z > y){
//     console.log("third one is the biggest number");
// }
// else{
//     console.log("none of them are the biggest number");
// }

// const weekDay = 'Sunday';
// switch(weekDay){
//     case 'Saturday':
//         console.log('Saturday is closed today');
//         break;
//     case 'Sunday':
//         console.log('Sunday is normal day');
//         break;
//     case 'Monday':
//         console.log('Monday is another normal day');
//         break;
//     default:
//         console.log('Today is friday');
// }


//  function myFunction(){
//     var carName = "Volvo";
//     console.log(carName);
// }

// myFunction();




// Personal Problem Solving 1

// function getRandInteger(min, max){
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// console.log(getRandInteger(1, 6));





// Personal Problem Solving 2

// const students = ["Boshir", "Kamal", "Latif", "Rouf", "Akash" ];
// console.log(students.sort());





// Personal Problem Solving 3

// const roll_number = [4, 5, 6, 1, 3, 2, 9, 10, 8, 7]

// const s = roll_number.sort(function (a, b){
//     return a - b;
// })

// console.log( roll_number.sort(function (a, b){
//     return a - b;
// }));





// Personal Problem 4
// function isLeapYear(year){
//     if((year % 400 === 0) || ((year % 4 === 0 ) && (year % 100 !== 0))){
//         console.log(`${year} is a leap year`);
//     }
//     else{
//         console.log(`${year} is not a leap year`);
//     }
// }

// isLeapYear(2024);




// Personal Problem 5
// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function countVowels(sentence){
//     let count = 0;
//     const letters = Array.from(sentence);

//     letters.forEach(function(value){
//         if(vowels.includes(value)){
//             count++;
//         };
//     })

//     return count;

// }

// console.log(countVowels("I love Bangladesh and USA and Canada"));




// Problem Solving 6

// const numbers = [1, 4, 5, 7, 6, 6, 4, 0, 9, 5, 6, 1];

// const duplicates = numbers.filter(function(value, index, array){
//     return  array.indexOf(value) !== index;
// });

// console.log(duplicates);




// Problem solved my me

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const evenNumber = numbers.filter(function(value){
//     return value % 2 === 0;
// });

// function numFunction(value){
//     return value % 2 === 0;
// }

// console.log(evenNumber);

// for(i=0; i<=10; i++){
//     // let's divide the value by 2
//     // if the remainder is zero then it's an even number
   
//     if(i % 2 === 0){
//       console.log(i);
//     }
//   }


// Ternary Condition


// let title = "Something";

// title = Number(title);

// if (isNaN(title)){
//     console.log("Input is not a Number");
// }
// else{
//     console.log( title < 18 ? "Too young" : "Old enough");
// }


// let age = 30 ;

// switch (age == 30){
//     case age == 18:
//         console.log('You are adult enough');
//         break;
//     case age > 18:
//         console.log('You are old');
//         break;
//     case age < 18:
//         console.log('You are a child');
//         break;
//     default:
//         console.log('User input is wrong');
// }

// let age = 18;

// switch (age) {
//   case age = 18:
//     console.log('You are adult enough');
//     break;
//   case age < 18:
//     console.log('You are a child');
//     break;
//   case age > 18:
//     console.log('You are old');
//     break;
//   default:
//     console.log('No value found');
// }

// switch (new Date().getDay()){
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
// }



// let obj = {
//     names : "Tahmid",
//     id    : 12
// };

// console.log(typeof (obj.toString()))

// console.log(!false);


//Decimal to binary

// function dec2bin(dec){
//     console.log((dec >>> 0).toString(2));
// }

// dec2bin(-6);


// // Binary to Decimal

// function bin2dec(bin){
//     console.log(parseInt(bin,2).toString(10));
// }

// bin2dec(1000);




// learning regular experission
// let text = ;
// console.log(/e/.exec("123456 anything else or other!"))
// ;



// Learning Js errors


// let x = 11;

// try{
//     if(x == "") throw "empty";
//     if(isNaN(x)) throw "not a number";
//     x = Number(x);
//     if(x < 5) throw "too low";
//     if(x > 10) throw "too high";
// }
// catch(err){
//     console.log(err);
// }
// finally{
//     console.log("I am testing errors");
// }


// let num = 5;

// try{
//     num.toPrecision(500);
// }
// catch(err){
//     console.log("to Precision error")
// }


// learning this keyword and this is implicit function binding


// const person = {
//     firstName : "John",
//     lastName  : "Wick",
//     id        : 9389,
//     fullName  : function(){
//         return this.firstName + " " + this.lastName;
//     },
//     getFullName: function(){
//         return this.fullName();
//     }
// }

// console.log(person.getFullName());


// explicit function binding
// const person1 = {
//     fullName : function(){
//         return this.firstName + " " + this.lastName; 
//     }
// };
// const person2 = {
//     firstName : "John",
//     lastName  : "Wick",
// };

// console.log(person1.fullName.call(person2));


// learning arrow function

// const hello = () => {
//     return "hello world";
// }

// console.log(hello());



// Learning Java Script Class

// class Car{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }

//     super(){
//         console.log(`${this.name} is super fast`);
//     }
// }

// const car1 = new Car("Toyota", 2017);


// car1.super();




// learning JSON 
// Convert JSON to object

// let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Wick" },' +
// '{ "firstName":"John" , "lastName":"Abraham" },' +
// '{ "firstName":"John" , "lastName":"Cena" } ]}';

// const obj = JSON.parse(text);

// console.log(obj.employees[0]);


// // Convert Obj to JSON
// let person = {
//     firstName: "Tahmid",
//     lastName: "Ashrad"
// }

// const json = JSON.stringify(person);

// console.log(json);




// Another This practice
// var karim = {
//     name: "Karim Rahman",
//     dob: 1996,
//     age: function(currentYear){
//         console.log(this.name + " is " + (currentYear - this.dob) + " years old");
//     }
// }

// karim.age(2022);

// const rahim = {
//     name: "Abdur Rahim",
//     dob:2000
// }

// karim.age.call(rahim, 2022);




// Difference Between call and apply method

// var karim = {
//     name: "Karim Rahman",
//     dob: 1996,
//     age: function(currentYear, msg){
//         console.log(msg + ' ' + this.name + " is " + (currentYear - this.dob) + " years old");
//     }
// }


// const rahim = {
//     name: "Abdur Rahim",
//     dob:2000
// }

// karim.age.apply(rahim, [2022, "Heollo World!"])




// bind() method
// var karim = {
//     name: "Karim Rahman",
//     dob: 1996,
//     age: function(currentYear, msg){
//         console.log(msg + ' ' + this.name + " is " + (currentYear - this.dob) + " years old");
//     }
// }


// const rahim = {
//     name: "Abdur Rahim",
//     dob:2000
// }

// const rahimAge = karim.age.bind(rahim, 2022)

// rahimAge("Hello World!");




// Arrow function with IIFE

// (() => {
//     console.log("My name is Tahmid Ashrad");
// }) ();



// Some array method

// const numbers = [19, 23, 14, 56, 32, 65, 10];

// For es5
// const findNum = numbers.map(function(theNum){
//     return theNum === 56;
// })

// console.log(findNum);
// console.log(findNum.indexOf(true));

// For es6
// console.log(numbers.findIndex(number => number === 65));



// Map 
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);

// fruits.forEach ((value, key) =>
//    console.log(`key is: ${key} and the value is: ${value}`)
// )


// fruits.forEach(function(value, key){
//     console.log(`key is: ${key} and the value is: ${value}`)
// });


// let text = "";
// for(const x of fruits.entries()){
//     text += x;
//     console.log(x);
// }

// console.log(text);





// Another Class tutorial
// class Person6 {
//     constructor(name, age, job) {
//         this.name = name;
//         this.age = age;
//         this.job = job
//     }

//     dateOfBirth() {
//         console.log(`${this.name} is ${50- this.age} years old`);
//     }
// }

// const Hasem = new Person6("Hasem Ahmed", 5, "student");

// Hasem.dateOfBirth();




// This Keyword Explicit Binding
// const person1 = {
//     fullname: function(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// const person2 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// console.log(person1.fullname.call(person2))




// Class revesion again

// class ClassName {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     play(text, number){
//         console.log(`${this.name} is playing ${text} ${number} out of 100`);
//     }
// }

// const person1 = new ClassName("Sakib", 75);
// const person2 = new ClassName("Afif", 17);
// const person3 = new ClassName("Mustafizur", 8);

// person1.play("Well",80);
// person2.play("outstanding", 100);
// person3.play("not that much good", 40);



// Learning jSON again

// const text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// console.log(text);

// const objc = JSON.parse(text);
// console.log(objc);
// console.log(objc.employees[2]);





// Second Phase Problem solving part 2

// নিচের এ "Turjo" শব্দটি কয়বার ব্যবহার করা হয়েছে? প্রথমবার "Turjo" কত নাম্বার পজিশনে পাওয়া গেছে? 

// Problem 1

// const senteces = "Learn with Turjo is all about teaching web devlopment in an efficient and practical manner. If you are just getting started in web development, Lear with Turjo has all the tools you need to learn for Turjo. Thanks."


// const matches = senteces.match(/TurjoKhan/ig);
// const times = matches ? matches.length : "no matches";
// console.log(times);


// const position = senteces.search(/Turjos/i);
// const positionFound = position >= 0 ? position : "not found";
// console.log(positionFound);



// Problem 2 

// input : linearSearch (['a', 'b', 'c', 'd', 'c'], 'c')
// output: 2 or 'not found!'
// problem: linearSearch() function টি implement করে দেখান 


// function linearSearch(arr, val) {
//  const length = arr.length;
//  for (let i = 0; i < length; i++){
//      if(arr[i] === val){
//         return i;
//      }
//  }

//   return "not found!";

// }

// console.log(linearSearch(['a', 'b', 'c', 'd', 'c', 'f'], 'f'));



// Problem 3

// কোন Array থেকে কি ভাবে সব থেকে বড় string খুজে বের করবেন এবং index number দেখাবেন? 


// function longestString(names){
//     let longestWord = '';
//     for(nene of names){
//         if(nene.length > longestWord.length){
//             longestWord = nene;
//         }
//     }
//        return [longestWord, names.indexOf(longestWord)];
// }

// console.log(longestString(["Tahmid Ashrad", "Tahmid Ashrad Turjo", "Himi", "Janntul Ferdous", "Jannatul Ferdous Himi"]));



// ১-১০০ পর্যন্ত কোন সংখ্যা গুলো ৩, ৫ এবং ৩ ও ৫ উভই সংখ্যা দ্বারা তা বের কর ।

// function fizzBuzz(number){
//     for(let i = 1; i <= number; i++){
//         if(i % 15 === 0){
//             console.log(`${i} is fizzBuzz`);
//         }
//         else if(i % 3 === 0){
//             console.log(`${i} is fizz`);
//         }
//         else if (i % 5 === 0){
//             console.log(`${i} is Buzz`);
//         }
//         else{
//             console.log(`${i} is not a fizzBuzz num`);
//         }
//     }
// }





// Problem 5

// Array থেকে Falsy value কিভাবে খুজে বের করে বাদ দিতে পারি?


// const mixedArr = ["lws", undefined, "learn with sumit", false, "", "apple", 40, "k", true, "Thanks all", NaN];

// const trueArray = mixedArr.filter(function(value){
//   if(value){
//     return true;
//   }
//   else{
//     return false;
//   }
// });

// const trueArray = mixedArr.filter(Boolean);

// console.log(trueArray);



// Problem 6

// Object থেকে falsy value কিভাবে খুজে বের করে বাদ দিতে পারি ?

// const obj = {
  //   a: "lws",
  //   b: undefined,
  //   c: "learn with sumit",
  //   d: false,
  //   e: "",
  //   f: "apple",
  //   g: 40,
  //   h: "k",
  //   i: true,
  //   j: "Thanks all",
  //   k: NaN,
// };

// // Note: sob jiagai obj use kora hoye ami try ore dekhar jonoo myObj use koresi
// const truthyObject = function(myObj){
//   for(let i in myObj){
//     if(!myObj[i]){
//       delete myObj[i];
//     }
//   }

//   return myObj;

// }

// console.log(truthyObject(obj))



// Javascript Object Propertise


// const person = {
//   fullName: "Tahmid Ashrad",
//   age     : 35
// };

// delete person.age;

// person.country = "Bangladesh";

// let text = '';
// for(let x in person){
//   console.log(text += person[x] + " ");
// };

// console.log(text);


// nested object expamples

// myObj = {
//   name:"John",
//   age:30,
//   cars: [{
//     car1:"Ford",
//     car2:"BMW",
//     car3:"Fiat"    
//   },
//   {
//     car1:"Ford",
//     car2:"BMW",
//     car3:"Fiat"    
//   },
//   {
//     car1:"Ford",
//     car2:"BMW",
//     car3:"Fiat"    
//   }]
// };

// const text = "";
// for (let i in myObj.cars){
//    console.log(myObj.cars[i]);
// }

// console.dir(myObj.cars)


// Js display

// const person = {
//   names: "John",
//   age: 30,
//   city: "New York"
// };

// let text = " ";
// for(let i in person){
//   text += person[i] + " ";
// }

// document.getElementById("demo").innerHTML = text.names + " is " + person.age + " and he lives in " + person.city;

// document.getElementById("demo").innerHTML =  text;


// const personArray = (Object.values(person));

// etar moddhe diye for of loop kore browser e output dekha jabe


// 4th method JSON.stringiry() method

// const myString = JSON.stringify(person);

// document.getElementById("demo").innerHTML = myString;





// JS Object Accessories

// const person = {
//   firstName: "John",
//   lastName: "Doe",
// }; 

// Object.defineProperty(person, "fullName",{
//    get: function(){
//     return this.firstName + " " + this.lastName;
//    }
// });

// console.log(person.fullName);



// Constructor function

// function Person(first, last, age){
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.fullName = function() {
//     return this.firstName + " " + this.lastName
//   }
// };

// const turjo = new Person("Turjo", "Khan", 23);
// const tahmid = new Person ("Tahmid", "Ashrad", 24);
// const asad  = new Person("Assaduzzaman", "Nur", 30);


// asad.country = "Combodia";
// asad.job = "UI/UX designer";

// // const myOutput = (Object.values(asad));
// const myOutput = JSON.stringify(asad);

// document.getElementById("demo").innerHTML = myOutput;

// console.log(asad);



// Object Prototype

// function Person(first, last, age){
//      this.firstName = first;
//      this.lastName = last;
//      this.age = age;
//      this.fullName = function() {
//        return this.firstName + " " + this.lastName
//      }
//    };
  
//    const turjo = new Person("Turjo", "Khan", 23);
//    const tahmid = new Person ("Tahmid", "Ashrad", 24);
//    const asad  = new Person("Assaduzzaman", "Nur", 30);


//    Person.prototype.country = "Banladesh";

//    asad.country = "Combodioa";

//    console.dir(Person);




// Object Iterable

// const nums = [1,2,3];

// console.dir(nums[Symbol.iterator]());



// Object er moddhe Symbol.properyt implement korar process

// const myNumbers = {};

// make it iterale

// myNumbers[Symbol.iterator] = function() {
//   let n = 0;
//   let done = false;
//   return{
//     next(){
//       n += 10;
//       if(n === 100){
//         done = true;
//       }
//       return {
//         value: n,
//         done: done
//       }
//     }
//   }
// };


// for(let num of myNumbers){
//   console.log(num);
// }




// JS sets

// const apples = {name: "Apples"};
// const bananas = {name: "Bananas"};
// const oranges = {name: "Oranges"};

// const fruits = new Map();

// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);

// console.log(fruits.get(apples));


(function (){
  console.log("I am learning JS");
})()
;