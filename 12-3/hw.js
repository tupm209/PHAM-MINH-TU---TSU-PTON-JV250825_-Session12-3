let count = 1;
let i = 0;
while (count <= 20) {
  i++;
  if (i < 2) {
    continue;
  } else if (i === 2 || i === 3 || i === 5 || i === 7) {
    console.log(`Số nguyên tố thứ ${count} là ${i}`);
    count++;
  } else if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
    continue;
  } else {
    console.log(`Số nguyên tố thứ ${count} là ${i}`);
    count++;
  }
}
