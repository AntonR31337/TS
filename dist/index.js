const [min, max] = process.argv.slice(2);
const a = Number(min);
const b = Number(max);
if (isFinite(a) && isFinite(b)) {
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
    ;
}
else {
    console.log("Вы ввели неверное число");
}
function isPrime(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
;
