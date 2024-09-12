 /* let val = 4 
 if (val <= 5) {
    console.log("Tiny");
 } else if (val <= 10) {
    console.log("Small")
 } else if(val < 15 ){ 
    console.log("medium")
 } else if(val <= 20 )
  {
    console.log("Large")
 } else {
    console.log("Huge")
 } */
        
   let roles = ["admin","subAdmin","testPrep","user"]  
     let role = "testPrep"
    switch (role) {
        case 'admin':
       console.log("Get full access");
             break;
        case 'subAdmin':
        console.log ("Access to create and delete courses");
            break;
        case 'testPrep':
          console.log ("Access to create and delete tests");
            break;
        case 'user':
          console.console.log("Access to consume contents");
            break;
        default:
          console.log ("Unknown role");
      }
    