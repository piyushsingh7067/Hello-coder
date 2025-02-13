// this keyword

// console.log(30);
// console.log("lastest change");

// console.log(window);
// console.log(this);

// let a = 10;
// const b = 20;
// var c =20;
// console.log(this.c); 

// console.log(this==this);


// "use strict"
// function greet(){
//     console.log(this);
// }
// greet();
// window.greet();


// console.log(this);


// "use strict"

// const obj = {
//     name:"piyush",
//     age:20,
//     meet: function(){
//         console.log(this);                 // this obj ko point karta hai 
       // console.log(this.name);         
//     }
// }
// obj.meet();
 

// Arrow function in this keyword

//  let obj = {
//      name:"piyush",
//      age:15,
//      greet:()=>{
//             console.log(this);
//      }
//  }
//  obj.greet();



// let obj = {
//     name:"piyush",
//     age:15,
//     greet:function(){              //   function ke andar ek arrow function
                                  
//         let ab = () =>{
//             console.log(this);          // function wale ka this obj ko point karta hai
//         };
//         ab();
//     }
// }
// obj.greet();



// Inside a constructor or class

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }                                     //  this  a  ko point karega
                          
// let a = new Person("piyush",20);
// console.log(a);



// let greet = ()=>{
//     console.log(this);
// }                                 //  output me window Object
// greet();                            // or  global object ko  point


// "use strict"
// let meet = function(){
//     console.log(this);
// }                             //  output me window Object
// meet();                        // or  global object ko  point karega