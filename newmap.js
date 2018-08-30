function map(arr, callback){
  var newArray = [];
  for(var i = 0; i < arr.length; i++){
   newArray.push(callback(arr[i]))
  }
  console.log(newArray)
}


var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
