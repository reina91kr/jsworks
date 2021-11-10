/* 
'y'키를 누르면 "계속 반복",
'n'키를 누르면 "반복 중단"
그 외의 키는 "잘못 입력"

while (true)~ if ~ break (반복 조건문)
*/

while(true){
    var key = prompt("계속 반복할까요?", "y/n");
if(key == 'y' || key == "Y"){
    alert("계속 반복됩니다.");
}
else if (key == 'n' || key == "N"){
    alert("반복을 중단합니다.");
    document.write("프로그램 종료!");
    break;
}
else {
    alert("키를 잘못 눌렀습니다.");
}
}
