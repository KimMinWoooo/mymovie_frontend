const genreItems = document.querySelectorAll('.select-genre li');

genreItems.forEach(item => {
  item.addEventListener('click', () => {
    // 모든 li 요소의 클래스 제거
    genreItems.forEach(item => {
      item.classList.remove('hover');
    });

    // 클릭한 li에 active 클래스 추가
    item.classList.add('hover');

  });
});
