const questions = document.querySelectorAll('.question');

questions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    // Close all questions
    questions.forEach((q) => q.setAttribute('aria-expanded', 'false'));

    // Expand the clicked one only if it wasn't already expanded
    if (!isExpanded) {
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
