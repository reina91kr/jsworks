//이미지 넘기기 
var num = 1; //전역 변수
// img1.jpg = "img" + num + ".jpg"

function nextGallery(){
        num++;
        if(num > 7)
            num = 1;
        document.getElementById("pic").src="../jsworks/images/img" + num + ".jpg";
    }

function prevGallery(){
    num--;
    if(num < 1)
        num = 7;
    document.getElementById("pic").src="../jsworks/images/img" + num + ".jpg";
}


