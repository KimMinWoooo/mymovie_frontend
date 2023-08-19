// 장르
const genreItems = document.querySelectorAll('.select-genre li');

genreItems.forEach(item => {
  item.addEventListener('click', () => {
    const isActive = item.classList.contains('active'); 

    genreItems.forEach(otherItem => {
      otherItem.classList.remove('active');
    });

    if (!isActive) {
      item.classList.add('active');
    }

    const selectedGenre = item.getAttribute('data-value');
    console.log('선택한 장르:', selectedGenre);
  });
});

// 검색 기능
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function(event) {
  event.preventDefault();

  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.trim().toLowerCase();


  const searchMessage = document.getElementById('search-message');
  if (searchTerm) {
    searchMessage.textContent = `"${searchTerm}" 작품을 찾으시나요?`;
    searchMessage.classList.remove('hidden');
  } else {
    searchMessage.classList.add('hidden');
  }

});

//slider bar
const sliderInner = document.querySelector('.slider-inner');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const slider = document.querySelector('.slider');

const totalItems = document.querySelectorAll('.box').length;
let currentIndex = 0;

leftButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateSlider();
});

rightButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateSlider();
});

function updateSlider() {
    const offset = currentIndex * -230; // 100px box width + 10px margin
    sliderInner.style.transform = `translateX(${offset}px)`;
}

// 초기 슬라이더 위치 설정
updateSlider();