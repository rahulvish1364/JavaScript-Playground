var getUser = (id, callback)=>{

    callback();
}

getUser(31, (user)=>{
    console.log("Hello");
    
})



var getConnection = function(url, kuchbhi){
  var sum =kuchbhi();
  console.log(sum);
   return sum +1
}

var sum = getConnection("meriWebsite", function(){
    sum = 1+31;
    return sum;
    
})

console.log(sum);


setTimeout(function(){
 console.log("I am late");
 
}, 1200)

