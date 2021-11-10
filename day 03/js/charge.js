/*
0~7 "미취학아동" - 1000원
8세~13세 미만은 "초등학생" - 2000원
14~19세 "중고학생" - 2500원
20세~ "일반인" : 3000원
*/

var age = prompt("나이를 입력하세요.");
var charge = 0;

if (age == null){
    document.write("입력이 취소되었습니다.");
}
else{
if(age >= 0 && age < 8){
    document.write("<p> 미취학 아동입니다.</p>");
    charge = 1000;
}
else if(age >= 8 && age < 14){
    document.write("<p> 초등학생입니다.</p>");
    charge = 2000;
}
else if(age >= 14 && age < 20){
    document.write("<p> 중고등학생입니다.</p>");
    charge = 2500;
}
else if(age >=20) {
    document.write("<p> 성인입니다.</p>");
    charge = 3000;
}
else{
    document.write ("<p> 입력 범위를 초과했습니다. </p>")
}
document.write ("<p>입장료는 <span class='access'>" + charge + "원</span> 입니다.</p>")}