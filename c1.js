function sum() {

  console.log(Array.from(arguments).reduce((acc, cur) => acc + cur))
}

sum(1, 2, 7);
sum(1, 4);
sum(11);
sum(10, 3, 6, 7, 9);