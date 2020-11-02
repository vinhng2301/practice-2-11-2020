function checkNumber() {
    let n = document.getElementById("number").value;
    console.log(n)
    if (n % 2 !== 1) {
        alert("Nhập lại số khác")
    }
}