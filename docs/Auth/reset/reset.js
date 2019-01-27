// FIXME: FIX THE WIERD POPUP AND ALSO MAKE IT DISSAPPEAR
(function() {
  document.querySelector('.reset__btn').addEventListener('click', function(e) {
    e.preventDefault();
    const x = document.querySelector('.reset__message');

    x.className = 'reset__message reset__message--show';
    setTimeout(() => {
      x.className = x.className.replace('show', '');
    }, 3000);
  });
})();
