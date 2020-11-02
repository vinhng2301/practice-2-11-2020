function checkPrime2(num) {
    let n = num;
    let i = 2;
    if(n < 2){
        return false;
    }
    while (i <= Math.sqrt(n)){
        if(n % i === 0){
            return false;
        }
        i++;
    }
    return true;
}

let primes = [];
let total = 0;


// function listPrime() {
//     let quant = document.getElementById("quantity")
//     let count = 0;
//     let n = 2;
//     let str = '';
//     while (count < quant){
//         let check = checkPrime2(n);
//         if(check){
//             primes[count] = n;
//             str+= n+',';
//             count++;
//         }
//         n++;
//     }
//     total = count;
//     document.getElementById('list-prime').innerHTML = str;
// }
// listPrime();