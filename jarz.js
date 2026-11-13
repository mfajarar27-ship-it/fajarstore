
// SL KHUSUS STOK - JAVASCRIPT

const LINKS = {
  stok: "https://whatsapp.com/channel/0029VawGbVY7T8bTPQv7O41K",

  jarz: "https://whatsapp.com/channel/0029VbDYIOZJJhzdsYqdH43n",

  wawa1: "https://wa.me/6285641037895",

  wawa2: "https://wa.me/6285881745185",

  tiktok: "https://www.tiktok.com/@fajar.store.real1?_r=1&_t=ZS-9BMJOHebjds"
};

// Menampilkan tahun otomatis
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Menghubungkan semua tombol dengan link
document.querySelectorAll("[data-link]").forEach((card) => {
  const key = card.dataset.link;

  if (LINKS[key]) {
    card.href = LINKS[key];
  }
});

// Efek animasi ketika tombol diklik
document.querySelectorAll(".link-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.97)";

    setTimeout(() => {
      card.style.transform = "";
    }, 150);
  });
});
