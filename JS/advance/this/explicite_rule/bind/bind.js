const obj = {
    name:"junayet",
    age: 20,
    another:{
        name:"mahim",
        value: function(){
            console.log(`my name is ${this.name}`)
        }
    }
}
obj.another.value.call(obj)
// output: junayet because call give where i indigate which function and first parameter this indigate
const junayet = {
    name: "junayet shiblu",
    dot: 2003,
    age: function(current){
        console.log(`${this.name} is ${current - this.dot} years old`)
    }
}
junayet.age(2024)
// output: junayet shiblu is 21 years old
const mahim ={
    name: "mahim",
    dot: 2004,
}
 const x = junayet.age.bind(mahim, 2024)
 x()
// bind put the unlimited argument just frist argument this refers and call which funciton stay then do the difination return after that this output reuseable
//output: mahim is 20 years old