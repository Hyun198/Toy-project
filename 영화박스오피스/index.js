const api_key = `924e226f51dd500f8092112eab54833f`

let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240218`;

let moviesList = [];

const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    moviesList = data.boxOfficeResult.weeklyBoxOfficeList;
    console.log(moviesList);
    render();
}

const render = (time) => {
    let moviesHTML = ``

    moviesHTML = moviesList.map(movie => `
    <section class="movies">
        <img class="movie-img" src="https://i.namu.wiki/i/eTEjTmnJDRyYadOH4ELny3lWLHZXDsYjb1YuxKCgSiQW86GwZG6P6oifgSSz00d3DmW70R7qC8V88s9OKVLqokhYKlNwmpBUCRVT1eisneVBCeeHswNRcpGzgWvBxpEdjedR3une3QiOd7KyVwlUTA.webp" alt=""/>
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

