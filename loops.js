




function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.pop()
  } (array.length > 0 && maybeTrue());
  return array
}
