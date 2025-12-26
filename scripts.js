document.addEventListener('DOMContentLoaded', () => {
  iniciarScrollIcones();
  iniciarSlideDesktop();
  iniciarSlideMobile();
  iniciarMenuAtivo();
});

/* ==============================
   Scroll infinito de ícones
============================== */
function iniciarScrollIcones() {
  const elemContainer = document.querySelector('.scroll__container');
  if (!elemContainer) return;

  const elemFilhos = Array.from(elemContainer.children);

  elemFilhos.forEach(item => {
    const elemDuplicado = item.cloneNode(true);
    elemDuplicado.setAttribute('aria-hidden', true); //informa para o leitor de pag que o elemento Duplicado esta oculto e deve ser ignorado.
    elemContainer.appendChild(elemDuplicado);
  });
}

/* ==============================
        Slide Desktop
============================== */
function iniciarSlideDesktop() {
  const radio1 = document.getElementById('radio1');
  if (!radio1) return;

  let count = 1;
  radio1.checked = true;

  setInterval(() => {
    count++;
    if (count > 10) count = 1;
    document.getElementById('radio' + count).checked = true;
  }, 5000);
}

/* ==============================
        Slide Mobile
============================== */
function iniciarSlideMobile() {
  const radioMob1 = document.getElementById('radio-mob1');
  if (!radioMob1) return;

  let conta = 1;
  radioMob1.checked = true;

  setInterval(() => {
    conta++;
    if (conta > 9) conta = 1; //APENAS 9 radios
    document.getElementById('radio-mob' + conta).checked = true;
  }, 5000);
}

/* ==============================
          Menu ativo
============================== */
function iniciarMenuAtivo() {
  const links = document.querySelectorAll('nav a');
  if (!links.length) return;

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('clicado'));
      link.classList.add('clicado');
    });
  });
}
