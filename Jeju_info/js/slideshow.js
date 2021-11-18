//이미지 선택
var slides = document.querySelectorAll(".slides img");
let current = 0;
let next = document.getElementById("next");
let prev = document.getElementById("prev");

showslides(current); // 호출
next.onclick=nextSlide;
prev.onclick=prevSlide;


function showslides(n){
    for(let i=0; i<slides.length; i++){
    slides[i].style.display="none";
    }
    slides[n].style.display ="block";
}

function nextSlide(){
    if(current < slides.length - 1 ) // 인덱스 번호가 2보다 작으면 (0,1) 
        current += 1;                //1 증가 
    else                             //2 보다 크면 
        current = 0;                 //0 으로 설정 
    showslides(current);
}
function prevSlide(){
    if(current > 0 )
        current -= 1;                
    else                             
        current = slides.length -1 ;                 
    showslides(current);
}