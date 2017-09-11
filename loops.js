




function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    console.log(array.pop())
  } (array.length > 0 && maybeTrue());
  return array
}
