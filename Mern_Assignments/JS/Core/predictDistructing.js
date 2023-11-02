const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
// output solution 
console.log(randomCar);
console.log(otherRandomCar);

// OUTPUT ==> 
// =>>>>>"Tesla"
//  =>>>>>"Mercedes"


const employee = {
  name: "Ahmed",
  age: 41,
  company: "Post",
};
console.log(employee.name);

const { name: otherName } = employee;
// OUTPUT ==>
//console.log(name);
console.log(otherName);
// OUTPUT ==> 
//Ahmed
//   ReferenceError: name is not defined


const person = {
  name: "hafsi ahmed ",
  age: 41,
  height: "4 feet",
};
const password = "hello2024";
const { password: hashedPassword } = person;
// OUTPUT ==>
console.log(password);
console.log(hashedPassword);

// OUTPUT ==> 
//            hello2024
//            undefined does not exist in the object person 

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// OUTPUT ==> 
//            false first =2 second = 5 ====> 2 ⍯ 5  so false 
//            true  first =2 thrid =2 so true 



const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
// outpt 
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// OUTPUT ==> 
//            value            
//            [1,5,1,8,3,3]
//            1 first index 
//            5 second index 