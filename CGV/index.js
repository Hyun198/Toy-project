function calculateTime1() {
    // 사용자로부터 시간과 분을 입력 받음
    var inputHour = document.getElementById("hour").value || 0;
    var inputMin = document.getElementById("min").value || 0;


    // 입력값을 정수로 변환
    var hours = parseInt(inputHour);
    var minutes = parseInt(inputMin);

    // Moment.js를 사용하여 현재 시간을 구하고 사용자 입력값을 뺌
    var userInputTime = moment().set({ 'hour': hours, 'minute': minutes });
    var resultTime = userInputTime.subtract({ hours: 8, minutes: 0 });

    // 결과를 HH시 mm분 형식으로 표시하여 <p> 태그에 출력
    var resultText = "마감 1 계산 결과: " + resultTime.format("HH시 mm분");
    document.getElementById("res_time").innerHTML = resultText;
}

function calculateTime2() {
    // 사용자로부터 시간과 분을 입력 받음
    var inputHour = document.getElementById("hour").value || 0;
    var inputMin = document.getElementById("min").value || 0;

    // 입력값을 정수로 변환
    var hours = parseInt(inputHour);
    var minutes = parseInt(inputMin);

    // Moment.js를 사용하여 현재 시간을 구하고 사용자 입력값을 뺌
    var userInputTime = moment().set({ 'hour': hours, 'minute': minutes });
    var resultTime = userInputTime.subtract({ hours: 7, minutes: 30 });

    // 결과를 HH시 mm분 형식으로 표시하여 <p> 태그에 출력
    var resultText = "마감 2 계산 결과: " + resultTime.format("HH시 mm분");
    document.getElementById("res_time").innerHTML = resultText;
}

async function CallCgv(){
    try{
        const response = await fetch('https://search.naver.com/search.naver?where=nexearch&sm=top_sly.hst&fbm=0&acr=1&ie=utf8&query=cgv+%EA%B9%80%ED%8F%AC%ED%95%9C%EA%B0%95');
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.error(err);
    }
}