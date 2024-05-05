const words = ['kalem', 'masa', 'kapı', 'ayakkabı', 'elbise', 'gözlük', 'saat', 'telefon', 'bilgisayar', 'televizyon', 'radyo', 'çanta', 'anahtar', 'kilit', 'kalemlik', 'silgi', 'cetvel', 'makas', 'bıçak', 'tabak', 'bardak', 'fincan', 'tencere', 'tava', 'peçete', 'havlu', 'yatak', 'yorgan', 'yastık', 'koltuk', 'halı', 'perde', 'duvar', 'zemin', 'tavan', 'merdiven', 'duş', 'lavabo', 'tuvalet', 'balkon', 'bahçe', 'ağaç', 'kuş', 'köpek', 'kedi', 'balık', 'araba', 'bisiklet', 'tren', 'uçak', 'gemi', 'otobüs', 'otel', 'restoran', 'market', 'okul', 'hastane', 'park', 'müze', 'sinema', 'tiyatro', 'konser', 'spor', 'dans', 'müzik', 'resim', 'heykel', 'yazı', 'şiir', 'roman', 'hikaye', 'haber', 'makale', 'tez', 'rapor', 'sunum', 'not', 'ödev', 'sınav', 'diploma', 'başarı', 'mutluluk', 'aşk', 'dostluk', 'aile', 'evlilik', 'bebek', 'çocuk', 'gençlik', 'yaşlılık', 'kitap', 'defter', 'tren', 'dal', 'yaprak', 'orman', 'otobüs', 'gökyüzü', 'güneş', 'ay', 'yıldız', 'rüzgar', 'bulut', 'yağmur', 'kar', 'soğuk', 'sıcak', 'tatil', 'araştırma', 'çalışma', 'yemek', 'kahve', 'çikolata', 'internet', 'futbol', 'basketbol', 'voleybol', 'tenis', 'kayak', 'koşu', 'yüzme', 'gezi', 'seyahat', 'doğa', 'şehir', 'köy', 'meyve', 'sebze', 'eşya', 'mobilya', 'kemer', 'saç', 'diş', 'göz', 'kulak', 'burun', 'kol', 'bacak', 'dizi', 'film', 'roman', 'masa', 'sandalye', 'ev', 'bina', 'villa', 'çanta', 'su', 'deniz', 'yol', 'tatil', 'şehir', 'kıyafet', 'ayakkabı', 'gözlük', 'çanta', 'cep telefonu', 'saç', 'göz', 'kulak', 'kol', 'dizi', 'film', 'villa', 'su', 'deniz', 'yol', 'şehir', 'kıyafet']; // Kelimeler listesi
let targetWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let remainingGuesses = 6;
let hangmanStage = 0;

function displayWord() {
    let displayedWord = '';
    for (let letter of targetWord) {
        if (guessedLetters.includes(letter)) {
            displayedWord += letter + ' ';
        } else {
            displayedWord += '_ ';
        }
    }
    document.getElementById('wordToGuess').textContent = displayedWord;
}

function checkLetter() {
    const letter = document.getElementById('letterInput').value.toLowerCase();
    if (letter.length !== 1 || !/^[a-zA-Z]+$/.test(letter)) {
        alert('Lütfen tek harf girin.');
        return;
    }
    if (guessedLetters.includes(letter)) {
        alert('Bu harfi zaten denediniz.');
        return;
    }
    guessedLetters.push(letter);
    displayWord();
    document.getElementById('guessedLetters').textContent = 'Tahmin Edilen Harfler: ' + guessedLetters.join(', ');

    if (!targetWord.includes(letter)) {
        remainingGuesses--;
        document.getElementById('remainingGuesses').textContent = 'Kalan Tahmin Hakkı: ' + remainingGuesses;
        updateHangmanImage();
    }

    if (remainingGuesses <== 0) {
        document.getElementById('message').textContent = 'Oyunu kaybettiniz. Doğru kelime: ' + targetWord;
        document.getElementById('letterInput').disabled = true;
    }

    if (!document.getElementById('wordToGuess').textContent.includes('_')) {
        document.getElementById('message').textContent = 'Tebrikler! Kazandınız!';
        document.getElementById('letterInput').disabled = true;
    }
}

function updateHangmanImage() {
    hangmanStage++;
    const hangmanImage = document.getElementById('hangmanImage');
    hangmanImage.src = `https://cdn.pixabay.com/photo/2018/05/07/10/48/hangman-3386637_960_720.png`;
}

displayWord();
document.getElementById('remainingGuesses').textContent = 'Kalan Tahmin Hakkı: ' + remainingGuesses;
