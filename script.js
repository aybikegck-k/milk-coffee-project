// 1. Sayfa ilk yüklendiğinde Hero ekranı gelsin
window.onload = function() {
    sayfaGoster('hero'); 
};

// 2. Sayfa gösterme fonksiyonu
function sayfaGoster(id) {
    var sayfalar = document.getElementsByClassName('sayfa');
    for (var i = 0; i < sayfalar.length; i++) {
        sayfalar[i].style.display = 'none';
        sayfalar[i].classList.remove('aktif');
    }

    var secilenSayfa = document.getElementById(id);
    
    if (secilenSayfa) {
        if (id === 'hero') {
            secilenSayfa.style.display = 'flex'; 
        } else {
            secilenSayfa.style.display = 'block'; 
        }
        secilenSayfa.classList.add('aktif');
    }
    
    window.scrollTo(0, 0);

    // Bir sayfaya tıklandığında mobil menü açıksa kapat
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.remove('active');
        menu.style.display = 'none'; // Mobilde çakışmayı önlemek için zorla kapat
    }
}

// 3. Hamburger Menü Fonksiyonu
function menuToggle() {
    const menu = document.getElementById('mobileMenu');
    
    // Eğer menü şu an gizliyse (display none ise veya active class'ı yoksa)
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        menu.classList.remove('active');
    } else {
        menu.style.display = 'flex'; // Zorla görünür yap
        menu.classList.add('active');
    }
}

// 4. Mobildeki çift tıklama (çakışma) sorununu engellemek için dokunma desteği
document.addEventListener('DOMContentLoaded', function() {
    const icon = document.querySelector('.menu-icon');
    if (icon) {
        // Dokunma başladığında onclick'in çalışmasını engelleyip sadece fonksiyonu çağırıyoruz
        icon.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Bu satır 'gölge' gelip açılmama sorununu çözer
            menuToggle();
        }, {passive: false});
    }
});