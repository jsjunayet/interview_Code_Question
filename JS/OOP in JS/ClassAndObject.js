class parents{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    display(){
        console.log(this.name, this.id)
    }
}
class child extends parents {
    display(){
        console.log(this.name, this.id);
    }
}
var x2 = new parents("parent", 80)
var x = new child("child", 20)



