// Sayfa ilk yüklendiğinde ne görünsün?
window.onload = function() {
    sayfaGoster('hero'); // İlk açılışta Hero ekranı gelsin
};

function sayfaGoster(id) {
    // 1. Önce bütün sayfaları (class'ı 'sayfa' olanları) gizle
    var sayfalar = document.getElementsByClassName('sayfa');
    for (var i = 0; i < sayfalar.length; i++) {
        sayfalar[i].style.display = 'none';
        sayfalar[i].classList.remove('aktif');
    }

    // 2. Tıkladığımız ID'ye sahip olan sayfayı bul
    var secilenSayfa = document.getElementById(id);
    
    // 3. Onu görünür yap
    if (id === 'hero') {
        secilenSayfa.style.display = 'flex'; // Hero genelde ortalı olduğu için flex
    } else {
        secilenSayfa.style.display = 'block'; // Diğerleri düz block
    }
    
    secilenSayfa.classList.add('aktif');

    // 4. Her tıklamada ekranın en başına çık (Scroll kalmasın)
    window.scrollTo(0, 0);
}
// HTML'deki buton ve menü elementlerini bul
const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('#mobileMenu');

// Butona tıklanınca çalışacak fonksiyon
menuIcon.addEventListener('click', function() {
    // Menüye .active class'ını ekle veya varsa çıkar
    mobileMenu.classList.toggle('active');
});