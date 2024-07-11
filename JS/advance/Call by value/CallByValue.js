function incrementByValue(num) {
    num++; 
    console.log("Inside function:", num);  
}

let originalNum = 5;
incrementByValue(originalNum);
console.log("Outside function:", originalNum);  // Output: Outside function: 5
