
var add= function(first){
   function adding(sec){
       return first+ sec;
   }

   return adding;
}

var add3 = new add(1);

console.log(add3(2));




