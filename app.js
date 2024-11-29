// R-ALAB 308.4.1: Working with Data Collections
//-----------------------------------------------




// The string from CVS
let cvsString1 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26` ;


// The additional text to test the code
let cvsTEXTNew = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`; 


// This function is to input the string, remove the commas and \n becuase the array size is four.
function cvsTEXT (cvsString) {

  // Since the values categories repreat every four index then I do not need the \n and I will replace each to a comma first.
  let newCVSString = cvsString.replaceAll("\n", ",");

  // Removing the commas
  let cvsNoComma = [] ;
  cvsNoComma = newCVSString.split(",");
  
  console.log(cvsNoComma);
  
  // To create the table rows
  // I'm using the cvsNoComma array as the source array, and I will break it into 4-elements small arrays.
  function cvsTableRows (cvsNoComma, rowSize) {

    // Saving the results into an object of arrays
    let cvsTable = {}

    // Looping through the cvsNoComma array and crete row size of 4 elements for each.
    for (index = 0; index <= cvsNoComma.length; index += rowSize) {

      //Creatign the rows dynamically by creatign a variable Table Row "number" and save each slice in a row.
      // Since the row size is 4 I found the Math.Floor will change the number every four indexes (very useful).
      let rowNumber = Math.floor(index/rowSize) + 1 ;
      cvsTable[`row${rowNumber}`] = cvsNoComma.slice(index, index + rowSize);
    }

    // return the table value (export it).
    return cvsTable;
  } 

  // saving the rows accoring to the row size (4 here).
  let cvsTableRowsEnd = cvsTableRows(cvsNoComma,4);

  console.log(cvsTableRowsEnd);
  
}

// The original text
cvsTEXT (cvsString1);
console.log('----------------------------')

// the additional text
cvsTEXT(cvsTEXTNew);




  