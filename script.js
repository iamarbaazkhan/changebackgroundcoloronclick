const  colorBtn =document.querySelector('.closebtn');
const bodyBcg  = document.querySelector('body');

const colors=['red' ,'yellow' , 'orange' ,'cyan' , 'grey'];


colorBtn.addEventListener('click' , colorChanges);

function colorChanges(){
   let random =Math.floor(Math.random()*colors.length);
   bodyBcg.style.backgroundColor = colors[random];
   
}
 
