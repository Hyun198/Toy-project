const api_key = `cbf51c2e05b8463fa355ed9a4dbe97a8`
let newsList = []
const LatestNews = async () => {
    url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${api_key}`);
    const response = await fetch(url)
    const data = await response.json();
    newsList = data.articles;
    render();
    console.log(newsList);

}

const render = () => {
    let newsHTML = ``

    newsHTML = newsList.map(news => `
        <div class="row news">
                <div class="col-lg-4">
                    <img class="news-img"
                        src=${news.urlToImage}>
                </div>

                <div class="col-lg-8">
                    <h2>${news.title}</h2>
                    <p>
                       ${news.description}
                    </p>
                    <div>
                        ${news.source.name} * ${news.publishedAt}
                    </div>
                </div>

            </div>`
    ).join("");

    document.getElementById('news-board').innerHTML = newsHTML
}


LatestNews();


