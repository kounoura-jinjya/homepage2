const fades = document.querySelectorAll('.fade');

function checkFades() {
  const trigger = window.innerHeight * 0.85;
  fades.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkFades);
checkFades();