// R-ALAB 308.4.1: Working with Data Collections
//-----------------------------------------------


// This function is to input the string, remove the commas and \n becuase the array size is four columns.
function cvsTEXT (cvsString, rowSize) {

  // Since the values categories repreat every four index then I do not need the \n and I will replace each to a comma first.
  let newCVSString = cvsString.replaceAll("\n", ",");

  // Removing the commas
  let cvsNoComma = [] ;
  cvsNoComma = newCVSString.split(",");
  
  // console.log(cvsNoComma);
  
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
  let cvsTableRowsEnd = cvsTableRows(cvsNoComma,rowSize);

  console.log(cvsTableRowsEnd);
  
}



// NOT READY FOR USE.
//This function is to convert the CVS Text to an object.
// This function is to input the string, remove the commas and \n becuase the array size is four columns.
function cvsTEXTtoObject (cvsString, rowSize) {

  //Initialize an empty object.
   let cvsObject = {};
  

      // Since the values categories repreat every four index then I do not need the \n and I will replace each to a comma first.
      let newCVSString = cvsString.replaceAll("\n", ",");

      // Removing the commas
      let cvsNoComma = [] ;
      cvsNoComma = newCVSString.split(",");
      

      const keys = cvsNoComma.slice(0, rowSize); // This const is to extract the first four elements and makes them as keys
      const values = cvsNoComma.slice(rowSize);  // All other elements in the array are values

      // Initializing an empty object.
      const objects = [];

      // Loop through the cvsNoComma minus the heading (Called array)
      for (let i = 0; i < values.length; i += rowSize) {
            const scop = values.slice(i, i + rowSize); // Extract chunks of the RowSize values

            const cvsNEWobject = {}; // The New CVS Object initialization 

            // Loop through keys array to another slice
            keys.forEach( (key, index) => {
              cvsNEWobject[key] = scop[index]; 
            });
            objects.push(cvsNEWobject); // Add the New CVS Object to the result array
      }

      console.log(objects);
      return objects; //export the object.
  }



    
  
  


    // Part 4: Sorting and Manipulating Data
            
    //This Function is To Remove the Last Element from the CVS object
    function removeLastElement (value) {
      let objectsRemovedLast = [];
      objectsRemovedLast = value.pop();
      console.log('Last element has been removed.')
      console.log(objectsRemovedLast);
    }

//-------------------------------------------------------------------------------------------------------


    //This Function is To Add an Element to the CVS object at index 1.

    function insertElementIndex1 (cvsString, rowSize, newInsert) {
   
      // Since the values categories repreat every four index then I do not need the \n and I will replace each to a comma first.
            let newCVSString = cvsString.replaceAll("\n", ",");
            let newIns = newInsert.replaceAll("\n", ",");

            // Removing the commas
            let cvsNoComma = [] ;
            cvsNoComma = newCVSString.split(",");
            newInsNoComma = newIns.split(",");
            newInsNoComma.reverse(); // I added the reverse because for some reason when I inserted the newInsNoComma, it goes from last to first!!

            // I Looped through the newInsertion to insert the elements one by one to the cvsNoComma.
            for (k = 0; k < newInsNoComma.length; k++) { // I removed <= and I put < to avoid the first undefined outcome.
              cvsNoComma.splice(4,0,newInsNoComma[k]);
            }
            
            // For Testing the new cvsNoComma. It Works!
            // console.log(cvsNoComma);

            console.log(`Inserting ( ${newInsert} ) to the index 1. `);

            const keys = cvsNoComma.slice(0, rowSize); // This const is to extract the first four elements and makes them as keys
            const values = cvsNoComma.slice(rowSize);  // All other elements in the array are values

            // Initializing an empty object.
            const objects = [];

            // Loop through the cvsNoComma minus the heading (Called array)
            for (let i = 0; i < values.length; i += rowSize) {
                  const scop = values.slice(i, i + rowSize); // Extract chunks of the RowSize values

                  const cvsNEWobject = {}; // The New CVS Object initialization 

                  // Loop through keys array to another slice
                  keys.forEach( (key, index) => {
                    cvsNEWobject[key] = scop[index]; 
                  });
                  objects.push(cvsNEWobject); // Add the New CVS Object to the result array
            }
            
            console.log(objects);
           return objects; //export the object.
          }
  
//-------------------------------------------------------------------------------------------------------          

      // This function is to add a new object to the end of the Array
      function addingToTheEnd (cvsString, addedRowSize,newaddition) {

            // Since the values categories repreat every four index then I do not need the \n and I will replace each to a comma first.
            let newCVSString = cvsString.replaceAll("\n", ",");
            let newadd = newaddition.replaceAll("\n", ",");

            // Removing the commas
            let cvsNoComma = [] ;
            cvsNoComma = newCVSString.split(",");
            newAddNoComma = newadd.split(",");

            // I Looped through the newInsertion to insert the elements one by one to the cvsNoComma.
            for (k = 0; k < newAddNoComma.length; k++) { // I removed <= and I put < to avoid the first undefined outcome.
              cvsNoComma.push(newAddNoComma[k]);
            }
            
            // For Testing the new cvsNoComma. It Works!
            // console.log(cvsNoComma);

            console.log(`Adding ( ${newaddition} ) to the End of the Array. `);

            const keys = cvsNoComma.slice(0, addedRowSize); // This const is to extract the first four elements and makes them as keys
            const values = cvsNoComma.slice(addedRowSize);  // All other elements in the array are values

            // Initializing an empty object.
            const objects = [];

            // Loop through the cvsNoComma minus the heading (Called array)
            for (let i = 0; i < values.length; i += addedRowSize) {
                  const scop = values.slice(i, i + addedRowSize); // Extract chunks of the RowSize values

                  const cvsNEWobject = {}; // The New CVS Object initialization 

                  // Loop through keys array to another slice
                  keys.forEach( (key, index) => {
                    cvsNEWobject[key] = scop[index]; 
                  });
                  objects.push(cvsNEWobject); // Add the New CVS Object to the result array
            }
            
            console.log(objects);
          return objects; //export the object.
      }

    




//Part 1: Refactoring Old Code

// The string from CVS
let cvsString1 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26` ;


// The additional text to test the code
let cvsTEXTNew = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`; 



console.log('Part 1: Refactoring Old Code');

// The original text and the Row Size 4 columns
cvsTEXT (cvsString1,4);

// the additional text and the Row Size 4 columns
cvsTEXT(cvsTEXTNew, 4);

console.log ('------------------------------------------------------------------------------------');




// Part 2: Expanding Functionality

// The row size is 5

let personalID = `id,First Name, Last Name, Birth, State,234,Mustafa,Alani,May 1978,Illinois,235,Lue,Kang,05/09/626,China`;

console.log('Part 2: Expanding Functionality');
cvsTEXT(personalID, 5);
console.log ('------------------------------------------------------------------------------------');





//Part 3: Transforming Data

console.log('Part 3: Transforming Data');
cvsTEXTtoObject(cvsString1, 4);
cvsTEXTtoObject(cvsTEXTNew, 4);
cvsTEXTtoObject(personalID, 5); // It works with Row Size of 5 columns. Bingo!
console.log ('------------------------------------------------------------------------------------');








//Part 4: Sorting and Manipulating Data


console.log('Part 4: Sorting and Manipulating Data');

// 1.Removing the last element from the CVS array
console.log ('1. Removing the last element from the CVS array');
removeLastElement(cvsTEXTtoObject(cvsString1, 4));
console.log ('------------------------------------------------------------------------------------');


// 2.Inserting an Object in the Index 1in the CVS array
console.log ('2. Inserting an Object in the Index 1in the CVS array');
const newInsert = `50,Mustafa,SW Engineer,46`
let theRowSize = 4;
insertElementIndex1(cvsString1, theRowSize,newInsert);
console.log ('------------------------------------------------------------------------------------');



// 3.Add the following object to the end of the array  
console.log ('3. Adding an object to the end of the CVS Array')
const newaddition = `13,Ammar,SW Engineer,14`;
const addedRowSize = 4;
addingToTheEnd (cvsString1, addedRowSize,newaddition);
console.log ('------------------------------------------------------------------------------------');