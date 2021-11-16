function calcAge(){
    // 현재연도, 출생연도 입력 
    const current_Year = prompt("현재연도를 입력하세요","2021");
    var birthYear = prompt("출생연도를 입력하세요","1990");
    var Age; 

    //계산
    Age = current_Year - birthYear + 1

    //출력
    document.getElementById("result").innerHTML= "나이는 " + Age + "세 입니다.";
    

}