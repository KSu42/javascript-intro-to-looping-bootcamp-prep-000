function forLoop(array) {
  for (let i = 1; i < 26; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push("I am " + i + " strange loops.")
    }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    n -= 1;
    console.log(n);
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.shift
  } while (array.length > 1 && maybeTrue());
  return array;
}