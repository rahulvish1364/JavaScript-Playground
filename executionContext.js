this.a ="I am global";

var obj ={
 a:1,
method: function(){
    console.log(this.a);
    
}
}

obj.method();

var car = function(a, b){
 this.a = a;
 this.b=b;
 this.add =function(){
     console.log(this.a + this.b);
}

}
 var mycar = new car(2,3);
 mycar.add();


function add(){
    console.log("HELLO 1");
    }
add();
var add = function(){
 console.log("hello 2");
 return this;
}

add();

var ab = 12;
this.add = function(){
 console.log("Hello 3");
 this
}

function f1(){
    //'use strict';
    return this;
}

console.log(global===f1());
 

var x = 1;
function fun(){
    let xy =2;
    console.log(xy);
} 

 console.log(xy);
 





