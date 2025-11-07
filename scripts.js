// duplica os icones no scroll horizontal

let elemScroll = document.querySelector('.container-icones');
let elemContainer = document.querySelector('.scroll__container');
let elemFilhos = Array.from(elemContainer.children);

elemFilhos.forEach(item =>{
    let elemDuplicado = item.cloneNode(true);
    elemDuplicado.setAttribute('aria-hidden', true); //informa para o leitor de pag que o elemento Duplicado esta oculto e deve ser ignorado. 
    elemContainer.appendChild(elemDuplicado);   
})
