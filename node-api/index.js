const express = require("express");
const app = express();
const PORT = 3000;

// Elle yazılmış (hardcoded) kitap listesi
const books = [
  { id: 1, title: "Suç ve Ceza", author: "Dostoyevski" },
  { id: 2, title: "Sefiller", author: "Victor Hugo" },
  { id: 3, title: "1984", author: "George Orwell" },
  { id: 4, title: "Kürk Mantolu Madonna", author: "Sabahattin Ali" },
];

// Ana sayfa
app.get("/", (req, res) => {
  res.send("Kitap API çalışıyor. Kitaplar için /api/books adresine gidin.");
});

// GET /api/books -> kitap listesini JSON olarak döndür
app.get("/api/books", (req, res) => {
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});