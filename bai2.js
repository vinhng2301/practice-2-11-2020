function checkPrime() {
    let n = document.getElementById("number").value;

    for (let i = 2 ; i <= Math.sqrt(n) ; i++) {
        if (n % i === 0 || n < 2) {
            return document.getElementById("result").innerHTML = "Không phải số nguyên tố"
        }
    }
    return document.getElementById("result").innerHTML = "Là số nguyên tố";
}
