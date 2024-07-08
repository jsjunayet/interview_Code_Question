// const block scope
// const block scope variable that means function accessible all place and var are not hoisting
// extra reassign not possible
function constmia(){
    if(true){
        const x = 10
        console.log(x)
    }
}
varmia()
// output 10
function constmia1(){
    if(true){
        const x = 10
        
    }
    console.log(x)
}
constmia1()
// output 10 referenceError show 