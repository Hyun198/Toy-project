const api_key = `cbf51c2e05b8463fa355ed9a4dbe97a8`
let newsList = []
const menus = document.querySelectorAll(".menu-bar li");
menus.forEach((menu) => menu.addEventListener("click", (e) => getNewsByCategory(e)))

let url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${api_key}`);

let totalResults = 0
let page = 1
const pageSize = 10
const groupSize = 5

const getArticle = async () => {
    try {
        url.searchParams.set("page", page);
        url.searchParams.set("pageSize", pageSize);

        const response = await fetch(url);
        const data = await response.json();

        if (response.status === 200) {
            if (data.articles.length === 0) {
                throw new Error("No result for this search");
            }
            newsList = data.articles;
            totalResults = data.totalResults;
            render();
            paginationRender();
        } else {
            throw new Error(data.message);
        }

    } catch (error) {
        console.log("error", error.message);
        errorRender(error.message);
    }

}

const LatestNews = async () => {

    url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${api_key}`);
    getArticle();
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

const errorRender = (errorMessage) => {
    const errorHTML = `
    <div class="alert alert-danger" role="alert">
        ${errorMessage}
    </div>
    `;
    document.getElementById("news-board").innerHTML = errorHTML;
}


const getNewsByCategory = async (e) => {

    const category = e.target.textContent.toLowerCase();
    url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${api_key}`)
    getArticle();

}


const getNewsbyKeyword = async () => {

    const keyword = document.getElementById("search-input").value;
    url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&q=${keyword}&apiKey=${api_key}`)
    getArticle();


}

const paginationRender = () => {
    //totalResult
    //page
    //groupSize
    //pageSize
    const totalPages = Math.ceil(totalResults / pageSize);
    //pageGroup 
    //last page, firstpage
    const pageGroup = Math.ceil(page / groupSize);
    let lastPage = groupSize * pageGroup;
    //마지막 페이지 그룹이 그룹사이즈보다 작으면
    if (lastPage > totalPages) {
        lastPage = totalPages
    }
    let firstPage = lastPage - (groupSize - 1) <= 0 ? 1 : lastPage - (groupSize - 1);

    let paginationHTML = `
    <li class="page-item"   onclick="moveToPage(${page - 1})">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>`;

    for (let i = firstPage; i <= lastPage; i++) {
        paginationHTML += `
        <li class="page-item ${i === page ? "active" : ''}" page-item active" onclick="moveToPage(${i})"><a class="page-link" href="#">${i}</a></li>
        `;
    };

    paginationHTML += `<li class="page-item" onclick="moveToPage(${page + 1})">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>`;

    document.querySelector('.pagination').innerHTML = paginationHTML

}

const moveToPage = (pageNumber) => {
    page = pageNumber;
    getArticle()
}

LatestNews();



