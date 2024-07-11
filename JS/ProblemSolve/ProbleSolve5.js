// Anagrams

const Anagrams = (str1, str2)=>{
    let Rearrange = str1.split('').sort().join('') 
    let Rearrange2 = str2.split('').sort().join('') 
    return Rearrange == Rearrange2
}

const result = Anagrams("abcdef", "edcbaf")
console.log(result)