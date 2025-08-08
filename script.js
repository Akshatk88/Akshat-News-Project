const apiKey = '4fed91a1d8ba46539869a1e477ff95bb'; // Replace with your NewsAPI key

async function fetchNews(category) {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    displayNews(data.articles);
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Clear previous articles

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        articleElement.innerHTML = `
            <div class="card">
                <h2>${article.title}</h2>
                <img src="${article.urlToImage}" alt="${article.title}" style="width:100%">
                <p>${article.description}</p>
                <p><button><a href="${article.url}" target="_blank">Read more</a></button></p>
            </div>

            
        `;
        newsContainer.appendChild(articleElement);
    });
}

// Fetch general news on initial load
fetchNews('general');
