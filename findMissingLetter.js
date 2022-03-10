/*
  97, 98, 99,100, 102
["a","b","c","d","f"] -> "e"
 79  81  82  83
["O","Q","R","S"] -> "P"
*/
function findMissingLetter(array){
  return String.fromCharCode(array.map(a=> a.charCodeAt()).filter((b,i,a)=> a[i+1]-a[i] == 2 ? b+1:"")[0]+1)
}
console.log(findMissingLetter(["a","b","c","d","f"]));