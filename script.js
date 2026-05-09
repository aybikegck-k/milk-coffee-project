// 1. Sayfa ilk yüklendiğinde ne görünsün?
window.onload = function() {
    sayfaGoster('hero'); 
};

// 2. Sayfa gösterme fonksiyonun (Dokunmadık)
function sayfaGoster(id) {
    var sayfalar = document.getElementsByClassName('sayfa');
    for (var i = 0; i < sayfalar.length; i++) {
        sayfalar[i].style.display = 'none';
        sayfalar[i].classList.remove('aktif');
    }

    var secilenSayfa = document.getElementById(id);
    
    if (id === 'hero') {
        secilenSayfa.style.display = 'flex'; 
    } else {
        secilenSayfa.style.display = 'block'; 
    }
    
    secilenSayfa.classList.add('aktif');
    window.scrollTo(0, 0);

    // Sayfaya tıklandığında menü açıksa kapansın (Kullanıcı deneyimi)
    document.getElementById('mobileMenu').classList.remove('active');
}

// 3. Hamburger Menü Fonksiyonu (HTML'deki onclick="menuToggle()" ile tam uyumlu)
function menuToggle() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}
document.querySelector('.menu-icon').addEventListener('touchstart', function(e) {
    menuToggle();
});