let currentPage = 1;
let totalPages = 4;
let isVertical = false;

function showPage(num) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  document.getElementById('page' + num).classList.add('active');

  document.querySelectorAll('.page-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  document.querySelectorAll('.page-btn')[num - 1].classList.add('active');

  currentPage = num;

  window.scrollTo(0, 0);
}

function nextPage() {
  if (currentPage < totalPages) {
    showPage(currentPage + 1);
  }
}

function prevPage() {
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
}

function changeFont(type) {
  if (type === "serif") {
    document.body.style.fontFamily = '"Hiragino Mincho ProN", serif';
  } else {
    document.body.style.fontFamily = '"Hiragino Kaku Gothic ProN", sans-serif';
  }
}

function toggleWritingMode() {
  const container = document.querySelector('.container');
  container.classList.toggle('vertical');
  isVertical = !isVertical;
}
