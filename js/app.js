const API_KEY = `c2a82b1d98684d80b7e9f2b56b0ba546`;

const loadNews = () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.articles));
}

const displayNews = allNews => {
    const newsContainer = document.getElementById('news-container');
    allNews.forEach(news => {
        const article = document.createElement('article');
        article.classList.add('single-news');
        article.innerHTML = `
        <img id="news-image" src="${news.urlToImage ? news.urlToImage : 'Image Not Found'}" alt="" height="200px">
        <h1 id="title">${news.title}</h1>
        <p id="description">${news.description}</p>
        <p id="author">Author: ${news.author}</p>
        `;
        newsContainer.appendChild(article);
    })
}

loadNews();