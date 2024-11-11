let number = parseInt(prompt("Enter an integer to check if it is a prime number:"), 10);
let resultMessage = "";

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
if (isPrime(number)) {
    resultMessage = `${number} is a prime number.`;
} else {
    resultMessage = `${number} is not a prime number.`;
}

document.getElementById("result").textContent = resultMessage;