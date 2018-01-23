function highAndLow (numbers) {
  let arrnum = numbers.split(' ');
  let orderedvals = arrnum.sort(function (a, b){
    return (a-b);
  })
  return (orderedvals[orderedvals.length - 1].toString() + " " + orderedvals[0].toString());
}

console.log((highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")));
