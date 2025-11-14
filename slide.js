// Slides automáticos da galeria de projetos
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImageDesktop();
}, 5000)

function nextImageDesktop(){
    count++;
    if(count>10){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

// Slide automático da galeria mobile
let conta = 1;
document.getElementById("radio-mob1").checked = true;

setInterval(function() {
    nextImageMobile();
}, 5000);

function nextImageMobile() {
    conta++;
    if (conta > 9) {   //APENAS 9 radios
        conta = 1;
    }
    document.getElementById("radio-mob" + conta).checked = true;
}
