const findTitle = function (movies) {
  
  let search = document.getElementById("search-input").value.toLowerCase();

  if (search.length <= 0) {
    alert("검색어를 입력해주세요.");
  } else {
    const filtermovie = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search)
    );

    if (filtermovie.length === 0) {
      alert("검색어에 해당하는 영화가 없습니다.");
    } else {
      displaymovies(filtermovie);
    }
  }
};

function setEventListeners(movies) {
  const form = document.querySelector(".search");
  // 검색창에 입력 수행 시
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    findTitle(movies);
  });
}

window.displayMovies = displaymovies;
window.movieData = movieData;

// main 데이터 갖고오면 여기에 담아지게? ★
loadmovies().then((movies) => {
  movieData(movies);
  displaymovies(movies);
  setEventListeners(movies);
  orderBygenre(movies);
});

// 장르에 따른 영화 분류 함수 -> ★에서 가져오는식
function orderBygenre(movies) {

const dropdown = document.querySelector(".select-genre");

// 장르 선택에 따라 영화 필터링 함수
const filterAndDisplayMovies = (selectedOption, movies) => {
  const filterMovies = movies.filter((movie) => {
    const genres = movie.genres; // 영화 장르 가져오기

    if (selectedOption === "all") {
      return true; 
    } else if (genres.includes(selectedOption)) {
      return true; 
    }

    return false; 
  });

  displaymovies(filterMovies);
};

dropdown.addEventListener("change", function () {
  const selectedOption = dropdown.value;
  filterAndDisplayMovies(selectedOption, movies);
});
};