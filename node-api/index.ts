import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Kitap nesnesi için tip tanımı
interface Book {
  id: number;
  title: string;
  author: string;
}

// Dizi bu tiple sınırlandırıldı
const books: Book[] = [
  { id: 1, title: "Suç ve Ceza", author: "Dostoyevski" },
  { id: 2, title: "Sefiller", author: "Victor Hugo" },
  { id: 3, title: "1984", author: "George Orwell" },
  { id: 4, title: "Kürk Mantolu Madonna", author: "Sabahattin Ali" },
];

app.get("/", (req: Request, res: Response) => {
  res.send("Kitap API (TypeScript) çalışıyor. /api/books adresine gidin.");
});

// Fonksiyon parametreleri Request/Response tipleriyle sınırlandırıldı
app.get("/api/books", (req: Request, res: Response) => {
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});