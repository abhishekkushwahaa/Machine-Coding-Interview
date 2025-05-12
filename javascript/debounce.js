function debounce(fn, delay) {
  let timeoutId;

  return function(...args) {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function log() {
  console.log("Function executed at", new Date().toISOString());
}

const debouncedLog = debounce(log, 1000);

debouncedLog(); // call 1
debouncedLog(); // call 2 (within 1 second)
debouncedLog(); // call 3 (within 1 second)
