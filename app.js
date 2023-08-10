const formDroite=document.querySelector('.droite');
const formGauche=document.querySelector('.gauche');
const hiddenBox=document.querySelector('.hidden-box');
const firstBox=document.querySelector('.firstbox');
const hiddeContent=document.querySelector('.hidde-content');
const content=document.querySelector('.content');


document.querySelector('#btn').onclick=()=>{
    formDroite.classList.toggle('anim');
    formGauche.classList.toggle('anime');
    hiddenBox.classList.toggle('visible');
    firstBox.classList.toggle('visibility');
    hiddeContent.classList.toggle('opa');
    content.classList.toggle('opac');
}
document.querySelector('#btn-2').onclick=()=>{
    formDroite.classList.toggle('anim');
    formGauche.classList.toggle('anime');
    hiddenBox.classList.toggle('visible');
    firstBox.classList.toggle('visibility');
    hiddeContent.classList.toggle('opa');
    content.classList.toggle('opac');
}