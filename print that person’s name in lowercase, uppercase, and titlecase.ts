//print that person’s name in lowercase, uppercase, and titlecase//

let personName: string = "Mohsin Raees";
 //in lpowercase//
 console.log("lowercase:", personName.toLowerCase());

 //in uppercase//
 console.log("uppercase:", personName.toUpperCase());

 //title case//
 console.log("titlecase:", personName.replace(\/b\w/g,c=> c.toUpperCase()));
 