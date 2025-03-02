// truethy value > "0", 'false', " ", [], {}, function(){}
//  and falsy value > false, 0, -0, Bigint 0n, "", null, undefined, NaN


 //const userEmail = ""

//  const userEmail = []
//  if(userEmail){
//     console.log("got user email");
    
//  }else{
//     console.log("dont have user email");
//  }


 // check array in contions

 let userDetails = []
 if(userDetails.length===0){
    console.log("empity array");  
 }

 // chgeck object in condtions

 let userDetail={}
 if (Object.keys(userDetail).length===0) {
    console.log("empity object / array"); 
 }

 //nullish coalescing operator (??) null, undefined

 let val1 ;
 //val1 = 5 ?? 10
 val1 = null ?? 10
console.log(val1);
