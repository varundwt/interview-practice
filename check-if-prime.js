function isPrime(n) {
    if (n <= 1) return false;  // Numbers <= 1 are not prime
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;  // If divisible by i, it's not prime
        }
    }
    return true;  // If no divisors found, it's prime
}

console.log(isPrime(5))
