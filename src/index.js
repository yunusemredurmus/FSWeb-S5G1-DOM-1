const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')

const navbar = document.querySelector('nav');
const basliklar = navbar.querySelectorAll('a');
for (let i = 0; i < basliklar.length; i++) {
  basliklar[i].classList.add('italic');
}
basliklar[0].textContent = siteContent.nav["nav-item-1"]
basliklar[1].textContent = siteContent.nav["nav-item-2"]
basliklar[2].textContent = siteContent.nav["nav-item-3"]
basliklar[3].textContent = siteContent.nav["nav-item-4"]
basliklar[4].textContent = siteContent.nav["nav-item-5"]
basliklar[5].textContent = siteContent.nav["nav-item-6"]


const logoimg = document.querySelector('#logo-img');

logoimg.src = siteContent.images['logo-img']

const content = document.querySelector('.cta');
const contentbaslik = document.querySelector('.cta-text h1')
contentbaslik.textContent = siteContent.cta['h1']
contentbaslik.style.color = "black";
contentbaslik.style.fontWeight = "bold";

const butonyazi = document.querySelector('.cta-text button')
butonyazi.textContent = siteContent.cta['button']

const contentimg = document.querySelector('#cta-img')
contentimg.setAttribute("src", "http://localhost:9000/img/cta.png")

const h4Etiketleri = document.querySelectorAll('.main-content .top-content .text-content h4');

h4Etiketleri.forEach((h4Etiketi, index) => {
  if (index === 0) {
    h4Etiketi.textContent = siteContent["ana-içerik"]["özellikler-h4"];
    h4Etiketi.nextElementSibling.textContent = siteContent["ana-içerik"]["özellikler-içerik"];
  } else if (index === 1) {
    h4Etiketi.textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
    h4Etiketi.nextElementSibling.textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
  }

});
const h4Etiketleri2 = document.querySelectorAll('.main-content .bottom-content .text-content h4');
h4Etiketleri2.forEach((etiket, index) => {
  if (index === 0) {
    etiket.textContent = siteContent["ana-içerik"]["servisler-h4"];
    etiket.nextElementSibling.textContent = siteContent["ana-içerik"]["servisler-içeriği"];
  } else if (index === 1) {
    etiket.textContent = siteContent["ana-içerik"]["vizyon-h4"];
    etiket.nextElementSibling.textContent = siteContent["ana-içerik"]["vizyon-içeriği"];
  }

});



const middleimg = document.querySelector(".middle-img")
middleimg.setAttribute("src", "http://localhost:9000/img/accent.png")

const iletisim = document.querySelector(".contact h4")
iletisim.textContent = siteContent["iletisim"]["iletişim-h4"]

const adres = document.querySelectorAll(".contact p")
adres[0].textContent = siteContent["iletisim"]["adres"]
adres[1].textContent = siteContent["iletisim"]["telefon"]
adres[2].textContent = siteContent["iletisim"]["email"]



const footercpy = document.querySelector("footer a")
footercpy.setAttribute("class", "bold")
const copyright = document.querySelector(".bold")
copyright.textContent = "Copyright Bir Şirket Sitesi 2022 "