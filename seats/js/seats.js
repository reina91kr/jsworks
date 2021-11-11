var customerNum = prompt("손님수를 입력하십시오.");
var columnNum = prompt("한 줄에 몇명 앉나요?");
var rowNum = 0;

if(customerNum == null || columnNum == null){
    document.write("입력이 취소되었습니다.");
}
else{
    if(customerNum % columnNum == 0){
    rowNum = customerNum/columnNum;
    }
    else{
    rowNum = parseInt(customerNum / columnNum) + 1;
    }
}

//중첩 for로 자리 배치 

document.write("<table>")
for(var i = 0; i < rowNum; i++){
    document.write("<tr>")
    for(var j = 1; j <= columnNum; j++){
        document.write("<td>")
        var seatNum = i * columnNum + j; // customer = 33 / seat = 35
        document.write("좌석 " + seatNum + " ");
        if(seatNum == customerNum) break;
        document.write("</td>")        
    }
    document.write("</tr>")
}
document.write("</table>")

// 1,2,3,4,5 