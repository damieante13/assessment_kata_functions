console.log("Damiean Rocks")
// 1. Add (1 point)
// Write a function named "add" which takes two arguments (as input variables) and returns their sum.

function addNum(x,y){
return x+y
}

console.log("kata 1:", addNum(2,4));
console.log("kata 1:", addNum(3,10));

// 2. Multiply (2 points)
// Write a function named "multiply" which takes two arguments (as input variables) and returns their product.

function multiplyProduct(x,y){
  let sum=0;

    for (let counter=0;counter<y; counter +=1){
        sum=addNum(sum,x);   
    }
return sum
}
 console.log("kata 2:", multiplyProduct(5,5));
 console.log("kata 2:", multiplyProduct(6,4));
 console.log("kata 2:..", multiplyProduct(2,8));
 console.log("kata 2:..", multiplyProduct(3,4));
 console.log("kata 2:..", multiplyProduct(8,6));

// 3. Power/Exponentiation (2 points)
// Write a function named "power" which takes two arguments ( x and n) and returns the the result of raising x to the nth power.

function powerExpo(x, n){
    //multiply by 1
    let exponent=1;

    for (let i=0; i<n; i+=1){
       exponent=multiplyProduct(exponent, x);
}
return exponent
}
console.log("kata 3:", powerExpo(2,8));
console.log("kata 3:", powerExpo(3,4));
console.log("kata 3:", powerExpo(8,6));
console.log("kata 3:..", powerExpo(5,5));
console.log("kata 3:..", powerExpo(6,4));

// 4. Factorial (2 points)
// Write a function named "factorial" which takes a single argument and returns the factorial of that value.
// cite:https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
// check number
// if number ok move on with number 
// loop it with decrementing by 1 
// multiply until it equals 0

function showFactorial(f){ 
    if(f < 0){
        return -1;
    }else if(f === 0){
        return 1;
} 

for (let i = f - 1; i >= 1; i -=1){
    f = multiplyProduct(f, i);
}
return f
}

console.log("kata4:", showFactorial(5)) 
console.log("kata4:", showFactorial(-10)) 
console.log("kata4:", showFactorial(0)) 
console.log("kata4:", showFactorial(8)) 

// cite: https://stackoverflow.com/questions/7944239/generating-fibonacci-sequence
// Bonus: Fibonacci (3 points)
// Write a function named "Fibonacci" which takes an argument n and returns the nth Fibonacci number. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

function fiboPos(n){ 
if(n<=2){
    return 1;
}else{
    return fiboPos(n-1)+fiboPos(n-2);
}
}


console.log("Bonus Kata:", fiboPos(1));
console.log("Bonus Kata:", fiboPos(0));
console.log("Bonus Kata:..", fiboPos(5-1));
console.log("Bonus Kata:..", fiboPos(7-1));
console.log("Bonus Kata:..", fiboPos(13-1));

//returns 3
//returns 8
//returns 144

