// --- Karanlık Mod ---
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Aydınlık Mod"
    : "🌙 Karanlık Mod";
});

// --- Geri Sayım Sayacı ---
// Bitiş tarihini kendi stajının son gününe göre değiştir (YIL, AY-1, GÜN)
const bitisTarihi = new Date(2026, 6, 31, 18, 0, 0); // 31 Temmuz 2026, 18:00

function geriSayimGuncelle() {
  const simdi = new Date();
  const fark = bitisTarihi - simdi;

  if (fark <= 0) {
    document.getElementById("countdown").textContent = "Staj tamamlandı! 🎉";
    clearInterval(zamanlayici);
    return;
  }

  const gun = Math.floor(fark / (1000 * 60 * 60 * 24));
  const saat = Math.floor((fark / (1000 * 60 * 60)) % 24);
  const dakika = Math.floor((fark / (1000 * 60)) % 60);
  const saniye = Math.floor((fark / 1000) % 60);

  document.getElementById("countdown").textContent =
    `${gun}g ${saat}s ${dakika}d ${saniye}sn`;
}

const zamanlayici = setInterval(geriSayimGuncelle, 1000);
geriSayimGuncelle();