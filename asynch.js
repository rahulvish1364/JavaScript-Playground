console.log("Start");

setTimeout(()=>{console.log("I am in Callback");
}, 2000)

setTimeout(()=>{console.log(" I am in 2nd callback");
},0)

console.log("End");
