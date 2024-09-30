// Tính tổng các số từ 1 đến 100
function tinhTong100() {
    let sum = 0;
    let i = 1;
    while (i <= 100) {
        sum += i;
        i++;
    }
    document.getElementById("resultTong100").innerHTML = `Tổng các số từ 1 đến 100 là: ${sum}`;
}

// Tính tổng các số chia hết cho 3 bé hơn n
function tinhTongChiaHetCho3() {
    let n = parseInt(document.getElementById("soN").value);
    let sum = 0;
    let i = 1;
    while (i < n) {
        if (i % 3 === 0) {
            sum += i;
        }
        i++;
    }
    document.getElementById("resultTongChiaHetCho3").innerHTML = `Tổng các số chia hết cho 3 nhỏ hơn ${n} là: ${sum}`;
}

// In ra 100 số Fibonacci đầu tiên
function inSoFibonacci() {
    let fibo = [0, 1];
    let i = 2;
    while (i < 100) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        i++;
    }
    document.getElementById("resultFibonacci").innerHTML = `100 số Fibonacci đầu tiên là: ${fibo.join(', ')}`;
}

// Kiểm tra số polinom
function kiemTraSoPolinom() {
    let n = document.getElementById("soPolinom").value;
    let daoNguoc = n.split('').reverse().join('');
    let ketQua = (n === daoNguoc) ? `${n} là số polinom` : `${n} không phải là số polinom`;
    document.getElementById("resultPolinom").innerHTML = ketQua;
}

// Liệt kê các số từ 100 đến 999 có tổng các chữ số chia hết cho 3
function lietKeSo() {
    let ketQua = [];
    let i = 100;
    while (i <= 999) {
        let sum = Math.floor(i / 100) + Math.floor((i % 100) / 10) + (i % 10);
        if (sum % 3 === 0) {
            ketQua.push(i);
        }
        i++;
    }
    document.getElementById("resultLietKeSo").innerHTML = `Các số từ 100 đến 999 có tổng các chữ số chia hết cho 3 là: ${ketQua.join(', ')}`;
}