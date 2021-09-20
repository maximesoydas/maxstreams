
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
    // http://127.0.0.1:8000/api/v1/titles/?page=2&sort_by=-imdb_score
    let SCORE_URL = `http://127.0.0.1:8000/api/v1/titles/?page=${i}&sort_by=-imdb_score`;
    score_category.push(SCORE_URL)
    // Animation Category
    let ANIMATION_URL = `http://127.0.0.1:8000/api/v1/titles/?genre=animation&page=${i}`;
    animation_category.push(ANIMATION_URL)
    // Action Category
    let ACTION_URL = `http://127.0.0.1:8000/api/v1/titles/?genre=action&page=${i}`;
    action_category.push(ACTION_URL)
    // Biograhy Category
    let DRAMA_URL = `http://127.0.0.1:8000/api/v1/titles/?genre=drama&page=${i}`;
    drama_category.push(DRAMA_URL)
}    

// CALL THE FUNCTION FOR EACH CATEGORY TO RETURN DATA IN CAROUSEL

ShowCategoryData(score_category,scoreSliders, 7);
ShowCategoryData(action_category, actionSliders, 7);
ShowCategoryData(animation_category, animationSliders, 7);
ShowCategoryData(drama_category, dramaSliders, 7);
ShowCategoryData(score_category, bestMovie, 1);

// DEFINE THE AMOUNT OF SCROLL PER CLICK ON THE CAROUSEL BUTTONS
var ImagePadding = 300;

// CALLS EACH MOVIE OF A GIVEN CATEGORY AND RETURNS EACH COVER PICTURE TO ITS CAROUSEL
// ALSO CALLS GETMOVIEDATA FUNCTION 

async function ShowCategoryData(category,div,num_movies) {
    // USE AXIOS TO 'FETCH' DATE FROM TWO URLS
    var resultOne = await axios.get(category[0])
    var resultTwo = await axios.get(category[1])

    movie_list = resultOne.data.results.concat(resultTwo.data.results).splice(0,num_movies)

    movie_list.map(function (movie, index) {

        div.insertAdjacentHTML(
            "beforeend",
            ` 
            <img class="img-${index} slider-img" src="${movie.image_url}" />`
            )
            getMovieData(movie.url,div,index)
    })
    // DEFINE THE QUERY SELECTOR OF THE CAROUSEL AND ADD THE PADDING FOR EACH CLICK
    scrollPerClick = document.querySelector('.img-1').clientWidth + ImagePadding;
} 

// ONCLICK FUNCTION ON COVER PICTURE WHICH CALLS A MODAL CONTAINING THE MOVIE DATA
async function getMovieData(url_movie,div,index){

    var movie = await axios.get(url_movie)
    let selector = `.img-${index}`
    let movieImage = div.querySelector(selector)

    // WHEN CLICK ON IMAGE CALL MODAL FUNCTION WITH MOVIE DATA
    movieImage.addEventListener("click", function(){
        movieDetailsModal(movie.data)
    });
}


function sliderScrollLeft(div,scrollAmount) {

    // ONCLICK SLIDES THE CAROUSEL LEFT (CALLED IN HTML)
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


// GET MODAL HTML ELEMENTS READY FOR THE MODAL FUNCTION
var modal = document.getElementById("myModal");
var moveTitle = document.getElementById("movieTitle");
var moveGenre = document.getElementById("movieGenre");
var moveYear = document.getElementById("movieYear");
var moveScore = document.getElementById("movieScore");
var moveDirector = document.getElementById("movieDirector");
var moveActors = document.getElementById("movieActors");
var moveRated = document.getElementById("movieRated");
var moveLength = document.getElementById("movieLength");
var moveCountry = document.getElementById("movieCountry");
var moveMoney = document.getElementById("movieMoney");
var moveStoryline = document.getElementById("movieStoryline");
var moveImage = document.getElementById('movieImage')


function movieDetailsModal(movie) {

    moveTitle.textContent = movie.title
    moveGenre.textContent = movie.genres
    moveYear.textContent = movie.year
    moveScore.textContent = movie.imdb_score
    moveDirector.textContent = movie.directors
    moveActors.textContent = movie.actors
    moveRated.textContent = movie.avg_vote
    moveStoryline.textContent = movie.description
    moveLength.textContent = movie.duration + ' Minutes'
    moveCountry.textContent = movie.countries
    moveMoney.textContent = movie.budget + ' ' + movie.budget_currency
    moveImage.innerHTML = `<center> <img src='${movie.image_url}' /></center>`
    modal.style.display = "block";
}    

// CLOSE MODAL FUNCTION
function closeModal() {
    modal.style.display='none'
}    

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();        
    }    
}    


//TODO W3C