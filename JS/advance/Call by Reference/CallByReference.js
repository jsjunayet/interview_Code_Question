function CallbyReference(obj){
    console.log(obj)
    obj.value++
    console.log("inside: ", obj.value)

}
const obj = {value: 5}
CallbyReference(obj)
console.log(obj.value)