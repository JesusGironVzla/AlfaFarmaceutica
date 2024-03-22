let y1 = document.getElementById('y1');
let y2 = document.getElementById('y2');
let y3 = document.getElementById('y3');



window.addEventListener('scroll', () => {
    let value = window.scrollY;

   
    y3.style.left = value * 0.1 + 'px';
    y2.style.right = value * 0.1 +'px';
    y1.style.left = value * 0.2 +'px';
 
});


let logo_black=document.getElementById('logo_black');
let label_toggle=document.getElementById('label_toggle');
let toggle=document.getElementById('toggle');
toggle.addEventListener('change', (event)=>{
let checked=event.target.checked;
document.body.classList.toggle('dark');
if(checked==true){
    label_toggle.innerHTML='<i class="fa-solid fa-sun"></i>';
    label_toggle.style.color="yellow";
    logo_black.src="./img/REDES SOCIALES/logo-alfa-blanco.png";
   
}else{
    label_toggle.innerHTML='<i class="fa-solid fa-moon"></i>';
    label_toggle.style.color="rebeccapurple";
    logo_black.src="./img/logo-para-paginaweb.png";
}

})  

