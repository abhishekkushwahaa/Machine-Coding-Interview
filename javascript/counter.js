function makeCounter(initialValue = 0) {
  let count = initialValue
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count

    },
    reset: function() {
      count = initialValue;
      return count;
    },
    getValue: function() {
      return count;
    }
  };
}
