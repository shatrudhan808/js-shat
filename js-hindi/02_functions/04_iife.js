// immediately invoked function Expression (IIFE)
( function chai(){
    //named iife
    console.log(`db connected `);
    
})();

( ()=>{
    console.log(`db connected anagin `);
    
})();

( (name)=>{
    console.log(`db connected anagin ${name} `);
    
})('shat')