const loginSystem = function (username,password) {
    if (username !== 'Admin') {
        return "Username salah"
    } else if (password !== '12345') {
        return "Password salah"
    } return "Login berhasil"
}

const handleLogin = function() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const loginCheck = loginSystem(username,password)

    if(loginCheck === 'Login berhasil') {
        Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            text: loginCheck,
            timer: 1500,
            showConfirmButton: false
        })
        setTimeout(() => {
            window.location.href = "diskon.html"
        }, 1500)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'gagal',
            text: loginCheck
        })
    }
}

// DIskon Belanja 

const hitungDiskon = function(total) {
    let diskon = 0
    let status = "Tidak dapat diskon"

    if (total >= 200000) {
        diskon = total * 0.2
        status = "Diskon 20%"
    } else if (total >= 100000) {
        diskon = total * 0.1
        status = "Diskon 10%"
    }

    return {
        total,
        diskon,
        totalBayar: total - diskon,
        status
    }
}
const hitungDiskonBelanja = function() {
    const barang1 = Number(document.getElementById('barang1').value) || 0
    const barang2 = Number(document.getElementById('barang2').value) || 0
    const barang3 = Number(document.getElementById('barang3').value) || 0
    const barang4 = Number(document.getElementById('barang4').value) || 0
    const barang5 = Number(document.getElementById('barang5').value) || 0

    const total = barang1 + barang2 + barang3 + barang4 + barang5

    if (total === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Masukkan minimal 1 barang'
        })
        return
    }

    const hasil = hitungDiskon(total)

    Swal.fire({
        icon: 'success',
        title: 'Struk Belanja 🧾',
        html: `
            <p>Total: Rp ${hasil.total}</p>
            <p>Diskon: Rp ${hasil.diskon}</p>
            <p>Total Bayar: Rp ${hasil.totalBayar}</p>
            <hr>
            <b>${hasil.status}</b>
        `
    })
}

let logout = function () {
    setTimeout(() => {
            window.location.href = "index.html"
        }, 1500)
}