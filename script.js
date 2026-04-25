const fades = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;

  fades.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add('show');
    }
  });
});