//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// hamburger
const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});

//klik di luar hamburger
window.addEventListener('click', function (e) {
    if(e.target != hamburger & e.target != navmenu) {
        hamburger.classList.remove('hamburger-active');
        navmenu.classList.add('hidden');
    }
})

//dark mode
const darktoggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darktoggle.addEventListener('click', function () {
    if(darktoggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!( 'theme' in localStorage) && window.matchMedia ('(prefes-color-scheme: dark)').matches)) {
    darktoggle.checked = true;
} else {
    darktoggle.checked = false;
}


//statistic 
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const observerOptions = {
        root: null, // Mengamati seluruh viewport
        threshold: 0.5, // Elemen terlihat setidaknya 50%
    };

    const startCounting = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute("data-target");
                const speed = 100; // Kecepatan animasi

                // Reset angka sebelum mulai menghitung lagi
                counter.innerText = "0";

                const updateCount = () => {
                    const count = +counter.innerText;
                    const increment = Math.ceil(target / speed);

                    if (count < target) {
                        counter.innerText = count + increment;
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
            }
        });
    };

    const observer = new IntersectionObserver(startCounting, observerOptions);

    counters.forEach((counter) => {
        observer.observe(counter);
    });
});

//

