
function isPrime(num) {

    prime = true
    count = 2
    sqrt = Math.sqrt(num) + 1;

    if (num == 1 || num == 0 || num < 0) {
        prime = false
    } else {
        while (prime && count <= sqrt){
            console.log( num + " and " + count  + " is " + num % count)
            num % count == 0 ? prime = false : 0
            count++
        }
    }

    console.log(prime)


}



isPrime(-41)