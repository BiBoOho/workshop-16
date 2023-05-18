const apikey = "373287ee9ef4461d2d10d084c444f468";
let years = "2022";
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&page=1&sort_by=popularity.desc&year=${years}`;

const content = document.getElementById('content');
const urlPoster = `https://image.tmdb.org/t/p/w500/`;

const dropdown = document.getElementById('years');


//ດືງຊໍ້ມູນໜັງ
async function displayMovies(url){
   const response =  await fetch(url);
   const movies = await response.json();

   while(content.firstChild) {
    content.removeChild(content.firstChild);
   }

   movies.results.forEach(data => {
        const moviesEl = document.createElement('div');
        moviesEl.classList.add('movie');
        const title = document.createElement('h2');
        const poster = document.createElement('img');
        title.innerHTML =  `${data.title.substring(0,24)}`;
        poster.src = `${urlPoster}${data.poster_path}`;
        moviesEl.appendChild(title);
        moviesEl.appendChild(poster);
        content.appendChild(moviesEl);
        
   });
}

dropdown.addEventListener('change', () => {
    years = dropdown.value;
    const updateUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&page=1&sort_by=popularity.desc&year=${years}`;
    displayMovies(updateUrl);
});


displayMovies(url);
