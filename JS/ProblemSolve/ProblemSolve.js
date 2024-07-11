// Q: Please reverse the String

const reverse = "junayet"
const reverseresult =reverse.split('').reverse().join('')

const reverseresult1 = (str)=>{
    let reversecount = ""
    for(let i=str.length-1; i>=0; i--){
        reversecount +=str[i]
    }
    return reversecount
}
const result = reverseresult1(reverse)
console.log(result)