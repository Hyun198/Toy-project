const api_key = `924e226f51dd500f8092112eab54833f`
const KMDB_API_KEY = 'Q0YF214E5O2XQR10ZF51'

const today = new Date();
const currentDay = today.getDay();
//일요일로 설정
today.setDate(today.getDate() - currentDay);

const year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

month = month < 10 ? '0' + month : month;
day = day < 10 ? '0' + day : day;
let targetDt = `${year}${month}${day}`;
console.log(targetDt);

let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&weekGb=0&targetDt=${targetDt}`;

let moviesList = [];
let posterList = [];

const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    moviesList = data.boxOfficeResult.weeklyBoxOfficeList;
    console.log(moviesList);

    for (const movie of moviesList) {
        await movieData(movie.movieNm, movie.openDt);
    }
    render();
}

const movieData = async (title, openDt) => {
    const url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&listCount=30&query=${title}&releaseDts=${openDt}&ServiceKey=${KMDB_API_KEY}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.Data && data.Data.length > 0 && data.Data[0].Result && data.Data[0].Result.length > 0) {
        const poster = data.Data[0].Result[0].posters;
        const posterURLs = poster.split('|');
        const firstPosterURL = posterURLs[0];
        // 가져온 포스터를 moviesList에 추가합니다.
        const movie = moviesList.find(movie => movie.movieNm === title);
        if (movie) {
            movie.poster = firstPosterURL;
        }

        console.log(firstPosterURL);
    } else {
        console.log(`No poster found for ${movieId}`);
    }
}

const render = () => {
    let moviesHTML = ``

    moviesHTML = moviesList.map((movie) =>
        `
            <section class="movies">
                <img class="movie-img" src="${movie.poster}" alt=""/>
                <div class="title">
                    ${movie.movieNm}
                </div>
                <p class="rank">박스오피스 순위: ${movie.rank}</p>
                <p class="movie-start">영화 개봉일: ${movie.openDt}</p>
                <p class="movie-audCnt">해당일의 관객수: ${movie.audiCnt} 명</p>
                <p class="movie-audAll">누적 관객수: ${movie.audiAcc} 명</p>
            </section>
        `).join("");

    document.getElementById("movies-board").innerHTML = moviesHTML;
}

getData();




