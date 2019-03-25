class NewsArticle extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  set article (article) {
    const containerAnchor = document.createElement('a');
    containerAnchor.href = article.url;
    const heading = document.createElement('h2');
    heading.innerText = article.title;
    const img = document.createElement('img');
    img.src = article.urlToImage || '';
    const para = document.createElement('p');
    para.innerText = article.description;
    containerAnchor.appendChild(heading);
    containerAnchor.appendChild(img);
    containerAnchor.appendChild(para);
    this.shadowRoot.appendChild(containerAnchor);
  }
}

customElements.define('news-article', NewsArticle);
