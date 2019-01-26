(function() {
  const inputElems = document.querySelector('.login__form');

  let okSubmit = true;

  for (let i = 0; i < inputElems.length; i++) {
    if (inputElems[i].value.length === 0) okSubmit = false;
  }

  if (okSubmit) {
    document.getElementById('sub').disabled = false;
  }
})();
