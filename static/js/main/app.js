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
