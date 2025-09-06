const envelope = document.getElementById('envelope');
const page = document.getElementById('page');
const polaroid = document.getElementById('polaroid');
const ukhana = document.getElementById('ukhana');

let opened = false;

envelope.addEventListener('click', () => {
  if (!opened) {
    envelope.classList.add('open');

    setTimeout(() => {
      page.classList.add('show');
      polaroid.classList.add('show');
      ukhana.classList.add('show');
    }, 800);

    opened = true;
  }
});
