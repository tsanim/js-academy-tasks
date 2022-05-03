function printPatternOne(length: number): void {
  for (let row = 1; row <= length; row++) {
    console.log(Array.from({ length: row }, (_, index) => index + 1).join(' '));
  }
}

printPatternOne(5);
