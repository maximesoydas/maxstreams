// MaxStream LOGIC

    // Create url categories (2 urls/pages per category)
    // Loop Over each url in URLS_CATEGORY (2 urls) (5movies per page)
    // Return the data of 7 movies from 2 urls in a single object
    // Remove the last two movies of the second url
    // Loop Over Each data/movie
    // create div element for each movie
    // add data/movie image to element
    // add button to trigger modal box
    // add data/movie info to modal box
    // repeat for 4 categories total
    // add best THE highest scored imdb movie



// Create url categories (2 urls/pages per category)


// Initialize the lists
const score_category = []
const animation_category = []
const action_category = []
const bio_category = []

// Append 2 urls per category to the corresponding category list
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
    let BIO_URL = `http://127.0.0.1:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=Biography&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=${i}&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=`;
    bio_category.push(BIO_URL)
}

// Loop Over each url in URLS_CATEGORY (2 urls)

score_url_obj1 = {}
score_url_obj2 = {}

// First Page
    fetch(score_category[0]).then(res => res.json()).then(data=>{
        Object.assign(score_url_obj1, data.results)})
// Second Page
    fetch(score_category[1]).then(res => res.json()).then(data=>{
        Object.assign(score_url_obj2, data.results)})
        
// append data results of each url in an object
data_obj = {score_url_obj1,score_url_obj2}
// console.log(data_obj)





// BEST SCORE MOVIEs CATEGORY

fetch(score_category[0]).then(res => res.json()).then(data=>{
    data_list.push(data.results);
    main0.innerHTML = '';
    data.results.forEach(movie => {
        const {title, image_url, imdb_score, actors} = movie;
        const movieE1 = document.createElement('div');
        movieE1.classList.add('best_movie');
        movieE1.innerHTML = `<button id="myBtn">
        <img src="${image_url}" alt="Image_best">

        <div class="best_movie-info">
        
            <h3>${title}</h3>
            <span class="green">${imdb_score}</span>
            
        </div>
        </button>
        <div id="myModal" class="modal">
        <div class="modal-content">
        <span class="close">x</span>
        <p>ACTORS: <br> ${actors}</p>
        </div>
        </div>         
        `
        main0.appendChild(movieE1)
        click_button()
        data_list[1].length = 1
        })
    })

data_list = []        
for (let x = 0; x < score_category.length; x++) {
    x_url = score_category[x];
    fetch(x_url).then(res => res.json()).then(data=>{
        data_list.push(data.results);
        main1.innerHTML = '';
        data_list[0].forEach(movie => {
            const {title, image_url, imdb_score, actors} = movie;
            const movieE1 = document.createElement('div');
            movieE1.classList.add('movie');
            movieE1.innerHTML = `
            <img src="${image_url}" alt="Image">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="green">${imdb_score}</span>
            </div>
            
            `

            main1.appendChild(movieE1)
            })
        data_list[1]?.forEach(movie => {
            const {title, image_url, imdb_score, actors} = movie;
            const movieE1 = document.createElement('div');
            movieE1.classList.add('movie');
            movieE1.innerHTML = `
        

            <img src="${image_url}" alt="Image">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="green">${imdb_score}</span>
            </div> 
            `
            main1.appendChild(movieE1)
            data_list[1].length = 2
            		// Call the modal box when the button is clicked.
            })
    
        })
}


// ACTION MOVIE CATEGORY


data_list2 = []
for (let x = 0; x < action_category.length; x++) {
    x_url = action_category[x];
    fetch(x_url).then(res => res.json()).then(data=>{
        data_list2.push(data.results);
        main2.innerHTML = '';
        data_list2[0].forEach(movie => {
            const {title, image_url, imdb_score, actors} = movie;
            const movieE2 = document.createElement('div');
            movieE2.classList.add('movie_action');
            movieE2.innerHTML = `
            <img src="${image_url}" alt="Image_action">

            <div class="movie_action-info">
                <h3>${title}</h3>
                <span class="green">${imdb_score}</span>
            </div>
                 
            `
            main2.appendChild(movieE2)
            })
        data_list2[1]?.forEach(movie => {
            const {title, image_url, imdb_score, actors} = movie;
            const movieE2 = document.createElement('div');
            movieE2.classList.add('movie_action');
            movieE2.innerHTML = `
            <img src="${image_url}" alt="Image_action">

            <div class="movie_action-info">

                <h3>${title}</h3>
                <span class="green">${imdb_score}</span>
            </div>
                 
            `

            main2.appendChild(movieE2)
            data_list2[1].length = 2
            		// Call the modal box when the button is clicked.
            })
        })
}



// BIOGRAPHY MOVIE CATEGORY


data_list3 = []
for (let x = 0; x < bio_category.length; x++) {
    x_url = bio_category[x];
    fetch(x_url).then(res => res.json()).then(data=>{
        data_list3.push(data.results);
        main3.innerHTML = '';
        data_list3[0].forEach(movie => {
            const {title, image_url, imdb_score, actors} = movie;
            const movieE2 = document.createElement('div');
            movieE2.classList.add('movie_biography');
            movieE2.innerHTML = `
            <img src="${image_url}" alt="Image_biography">

            <div class="movie_biography-info">

                <h3>${title}</h3>
                <span class="green">${imdb_score}</span>
            </div>
                 
            `

            main3.appendChild(movieE2)
            })
        data_list3[1]?.forEach(movie => {
            const {title, image_url, imdb_score, actors} = movie;
            const movieE2 = document.createElement('div');
            movieE2.classList.add('movie_biography');
            movieE2.innerHTML = `
            <img src="${image_url}" alt="Image_biography">

            <div class="movie_biography-info">
            
                <h3>${title}</h3>
                <span class="green">${imdb_score}</span>
            </div>
                  
            `

            main3.appendChild(movieE2)
            data_list3[1].length = 2
            		// Call the modal box when the button is clicked.
            })
        
        })
}


// ANIMATIONs MOVIE CATEGORY


data_list4 = []
for (let x = 0; x < animation_category.length; x++) {
    x_url = animation_category[x];
    fetch(x_url).then(res => res.json()).then(data=>{
        data_list4.push(data.results);
        main4.innerHTML = '';
        data_list4[0].forEach(movie => {
            const {title, image_url, imdb_score, actors} = movie;
            const movieE2 = document.createElement('div');
            movieE2.classList.add('movie_animation');
            movieE2.innerHTML = `
            <img src="${image_url}" alt="Image_animation">

            <div class="movie_animation-info">
                <h3>${title}</h3>
                <span class="green">${imdb_score}</span>
            </div>
            
            `

            main4.appendChild(movieE2)
            })
        data_list4[1]?.forEach(movie => {
            const {title, image_url, imdb_score, actors} = movie;
            const movieE2 = document.createElement('div');
            movieE2.classList.add('movie_animation');
            movieE2.innerHTML = `
            <img src="${image_url}" alt="Image_animation">

            <div class="movie_animation-info">
                <h3>${title}</h3>
                <span class="green">${imdb_score}</span>
            </div>  
            `

            main4.appendChild(movieE2)
            data_list4[1].length = 2
            		// Call the modal box when the button is clicked.
            })
        })
}





function click_button(){
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
                // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
        }   
}