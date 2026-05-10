// Sayfa ilk açıldığında hero bölümü gösterilir
window.onload = function () {
    sayfaGoster('hero');
};

// Sayfalar arasında geçiş yapan fonksiyon
function sayfaGoster(id) {

    // Tüm sayfaları seç
    const sayfalar = document.getElementsByClassName('sayfa');

    // Önce bütün sayfaları gizle
    for (let i = 0; i < sayfalar.length; i++) {
        sayfalar[i].style.display = 'none';
        sayfalar[i].classList.remove('aktif');
    }

    // Açılacak sayfayı seç
    const secilenSayfa = document.getElementById(id);

    // Eğer sayfa varsa göster
    if (secilenSayfa) {

        // Hero kısmı flex olduğu için ayrı kontrol
        secilenSayfa.style.display = (id === 'hero') ? 'flex' : 'block';

        // Aktif class ekle
        secilenSayfa.classList.add('aktif');
    }

    // Sayfa geçişinde en üste dön
    window.scrollTo(0, 0);

    // Mobil menü açıksa kapat
    const menu = document.getElementById('mobileMenu');

    if (menu) {
        menu.classList.remove('active');
        menu.style.display = 'none';
    }
}

// Hamburger menüyü aç/kapat
function menuToggle() {

    const menu = document.getElementById('mobileMenu');

    if (!menu) return;

    // Menü açıksa kapat
    if (menu.style.display === 'flex') {

        menu.style.display = 'none';
        menu.classList.remove('active');

    } else {

        // Menü kapalıysa aç
        menu.style.display = 'flex';
        menu.classList.add('active');
    }
}

// Mobil dokunma desteği
document.addEventListener('DOMContentLoaded', function () {

    const icon = document.querySelector('.menu-icon');

    if (icon) {

        icon.addEventListener('touchstart', function (e) {

            // Mobilde çift tıklama sorununu önler
            e.preventDefault();

            menuToggle();

        }, { passive: false });
    }
});