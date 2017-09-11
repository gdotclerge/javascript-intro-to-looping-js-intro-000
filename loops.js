function forLoop(array){
  for (var i = 0; i < 25; i++){
    item = i === 1 ? `I am ${i} strange loop.` : `I am ${i} strange loops.`;
    array.push(item);
  }
  return array
}


function whileLoop(n){
  while (n > 0){
    console.log(--n)
  }
  return "done"
}
