// console.log(process.argv);
const [min, max] = process.argv.slice(2);
Number(min, max);

const a = Number(min);
const b = Number(max);

if ((a % a == 0) && ( a > 0)){
    for (let i = a; i <= b; i++ ) {
        if (isPrime(i)) {
            console.log(i);
        }
    };
} else {
    console.log("Вы ввели неверное число");
}

function isPrime(num) {
    for ( let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1
};