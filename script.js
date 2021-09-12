const scoreSliders = document.querySelector(".carouselbox")
const actionSliders = document.querySelector(".action-carouselbox")
const animationSliders = document.querySelector(".animation-carouselbox")
const dramaSliders = document.querySelector(".drama-carouselbox")
const bestMovie = document.querySelector(".best-movie")
var scrollPerClick;
var ImagePadding = 20;



// STORE MOVIES IN DIFFRENT CATEGORIES LIST//

const score_category = []
const animation_category = []
const action_category = []
const drama_category = []

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


// CALL THE SCORE FUNCTION //
showScoreMovieData()
showActionMovieData()
showAnimationMovieData()
showDramaMovieData()
showBestMovieData()


async function showBestMovieData(){
    var bestScoreOneRes = await axios.get(score_category[0])
    bestScoreRes = bestScoreOneRes.data.results.splice(0, 1)
    console.log(bestScoreRes)
        
    bestScoreRes.map(function (cur, index) {
        bestMovie.insertAdjacentHTML(
            "beforeend",
             `<img class="img-${index} slider-img" src="${cur.image_url}" />`
        )
    })
}

// CREATE THE SCORE FUNCTION


async function showScoreMovieData(){
    
    var scoreOneRes = await axios.get(score_category[0])
    var scoreTwoRes = await axios.get(score_category[1])
    scoreRes = scoreOneRes.data.results.concat(scoreTwoRes.data.results).splice(0,7)
    console.log(scoreRes)
    
    scoreRes.map(function (cur, index) {
        scoreSliders.insertAdjacentHTML(
            "beforeend",
             `<img class="img-${index} slider-img" src="${cur.image_url}" />`
        )
    })

    scrollPerClick = document.querySelector('.img-1').clientWidth + ImagePadding;
}


// CALL THE SCORE SLIDER BUTTON FUNCTION

var scrollAmount = 0;

function sliderScrollLeft(){
    scoreSliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth"
    });

    if (scrollAmount < 0) {
        scrollAmount = 0;  
    }
}
function sliderScrollRight(){
    if (scrollAmount <= scoreSliders.scrollWidth - scoreSliders.clientWidth) {
        scoreSliders.scrollTo({
            top:0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth",    
        });
    }
}


// CREATE THE SCORE FUNCTION


async function showActionMovieData(){
    
    var actionOneRes = await axios.get(action_category[0])
    var actionTwoRes = await axios.get(action_category[1])
    actionRes =  actionOneRes.data.results.concat(actionTwoRes.data.results).splice(0,7)
    
    actionRes.map(function (cur, index) {
        actionSliders.insertAdjacentHTML(
            "beforeend",
             `<img class="img-${index} slider-img" src="${cur.image_url}" />`
        )
    })

    scrollPerClick = document.querySelector('.img-1').clientWidth + ImagePadding;
}


// CALL THE SCORE SLIDER BUTTON FUNCTION

var actionScrollAmount = 0;

function ActionsliderScrollLeft(){
    actionSliders.scrollTo({
        top: 0,
        left: (actionScrollAmount -= scrollPerClick),
        behavior: "smooth"
    });

    if (actionScrollAmount < 0) {
        actionScrollAmount = 0;  
    }
}
function ActionsliderScrollRight(){
    if (actionScrollAmount <= actionSliders.scrollWidth - actionSliders.clientWidth) {
        actionSliders.scrollTo({
            top:0,
            left: (actionScrollAmount += scrollPerClick),
            behavior: "smooth",    
        });
    }
}



// CREATE ANIMATION 



async function showAnimationMovieData(){
    
    var animationOneRes = await axios.get(animation_category[0])
    var animationTwoRes = await axios.get(animation_category[1])
    animationRes =  animationOneRes.data.results.concat(animationTwoRes.data.results).splice(0,7)
    
    animationRes.map(function (cur, index) {
        animationSliders.insertAdjacentHTML(
            "beforeend",
             `<img class="img-${index} slider-img" src="${cur.image_url}" />`
        )
    })

    scrollPerClick = document.querySelector('.img-1').clientWidth + ImagePadding;
}


// CALL THE SCORE SLIDER BUTTON FUNCTION

var animationScrollAmount = 0;

function AnimationsliderScrollLeft(){
    animationSliders.scrollTo({
        top: 0,
        left: (animationScrollAmount -= scrollPerClick),
        behavior: "smooth"
    });

    if (animationScrollAmount < 0) {
        animationScrollAmount = 0;  
    }
}
function AnimationsliderScrollRight(){
    if (animationScrollAmount <= animationSliders.scrollWidth - animationSliders.clientWidth) {
        animationSliders.scrollTo({
            top:0,
            left: (animationScrollAmount += scrollPerClick),
            behavior: "smooth",    
        });
    }
}


// CREATE DRAMA CATEGORY CAROUSEL



async function showDramaMovieData(){
    
    var dramaOneRes = await axios.get(drama_category[0])
    var dramaTwoRes = await axios.get(drama_category[1])
    dramaRes =  dramaOneRes.data.results.concat(dramaTwoRes.data.results).splice(0,7)
    
    dramaRes.map(function (cur, index) {
        dramaSliders.insertAdjacentHTML(
            "beforeend",
             `<img class="img-${index} slider-img" src="${cur.image_url}" />`
        )
    })

    scrollPerClick = document.querySelector('.img-1').clientWidth + ImagePadding;
}


// CALL THE SCORE SLIDER BUTTON FUNCTION

var dramaScrollAmount = 0;

function DramasliderScrollLeft(){
    dramaSliders.scrollTo({
        top: 0,
        left: (dramaScrollAmount -= scrollPerClick),
        behavior: "smooth"
    });

    if (dramaScrollAmount < 0) {
        dramaScrollAmount = 0;  
    }
}
function DramasliderScrollRight(){
    if (dramaScrollAmount <= dramaSliders.scrollWidth - dramaSliders.clientWidth) {
        dramaSliders.scrollTo({
            top:0,
            left: (dramaScrollAmount += scrollPerClick),
            behavior: "smooth",    
        });
    }
}