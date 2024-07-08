// let block scope
// let block scope variable that means function accessible all place and var are not hoisting
function letmia(){
    if(true){
        let x = 10
        console.log(x)
    }
}
varmia()
// output 10
function letmia1(){
    if(true){
        let x = 10
        
    }
    console.log(x)
}
letmia1()
// output 10 referenceError show 