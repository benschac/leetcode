const enumeratePrimes = (n) => {
  const primes = [];
  const cache = {};

  function isPrime(n) {
    if (cache[n]) {
      return true;
    }

    if (n === 1 || n === 2 || n === 3) {
      return true;
    }

    if (n % 2 === 0) {
      return false;
    }

    for (let i = primes[primes.length - 1]; i < n; i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      cache[i] = true;
      primes.push(i);
    }
  }

  return Object.keys(cache);
};

console.log(enumeratePrimes(71));
