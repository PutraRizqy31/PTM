let bil1 = document.querySelector("#bil1");
let bill2 = document.querySelector("#bil2");
let hasil = document.querySelector("#hasil");




kali.onclick = function () {
    //alert (bil1.value)
    let a = bil1.value;
    let b = bill2.value;
    let c = a * b;
    hasil.innerHTML = c;
}

bagi.onclick = function () {
    alert ("bagi")
}

tambah.onclick = function () {
    alert ("tambah")
}

kurang.onclick = function () {
    alert ("kurang")
}

