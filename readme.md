   # JavaScript
   # Assignment 4

 ## 1. Write a chained if / else-if statement to fill in the following conditions
## val  < 5  =>  Tiny
## val  < 10  =>  Small
## val  < 15  =>  Medium
## val  < 20  => Large
## val  >= 20  => Huge 
       let val = 4 
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
       }
## 2. Use the switch case and create an application with the following roles.
## admin => gets full access
## subAdmin => gets access to create and delete courses
## testPrep => gets access to create and delete tests
## user => gets access to consume contents
   
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
