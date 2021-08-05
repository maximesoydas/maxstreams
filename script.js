const API_URL = "http://127.0.0.1:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=+-imdb_score&title=&title_contains=&writer=&writer_contains=&year=";



const main = document.getElementById('main');
getMovies(API_URL);

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data =>{
        showMovies(data.results);
    })
}


function showMovies(data) {

    main.innerHTML = '';
    data.forEach(movie => {
        const {title, image_url, imdb_score, actors} = movie;
        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML = `
    

        <img src="${image_url}" alt="Image">

        <div class="movie-info">
            <h3>${title}</h3>
            <span class="green">${imdb_score}</span>
        </div>
        <div class="overview">
        ACTORS :
        <br>
            ${actors}
        </div>        
        `
        main.appendChild(movieE1)
    })
}

