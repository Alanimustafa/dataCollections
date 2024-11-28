// R-ALAB 308.4.1: Working with Data Collections
//-----------------------------------------------



// Part 1: Refactoring Old Code

// The string from CVS

// Create an object named cvsDateTable

let cvsDateTable = {
  id : [],
  name : [],
  occupation: [],
  age: []
}

let cvsString1 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26` ;

let cvsTEXTNew = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`; 

function cvsTEXT (cvsString) {

  let newCVSString = cvsString.replaceAll("\n", ",");

  let cvsNoComma = newCVSString.split(",");
  
  cvsDateTable.id.splice(0,cvsDateTable.id.length);
  cvsDateTable.name.splice(0,cvsDateTable.name.length);
  cvsDateTable.occupation.splice(0,cvsDateTable.occupation.length);
  cvsDateTable.age.splice(0,cvsDateTable.age.length);
  
  for (i = 0; i <= cvsNoComma.length; i += 4) {
    cvsDateTable.id.push(cvsNoComma[i]);
  }
  for (j = 1; j <= cvsNoComma.length; j += 4) {
    cvsDateTable.name.push(cvsNoComma[j]);  
  }
  for (k = 2; k <= cvsNoComma.length; k += 4) {
    cvsDateTable.occupation.push(cvsNoComma[k]);  
  }
  for (m = 3; m <= cvsNoComma.length; m += 4) {
    cvsDateTable.age.push(cvsNoComma[m]);  
  }
  
  console.log(cvsDateTable);
}

cvsTEXT (cvsString1);
console.log('----------------------------')
//cvsTEXT(cvsTEXTNew);