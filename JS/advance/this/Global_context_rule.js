// global context rule in this
console.log(this)
// console.log(window===this) it for browser
// when we this function outsite then browser window and nodejs global object moreover strict mode and no strict mode window
function functioninsideTHIS(){
    "use strict"
    console.log(this)
}
functioninsideTHIS()
// when we this function insite then browser window and nodejs global object moreover strict mode and no strict mode undefined
function functioninsideTHIS1() {
    this.name = "junayet"
}
functioninsideTHIS1()
console.log(name)
// output junayet beacuse when give this.name = "junayet" its think window.name so we anywhere name accessible
function functioninsideTHIS1() {
    "use strict"
    this.name = "junayet"
}
functioninsideTHIS1()
console.log(name)
// output undefined
