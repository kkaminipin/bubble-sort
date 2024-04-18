//
//
//
//
//
let sort = [7, 6, 1, 5, 4];
let temp = 0;

for (let i = 0; i < sort.length; i++) {
  for (let j = 0; j < sort.length; j++) {
    if (sort[i] < sort[j]) {
      console.log('i : ', i);
      console.log('j : ', j);
      temp = sort[i];
      sort[i] = sort[j];
      sort[j] = temp;
    }
  }
  console.log(sort);
}

/*
5, 7, 2, 8, 9, 3, 4, 1, 6

5, 2, 7, 8, 9, 3, 4, 1, 6

5, 7, 2, 8, 9, 3, 4, 1, 6

5, 7, 2, 8, 9, 3, 4, 1, 6

5, 7, 2, 8, 3, 9, 4, 1, 6

5, 7, 2, 8, 3, 4, 9, 1, 6

5, 7, 2, 8, 3, 4, 1, 9, 6

5, 7, 2, 8, 3, 4, 1, 6, 9
*/
