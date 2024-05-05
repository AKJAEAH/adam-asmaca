// News API'den haberleri çekmek için gerekli değişkenler
const API_KEY = 'YOUR_API_KEY'; // News API'den aldığınız API anahtarı
const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`; // Türkiye haberleri için URL, ülke kodunu değiştirebilirsiniz

// Haberleri çeken fonksiyon
async function getNews() {
    try {
        const response = await fetch(NEWS_URL);
        const data = await response.json();
        return data.articles; // Haberlerin bulunduğu diziyi döndürür
    } catch (error) {
        console.error('Haberler alınırken hata oluştu:', error);
        return []; // Hata durumunda boş bir dizi döndürür
    }
}

// Haberleri gösteren fonksiyon
async function showNews() {
    const haberlerDiv = document.getElementById('haberler');
    const haberler = await getNews();

    if (haberler.length === 0) {
        haberlerDiv.innerHTML = '<p>Haber bulunamadı.</p>';
        return;
    }

    let haberHTML = '';
    haberler.forEach(haber => {
        haberHTML += `
            <div class="haber">
                <h3>${haber.title}</h3>
                <p>${haber.description}</p>
                <a href="${haber.url}" target="_blank">Habere Git</a>
            </div>
        `;
    });

    haberlerDiv.innerHTML = haberHTML;
}

// Sayfa yüklendiğinde haberleri göster
document.addEventListener('DOMContentLoaded', showNews);
