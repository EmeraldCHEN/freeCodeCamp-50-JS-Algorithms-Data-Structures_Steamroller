function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
// The Array.isArray() method determines whether the passed value is an Array.
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.

steamrollArray([[["a"]], [["b"]]]); // return ["a", "b"]
steamrollArray([1, [], [3, [[4]]]]); // return [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]); // return [1, {}, 3, 4]





// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller/
