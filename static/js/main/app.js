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