const words = ['masa', 'saat', 'telefon', 'televizyon', 'radyo', 'silgi', 'tava', 'yorgan', 'perde', 'duvar', 'zemin', 'merdiven', 'balkon', 'araba', 'bisiklet', 'tren', 'gemi', 'otel', 'restoran', 'market', 'okul', 'hastane', 'park', 'sinema', 'tiyatro', 'konser', 'spor', 'resim', 'roman', 'hikaye', 'makale', 'tez', 'rapor', 'sunum', 'mutluluk', 'dostluk', 'aile', 'evlilik', 'bebek', 'kitap', 'tren', 'orman', 'bulut', 'kar', 'tatil', 'kahve', 'internet', 'futbol', 'basketbol', 'voleybol', 'tenis', 'kayak', 'gezi', 'seyahat', 'meyve', 'sebze', 'kemer', 'kulak', 'kol', 'bacak', 'dizi', 'film', 'sandalye', 'ev', 'bina', 'villa', 'su', 'deniz', 'yol', 'kulak', 'kol', 'dizi', 'film', 'villa', 'su', 'deniz', 'yol'];
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
        if (remainingGuesses < 0) {
            remainingGuesses = 0;
            document.getElementById('message').textContent = 'Oyunu kaybettiniz. Doğru kelime: ' + targetWord;
            document.getElementById('letterInput').disabled = true;
            document.querySelector('button').disabled = true;
            return;
        }
        document.getElementById('remainingGuesses').textContent = 'Kalan Tahmin Hakkı: ' + remainingGuesses;
        updateHangmanImage();
    }

    if (remainingGuesses === 0) {
        document.getElementById('message').textContent = 'Oyunu kaybettiniz. Doğru kelime: ' + targetWord;
        document.getElementById('letterInput').disabled = true;
        document.querySelector('button').disabled = true;
        return;
    }

    if (!document.getElementById('wordToGuess').textContent.includes('_')) {
        document.getElementById('message').textContent = 'Tebrikler! Kazandınız!';
        document.getElementById('letterInput').disabled = true;
        document.querySelector('button').disabled = true;
    }
}

function updateHangmanImage() {
    hangmanStage++;
    const hangmanImage = document.getElementById('hangmanImage');
    hangmanImage.src = `https://cdn.pixabay.com/photo/2018/05/07/10/48/hangman-3386637_960_720.png`;
}

displayWord();
document.getElementById('remainingGuesses').textContent = 'Kalan Tahmin Hakkı: ' + remainingGuesses;
