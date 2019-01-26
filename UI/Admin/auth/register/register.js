// FIXME: FIX THE WIERD POPUP AND ALSO MAKE IT DISSAPPEAR
(function() {
  document.querySelector('.signup__btn').addEventListener('click', function(e) {
    const x = document.querySelector('.signup__message');

    x.className = 'signup__message signup__message--show';
    setTimeout(() => {
      x.className = x.className.replace('show', '');
    }, 3000);

    e.preventDefault();
  });
})();
