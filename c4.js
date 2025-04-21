const indexPrime = param1 => {

  const arrs = [];

  for (let j = 2; j < Infinity; j++) {
    let count = 0;
    for (let i = 1; i <= j; i++) {
      if (j % i == 0)
        count++;
    }

    if (count == 2) {
      arrs.push(j);
    }

    if (arrs.length === param1) {
      break;
    }
  }

  return arrs[param1 - 1];
}

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));

