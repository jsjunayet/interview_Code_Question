const x = "juanyet"
const vawelfunation = (str)=>{
    const vowel = ["a", "i", "o", "u", "e"]
    let count = 0;
    for(let cont of str){
        if(vowel.includes(cont)){
            count++;
        }
    }
    return count;
    

}
const result = vawelfunation(x)
console.log(result)