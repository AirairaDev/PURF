
// TOMBOL SILANG → ke halaman utama
document.querySelector('.close-btn').addEventListener('click', function () {
    const container = document.querySelector('.login-container');
    container.style.animation = 'fadeOut 0.4s ease forwards';
    setTimeout(() => {
        window.location.href = 'dashboard.html'; // ← UBAH SESUAI FILE ANDA
    }, 400);
});

// TOMBOL LOGIN → popup + ke dashboard
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const container = document.querySelector('.login-container');
    container.style.animation = 'successPulse 0.5s ease';

    setTimeout(() => {
        alert('✅ Login Berhasil!');
        window.location.href = 'dashboard.html'; // ← UBAH SESUAI FILE ANDA
    }, 500);
});