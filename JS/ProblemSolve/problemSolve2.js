// Write a funcation that return the longest word in the sentece
const x = "i love code and always try to improve that logic"

const LongestText = (str)=>{
    const words = str.split(' ')
   let lonagest= ""
   for(let word of words){
    if(word.length>lonagest.length){
        lonagest=word
    }

   }
   return lonagest

}

const result = LongestText(x)
console.log(result)
 