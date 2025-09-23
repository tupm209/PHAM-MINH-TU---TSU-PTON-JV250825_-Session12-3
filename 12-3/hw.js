let count = 1;

for (let i = 2; i <= 100; i++) {
  if (i === 2 || i === 3 || i === 5 || i === 7) {
    console.log(`Số nguyên tố thứ ${count} là ${i}`);
    count++;
  } else if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
    continue;
  } else {
    console.log(`Số nguyên tố thứ ${count} là ${i}`);
    count++;
  }

  if (count === 21) {
    break;
  }
}
