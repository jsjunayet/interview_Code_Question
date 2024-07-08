// var function scope variable that means function accessible all place and var are hoisting
function varmia(){
    if(true){
        var x = 10
    }
    console.log(x)
}
varmia()
// output 10
