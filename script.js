// === TOGGLE MENU HP ===
const tombolBuka = document.getElementById('bukaMenu');
const menuUtama = document.getElementById('menuUtama');

tombolBuka.addEventListener('click', () => {
    menuUtama.classList.toggle('aktif');
});

// === TUTUP MENU KALAU KLIK LINK ===
const daftarLink = menuUtama.querySelectorAll('a');
daftarLink.forEach(link => {
    link.addEventListener('click', () => {
        menuUtama.classList.remove('aktif');
    });
});

// === ANIMASI SCROLL MUNCUL ===
const semuaBagian = document.querySelectorAll('section');

function cekPosisi() {
    semuaBagian.forEach(bagian => {
        let posisiAtas = bagian.getBoundingClientRect().top;
        let tampilan = window.innerHeight / 1.2;

        if(posisiAtas < tampilan) {
            bagian.style.opacity = '1';
            bagian.style.transform = 'translateY(0)';
        }
    });
}

// Kasih gaya awal buat animasi
semuaBagian.forEach(bagian => {
    bagian.style.opacity = '0';
    bagian.style.transform = 'translateY(30px)';
    bagian.style.transition = 'all 0.8s ease';
});

window.addEventListener('scroll', cekPosisi);
window.addEventListener('load', cekPosisi);

// === FORM KIRIM PESAN ===
const form = document.getElementById('formPesan');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ Pesan berhasil dikirim! Terima kasih sudah menghubungi.');
    form.reset();
});
