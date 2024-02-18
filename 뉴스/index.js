const api_key = `cbf51c2e05b8463fa355ed9a4dbe97a8`
let news = []
const LatestNews = async () => {
    url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`);
    const response = await fetch(url)
    const data = response.json();
    console.log(data.articles);

}

LatestNews();



