<?php
// Sadece POST ile gelen istekleri işle
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Form verilerini al
    $ad = trim($_POST["ad"]);
    $soyad = trim($_POST["soyad"]);
    $mesaj = trim($_POST["mesaj"]);

    // Kaydedilecek satırı oluştur
    $tarih = date("d.m.Y H:i");
    $satir = "[$tarih] $ad $soyad: $mesaj" . PHP_EOL;

    // mesajlar.txt dosyasına alt alta ekle (FILE_APPEND)
    file_put_contents("mesajlar.txt", $satir, FILE_APPEND);

    echo "<h2>Mesajınız kaydedildi. Teşekkürler, $ad!</h2>";
    echo '<a href="iletisim.html">Geri dön</a>';
} else {
    echo "Geçersiz istek.";
}
?>