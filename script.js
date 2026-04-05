
function loginSystem() {
  const username = document.getElementById('username')?.value
  const password = document.getElementById('password')?.value

  if (!username || !password) {
    Swal.fire('Warning', 'Isi semua field!', 'warning')
    return
  }

  if (username === 'Admin' && password === '12345') {
    localStorage.setItem('login', 'true')

    Swal.fire({
      icon: 'success',
      title: 'Login berhasil',
      timer: 1500,
      showConfirmButton: false
    }).then(() => {
      window.location.href = "diskon.html"
    })
  } else {
    Swal.fire('Error', 'Login gagal', 'error')
  }

  if (window.location.pathname.includes("diskon.html")) {
  if (localStorage.getItem('login') !== 'true') {
    window.location.href = "index.html"
  }
}
}

function hitungDiskon(total) {
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

function hitungDiskonBelanja() {
  const barang1 = Number(document.getElementById('barang1')?.value) || 0
  const barang2 = Number(document.getElementById('barang2')?.value) || 0
  const barang3 = Number(document.getElementById('barang3')?.value) || 0
  const barang4 = Number(document.getElementById('barang4')?.value) || 0
  const barang5 = Number(document.getElementById('barang5')?.value) || 0

  const total = barang1 + barang2 + barang3 + barang4 + barang5

  if (total === 0) {
    Swal.fire('Warning', 'Masukkan minimal 1 barang', 'warning')
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

function logout() {
  localStorage.removeItem('login')
  window.location.href = "index.html"
}