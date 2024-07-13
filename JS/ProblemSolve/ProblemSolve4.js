// RemoveDuplicate in array
const x = [10,20,30,30]


const RemoveDuplicateArray=(x)=>{
    let unique = []
    for(let i =0 ; i< x.length; i++){
        if(unique.indexOf(x[i]) === -1){
            unique.push(x[i])
        }
    }
    return unique


}
const result = RemoveDuplicateArray(x)
console.log(result)
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

