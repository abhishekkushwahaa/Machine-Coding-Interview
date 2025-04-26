function diamondPattern() {
  const n = 5;

  // First Half of Diamond
  for (let i = 0; i <= n; i++) {
    let pattern = ""
    // Print Space leading
    for (let space = 1; space <= n - i; space++) {
      pattern = pattern + " "
    }
    // Star Print - via formula: x*row + y
    // i = 1, star = 1 && i = 2, star = 3
    // x+y = 1 && 2x+y = 3 => x=2, y=-1
    for (let star = 1; star <= (2 * i - 1); star++) {
      pattern = pattern + "*"
    }
    console.log(pattern)
  }

  // Second Half of Diamond
  for (let i = n - 1; i >= 1; i--) {
    let pattern = ""
    // Print Space leading
    for (let space = 1; space <= n - i; space++) {
      pattern = pattern + " "
    }
    // Star Print
    for (let star = 1; star <= (2 * i - 1); star++) {
      pattern = pattern + "*"
    }
    console.log(pattern);
  }
}

function diamondNumPattern() {
  const n = 5;

  // Upper half (including the middle row)
  for (let i = 1; i <= n; i++) {
    let pattern = '';
    // Leading spaces
    for (let j = 1; j <= n - i; j++) {
      pattern += ' ';
    }
    // Repeated number i
    for (let j = 1; j <= (2 * i - 1); j++) {
      pattern += i;
    }
    console.log(pattern);
  }

  // Lower half
  for (let i = n - 1; i >= 1; i--) {
    let pattern = '';
    // Leading spaces
    for (let j = 1; j <= n - i; j++) {
      pattern += ' ';
    }
    // Repeated number i
    for (let j = 1; j <= (2 * i - 1); j++) {
      pattern += i;
    }
    console.log(pattern);
  }
}

diamondPattern();
diamondNumPattern();
