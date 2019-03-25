const API_KEY = '34a7c03b3599476f92bf8a2fdcb30f15';
const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

window.addEventListener('load', () => {
  fetchNews();
});

async function fetchNews() {
  const result = await fetch(URL);
  const news = await result.json();

  const main = document.querySelector('main');

  if (news && news.articles && news.articles.length) {
    news.articles.forEach(article => {
      const articleElement = document.createElement('news-article');
      articleElement.article = article;
      main.appendChild(articleElement);
    });
  }
}
