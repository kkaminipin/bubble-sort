//
//
//
//
//
let sort = [7, 6, 1, 5, 4];
let temp = 0;
for (let i = 0; i < sort.length; i++) {
  for (let j = 0; j < sort.length; j++) {
    console.log(sort);
    if (sort[j] > sort[j + 1]) {
      temp = sort[j];
      sort[j] = sort[j + 1];
      sort[j + 1] = temp;
    }
  }
}

/*
for (let i = 0; i < sort.length; i++) {
  for (let j = 0; j < sort.length; j++) {
    if (sort[j] > sort[j + 1]) {
      temp = sort[j];
      sort[j] = sort[j + 1];
      sort[j + 1] = temp;
    }
    console.log(sort);
  }
}

[1, 6, 5, 4, 7]
j : 1
j + 1 : 2
*/
