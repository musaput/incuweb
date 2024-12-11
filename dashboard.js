// Mengatur event listener untuk tombol Logout
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', function() {
    window.location.href = 'login.html';
});

// Element dashboard untuk disembunyikan ketika form administrasi dibuka
const dashboardTitle = document.querySelector('.dashboard-title');
const buttonContainer = document.querySelector('.button-container');
const sensorContainer = document.querySelector('.sensor-container');
const notice = document.querySelector('.notice');

// Menampilkan form administrasi saat tombol "Start" ditekan
const startButton = document.getElementById('startButton');
const adminForm = document.getElementById('adminForm');
startButton.addEventListener('click', function() {
    adminForm.style.display = 'block';  // Tampilkan form administrasi
    dashboardTitle.style.display = 'none';  // Sembunyikan judul dashboard
    buttonContainer.style.display = 'none';  // Sembunyikan tombol awal
    sensorContainer.style.display = 'none';  // Sembunyikan bagian sensor
    notice.style.display = 'none';  // Sembunyikan notifikasi
});

// Menangani tombol "Submit" pada form administrasi
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function() {
    const tanggal = document.getElementById('tanggal').value;
    const user = document.getElementById('user').value;
    const merek = document.getElementById('merek').value;
    const type = document.getElementById('type').value;
    const serial = document.getElementById('serial').value;
    
    if (tanggal && user && merek && type && serial) {
        alert(`Data disubmit:\nTanggal: ${tanggal}\nUser: ${user}\nMerek: ${merek}\nType: ${type}\nSerial Number: ${serial}`);
        adminForm.style.display = 'none';  // Sembunyikan form setelah submit
        dashboardTitle.style.display = 'block';  // Tampilkan kembali dashboard
        buttonContainer.style.display = 'flex';
        sensorContainer.style.display = 'block';
        notice.style.display = 'block';
    } else {
        alert("Please fill in all fields!");
    }
});