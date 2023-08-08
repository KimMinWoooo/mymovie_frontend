
// 검색 기능 : 대소문자 관계없이, enter입력해도 검색 클릭과 동일한 기능
const findTitle = function (movies) {
  // input값 가져와서 title과 비교하기
  let search = document.getElementById("search-input").value.toLowerCase();

  // 버튼 클릭이나 엔터 키 입력되었을 때 실행
  // 검색 검사
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

// 이벤트 관리
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

// main
loadmovies().then((movies) => {
  movieData(movies);
  displaymovies(movies);
  setEventListeners(movies);
  orderByTitle(movies);
  orderByRate(movies);
  orderByVote(movies);
  orderByCountry(movies);
});

// 알파벳 순서에 따른 정렬 함수
function orderByTitle(movies) {
  const element = document.getElementById("filter-title");
  element.addEventListener("click", function () {
    const lastChar = element.textContent.charAt(element.textContent.length - 1);
    movies.sort(function (a, b) {
      if (a.title && b.title) {
        return lastChar === "▼"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
      return 0;
    });
    displaymovies(movies);
    changeArrow(element);
  });
}
// 나라에 따른 영화 분류 함수
function orderByCountry(movies) {
  const dropdown = document.getElementById("select-country");

  dropdown.addEventListener("change", function () {
    const selectedOption = dropdown.options[dropdown.selectedIndex].value;

    const filterMovies = movies.filter(function (movie) {
      let language = movie.original_language;

      if (selectedOption === "korea" && language === "ko") {
        return movie;
      } else if (selectedOption === "america" && language === "en") {
        return movie;
      } else if (selectedOption === "japan" && language === "ja") {
        return movie;
      } else if (
        selectedOption === "etc" &&
        language !== "ko" &&
        language !== "en" &&
        language != "ja"
      ) {
        return movie;
      } else if (selectedOption === "all") {
        return movie;
      }
    });
    displaymovies(filterMovies);
  });
}

// 평점에 따른 정렬 함수
function orderByRate(movies) {
  const element = document.getElementById("filter-rate");
  element.addEventListener("click", function () {
    const lastChar = element.textContent.charAt(element.textContent.length - 1);
    movies.sort(function (a, b) {
      return lastChar === "▼"
        ? a.vote_average - b.vote_average
        : b.vote_average - a.vote_average;
    });
    displaymovies(movies);
    changeArrow(element);
  });
}
// 투표수에 따른 정렬 함수
function orderByVote(movies) {
  const element = document.getElementById("filter-vote");
  element.addEventListener("click", function () {
    const lastChar = element.textContent.charAt(element.textContent.length - 1);
    movies.sort(function (a, b) {
      return lastChar === "▼"
        ? a.vote_count - b.vote_count
        : b.vote_count - a.vote_count;
    });
    displaymovies(movies);
    changeArrow(element);
  });
}

function changeArrow(element) {
  const lastChar = element.textContent.charAt(element.textContent.length - 1);
  const newStr =
    lastChar === "▼"
      ? element.textContent.slice(0, -1) + "▲"
      : element.textContent.slice(0, -1) + "▼";
  element.textContent = newStr;
}