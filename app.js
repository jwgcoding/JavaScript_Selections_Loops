console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 0; i <= 100; i++){
    
    if(i % 2 !== 0){
        console.log("This is odd.");
    }
   
}
//section 1 continued
let cont = false;
while (!cont){
    for(let i = 0; i <= 100; i++){
    if(i % 2 !== 0){
            console.log("This is odd.");
        }
    if(i == 100){
    break;
         }
    }
    cont = true;
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 0; i < 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    }

    else{
    if (i % 3 == 0){
        console.log("FIZZ");
    }
        }
    if (i % 5 == 0) {
        console.log("BUZZ");
    }
}

//Section 2 continued
let check = true; 

do {
  for (let i = 0; i <= 100; i++) {
    
  
    if (i % 5 == 0 && i % 3 == 0 && i !== 0)
    {
      console.log("FIZZBUZZ"); 
    }
    else if (i % 5 == 0)
    {
      console.log("BUZZ"); 
    }
    else if (i % 3 == 0){
      console.log("FIZZ"); 
    }
    if (i == 100){
      break; 
    }
  }
  check = false
} while (check);

// Exercise 4 section FIND VALUE

let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

for (let i = 0; i <= n; i++){
    if (n == value){
        console.log("Found a value!");
        break;
    }
if (n != value){
console.log("Did not find a value.");
}
}


//Excercise 5 Customized FIZZBUZZ

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let num = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(`FIZZ number  ${fizzDivisor}`);
console.log(`BUZZ number: ${buzzDivisor}`);

for (let i = start; i <= num; i++){
    if (num % buzzDivisor == 0 && num % fizzDivisor == 0 && num != 0){
        console.log(`Number: ${num} = FIZZBUZZ`)
    }
    else if (num % 5 == 0 && num != 0){
        console.log(`Number: ${num} = BUZZ`);
    }
    else if (num % 3 == 0 && num !=0){
        console.log(`Number: ${num} = FIZZ`);
    }
    else{
        console.log("No Match.");
    }
    break;
}