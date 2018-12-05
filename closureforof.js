var john ={
    intro: 'I am John',
    age: 23,
    isActive: true
}

var marry ={
    intro: 'I am Marry',
    age: 25,
    isActive: false
}

var tom ={
    intro: 'I am tom',
    age: 23,
    isActive: true
}

var users = new Map();
users.set('john', john)
users.set('marry', marry)
users.set('tom', tom)

console.log("if we print variable itself",users);
console.log("Entries log",users.entries()); // Returns Map Iterator with the key and value both 
console.log("Values method log", users.values()); //Returns Map  Iterator Object with all the value withous keys
console.log('Only key using keys() method', users.keys()); // return only the keys 
console.log(users.get('john').age); // To access the specific field of the specific object in the Map 

console.log(users.get('john'));
console.log("In for each");
   
users.forEach(element => { // using the forEach to iterate over the Map
    console.log("In for each");
    
    console.log(element.intro);
    
});
console.log("In for Of"); // iterating over the mao using the for of 
   
for (const value of users.values()) {
    console.log(value.intro);
    
}



console.log("Iterating using thr for each"); // using the for each  it takes a callback and arguments are in 
//the same sequence  (value , key)
users.forEach((value , key) =>{
 console.log(value);
 
})

// another way to do that is to 

 for (const [key, value] of users.entries()) {  // as users.entries() returns array of containing the key and the values 
     
 }