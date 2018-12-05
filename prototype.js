var Car = function(color){
    this.color = color; 
}

var toycar = Object.create(Car.prototype);


console.dir(toycar);
console.log(toycar instanceof Car);
console.log(toycar instanceof Object);
console.log(Object.prototype.isPrototypeOf(toycar));
console.log(Car.prototype.isPrototypeOf(toycar));
// Well this is one thing is one thing in
// FOr now i just know that by using Object.create() we can make the instance of any Constructor 
// But by using "new" keyword  we can make the iniatalise the property of it or can apply any logic when an instance
// of the object is created
 

// another Example for creating object of object
 

// Extending the Car Constructor 
Car.prototype = {
    getColor(){
        return this.color;
    }
}


var smallCar = function(){
  
};
smallCar.prototype = Object.create(Car.prototype);

var miniCar = new smallCar();


console.log(miniCar instanceof smallCar);
console.log(miniCar instanceof Car);
console.log(miniCar instanceof Object);
console.log(smallCar.prototype.isPrototypeOf(miniCar));
// smallCar is the prototype of the minicar
console.log(Car.prototype.isPrototypeOf(miniCar));
//Car is the prototype of the minicar 
console.log(Object.prototype.isPrototypeOf(miniCar));
// So it proves from the last statement that Object which is the master object is the protoype of the all the object 
// created in the javascript

