function sum() {
    let sum = 0
    for (const num of arguments) {
      sum += num
    }
    console.log(sum)
  }
  
  sum(1, 2, 7);
  sum(1, 4);
  sum(11);
  sum(10, 3, 6, 7, 9);