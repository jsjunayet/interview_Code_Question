// object rule in this
const obj1 = {
    name: "junayet shiblu",
    age: 30,
    value: function(){
            console.log(this)
    }
}
console.log(obj1.value())
output: "junayet shiblu"
const obj = {
    name: "junayet shiblu",
    age: 30,
    another: {
        name: "jsjunayet",
        value: function(){
            console.log(this)
        }
    }
}
console.log(obj.another.value())
// output: jusjunayet because this her liding parent do the refer

