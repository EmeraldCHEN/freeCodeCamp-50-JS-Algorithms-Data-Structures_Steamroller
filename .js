function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
// The Array.isArray() method determines whether the passed value is an Array.
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.

steamrollArray([[["a"]], [["b"]]]); // return ["a", "b"]
steamrollArray([1, [], [3, [[4]]]]); // return [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]); // return [1, {}, 3, 4]



/************  Solution #2     *******************************************************************************************/

function steamrollArray(arr) {
 // Firstly turn the array to a string of numbers seperated by a comma, 
 //  double comma if there was an empty array and literal object text if there was an object
  return arr.toString().replace(',,', ',')  // "1,2,,3" => "1,2,3"
         .split(',').map(function(x){
               if(x == '[object Object]'){  // bring back empty objects
                    return {};
               }else if(isNaN(x)){  // if not a number (string)
                    return x;
               }else{   // if a number in a string, convert it
                    return parseInt(x);
               }
  });

}







// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller/
