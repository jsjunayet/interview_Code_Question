
let x =[2,3,1,2,3,4,5]

const higestnumber = (x)=>{

    let higest = x[0]
    for(let number of x){
        if(number<higest){
            higest = number
        }
    }
    return higest

}

const result = higestnumber(x)
console.log(result)