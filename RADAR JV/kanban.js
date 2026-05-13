const cards = document.querySelectorAll('.operation-card');

cards.forEach(card => {

  card.addEventListener('mouseenter',() => {
    card.style.transform = 'scale(1.01)';
  });

  card.addEventListener('mouseleave',() => {
    card.style.transform = 'scale(1)';
  });

});