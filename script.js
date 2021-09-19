
// DEFINE THE QUERY SELECTORS (THE HTML 'DIVS' TO MANIPULATE)

const scoreSliders = document.querySelector(".carouselbox")
const actionSliders = document.querySelector(".action-carouselbox")
const animationSliders = document.querySelector(".animation-carouselbox")
const dramaSliders = document.querySelector(".drama-carouselbox")
const bestMovie = document.querySelector(".best-movie")





// CREATE THE CATEGORY URL LISTS
const score_category = []
const animation_category = []
const action_category = []
const drama_category = []

// APPEND CATEGORIES URLS TO THE CORRESPONDING CATEGORIES LIST
for (let i = 1; i < 3; i++) {
    //Best Score Category
    let SCORE_URL = `http://127.0.0.1:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=${i}&rating=&rating_contains=&sort_by=+-imdb_score&title=&title_contains=&writer=&writer_contains=&year=`;
    score_category.push(SCORE_URL)
    // Animation Category
    let ANIMATION_URL = `http://127.0.0.1:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=Animation&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=${i}&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=`;
    animation_category.push(ANIMATION_URL)
    // Action Category
    let ACTION_URL = `http://127.0.0.1:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=Action&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=${i}&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=`;
    action_category.push(ACTION_URL)
    // Biograhy Category
    let DRAMA_URL = `http://127.0.0.1:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=Drama&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=${i}&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=`;
    drama_category.push(DRAMA_URL)
}


// CREATE THE CATEGORY DATA LISTS
var scoreRes = [];
var actionRes=[];
var animationRes = [];
var dramaRes = [];
var bestScoreRes = []

// CALL THE FUNCTION FOR EACH CATEGORY TO RETURN DATA IN CAROUSEL

// ShowCategoryData(score_category, scoreRes, scoreSliders, 7);
// ShowCategoryData(action_category, actionRes, actionSliders, 7);
// ShowCategoryData(animation_category, animationRes, animationSliders, 7);
// ShowCategoryData(drama_category, dramaRes, dramaSliders, 7);
// ShowCategoryData(score_category, bestScoreRes, bestMovie, 1);



// CALLS EACH MOVIE OF A GIVEN CATEGORY AND RETURNS EACH COVER PICTURE TO ITS CAROUSEL
// ALSO ADDS ONCLICK FUNCTION ON COVER PICTURE WHICH CALLS A MODAL CONTAINING THE MOVIE DATA

// async function ShowCategoryData(category,movies,div, num_movies) {
//     var resultOne = await axios.get(category[0])
//     var resultTwo = await axios.get(category[1])
//     movies_list = movies
//     // console.log(movies)
//     movies_list = resultOne.data.results.concat(resultTwo.data.results).splice(0,num_movies)

//     movies_list.map(function (cur, index) {
//         console.log(index)
//         div.insertAdjacentHTML(
//             "beforeend",
//             ` 
//             <img class="img-${index} slider-img" src="${cur.image_url}" onclick="movieDetailsModal(movies_list, ${index})" />`
//         )
//     })
//     // DEFINE THE QUERY SELECTOR OF THE CAROUSEL AND ADD THE PADDING FOR EACH CLICK
//     scrollPerClick = document.querySelector('.img-1').clientWidth + ImagePadding;
// } 


// DEFINE THE AMOUNT OF SCROLL PER CLICK ON THE CAROUSEL BUTTONS
var ImagePadding = 300;


// ONCLICK SLIDES THE CAROUSEL LEFT (CALLED IN HTML)
function sliderScrollLeft(div,scrollAmount) {
    div.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth"
    });

    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
}

// ONCLICK SLIDES THE CAROUSEL RIGHT (CALLED IN HTML)
function sliderScrollRight(div,scrollAmount) {
    if (scrollAmount <= div.scrollWidth - div.clientWidth) {
        div.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth",
        });
    }
}


// GET MODAL
var modal = document.getElementById("myModal");
var moveTitle = document.getElementById("movieTitle");
var moveGenre = document.getElementById("movieGenre");
var moveYear = document.getElementById("movieYear");
var moveScore = document.getElementById("movieScore");
var moveDirector = document.getElementById("movieDirector");
var moveActors = document.getElementById("movieActors");
// var moveRated = document.getElementById("movieRated");
// var moveLength = document.getElementById("movieLength");
// var moveCountry = document.getElementById("movieCountry");
// var moveMoney = document.getElementById("movieMoney");
// var moveStoryline = document.getElementById("movieStoryline");

//TODO: more files here ...
// class=ipc-overflowText ipc-overflowText--pageSection ipc-overflowText--height-long ipc-overflowText--long ipc-overflowText--base


function movieDetailsModal(movies, index) {
    //alert('Detail modal ...')
    const movie = movies[index]
    console.log(movie)
    console.log(moveTitle)

    moveTitle.textContent = movie.title
    moveGenre.textContent = movie.genres
    moveYear.textContent = movie.year
    moveScore.textContent = movie.imdb_score
    moveDirector.textContent = movie.directors
    moveActors.textContent = movie.actors

    modal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("myModal").trigger('reset')
        
    }
}











showBestMovieData()
showScoreMovieData()
showActionMovieData()
showAnimationMovieData()
showDramaMovieData()


// THE BEST MOVIE

async function showBestMovieData() {
    var bestScoreOneRes = await axios.get(score_category[0])
    bestScoreRes = bestScoreOneRes.data.results.splice(0, 1)
    console.log(bestScoreRes)
    
    bestScoreRes.map(function (cur, index) {
        bestMovie.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="${cur.image_url}" onclick="movieDetailsModal(bestScoreRes, ${index})" />`
            )
        })
    }



//  BEST SCORE MOVIES CATEGORY

async function showScoreMovieData() {
    var scoreOneRes = await axios.get(score_category[0])
    var scoreTwoRes = await axios.get(score_category[1])
    scoreRes = scoreOneRes.data.results.concat(scoreTwoRes.data.results).splice(0, 7)
    console.log(scoreRes)

    scoreRes.map(function (cur, index) {
        scoreSliders.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="${cur.image_url}" onclick="movieDetailsModal(scoreRes, ${index})" /> `
        )
    })

    scrollPerClick = document.querySelector('.img-1').clientWidth + ImagePadding;
}


// ACTION MOVIES CATEGORY

async function showActionMovieData() {
    var actionOneRes = await axios.get(action_category[0])
    var actionTwoRes = await axios.get(action_category[1])
    actionRes = actionOneRes.data.results.concat(actionTwoRes.data.results).splice(0, 7)

    actionRes.map(function (cur, index) {
        actionSliders.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="${cur.image_url}" onclick="movieDetailsModal(actionRes, ${index})" />`
        )
    })

    scrollPerClick = document.querySelector('.img-1').clientWidth + ImagePadding;
}



// ANIMATION MOVIES CATEGORY

async function showAnimationMovieData() {
    var animationOneRes = await axios.get(animation_category[0])
    var animationTwoRes = await axios.get(animation_category[1])
    animationRes = animationOneRes.data.results.concat(animationTwoRes.data.results).splice(0, 7)

    animationRes.map(function (cur, index) {
        animationSliders.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="${cur.image_url}"onclick="movieDetailsModal(animationRes, ${index})" />`
        )
    })

    scrollPerClick = document.querySelector('.img-1').clientWidth + ImagePadding;
}


//  DRAMA MOVIES CATEGORY 
async function showDramaMovieData() {

    var dramaOneRes = await axios.get(drama_category[0])
    var dramaTwoRes = await axios.get(drama_category[1])
    dramaRes = dramaOneRes.data.results.concat(dramaTwoRes.data.results).splice(0, 7)

    dramaRes.map(function (cur, index) {
        dramaSliders.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="${cur.image_url}"onclick="movieDetailsModal(dramaRes, ${index})" />`
        )
    })

    scrollPerClick = document.querySelector('.img-1').clientWidth + ImagePadding;
}

