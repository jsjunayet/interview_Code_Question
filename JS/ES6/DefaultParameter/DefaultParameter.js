// defualt parameter more easly we intiaily defalut parameter value then code easy without error excute
function defaultparameter6(name = "junayet", age = "10"){
    console.log(`HI! I am ${name} i am ${age} years old`)
}
defaultparameter6()
defaultparameter6("junayet shiblu", "20")

// ES5
function defaultparameter5(name, age){
    name? name = name : name= "junayet"
    age? age = age : age = "20"
    console.log(`HI! I am ${name} i am ${age} years old`)
}
defaultparameter5()
defaultparameter5("junayet", 21)