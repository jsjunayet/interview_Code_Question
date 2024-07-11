// Palindrome or nor

const x = "2001"
const PalindromeFunction=(str)=>{
    const reverse = str.split("").reverse().join("")
    if(reverse == str){
        return `PlalinDrome this String ${reverse}`
    }
    else{
        return `Nor PlalinDrome this String ${reverse}`
    }
}

const result = PalindromeFunction(x)
console.log(result)
