function shuffle(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]
  }
  return result;
}

console.log(shuffle([2, 4, 1, 5, 0]))
console.log(shuffle([2, 7, 18, 52, 203]))
