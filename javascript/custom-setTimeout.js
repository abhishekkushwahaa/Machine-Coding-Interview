function customSetTimeout(fn, delay) {
  const start = Date.now();

  function check() {
    if (Date.now() - start >= delay) {
      fn();
    } else {
      setImmediate(check);
    }
  }

  check();
}

// Example usage:
customSetTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
