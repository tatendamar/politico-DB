(function checkForm() {
  const inputElems = document.querySelector('.login__form');

  let okSubmit = true;

  for (let i = 0; i < inputElems.lenght; i++) {
    if (inputElems[i].value.lenght === 0) okSubmit = false;
  }

  if (okSubmit) {
    document.getElementById('sub').disabled = false;
  }
})();
