let rand_num=0;
let result = document.getElementById('play-res');

let play_button = document.getElementById('play-btn').addEventListener("click", Play);

let Chance = document.getElementById('play-chance');
let Reset_button = document.getElementById('reset-btn').addEventListener("click", Reset);

let Input = document.getElementById('user-input')
Input.addEventListener('focus', function() {Input.value=""});

let history= [];
let chances=5;
let game_over=false;

function CreateNum(){
    let rand_num = Math.floor(Math.random()*100+1);
    
}


function Reset() {
    CreateNum();
    chances=5;
    history.splice(0,history.length);
    Chance.textContent="남은 기회 : 5";
    result.textContent="리셋됨"

}

function Play() {
    let user_input=Input.value;

    if(history.includes(user_input)){
        result.textContent = "이미 사용한 숫자는 입력 불가능합니다.";
        return;
    }
    
    if(user_input < 1 || user_input > 99) {
        result.textContent = "1이상 100미만의 숫자만 입력 가능";
        return;
    }

    chances--;

    Chance.textContent = `남은 기회 : ${chances}`;
    history.push(user_input);
    if(user_input) {
        
        if(user_input < rand_num){
            result.textContent= "Up!!";
        }
        if(user_input > rand_num) {
            result.textContent = "Down!!";

        }
        if(user_input == rand_num) {
            result.textContent = "Correct !!";

        }
    }
    if(chances < 1){
        game_over=true;
    }

    if(game_over){
        Chance.textContent = "게임 오버!!";
        let play_button = document.getElementById('play-btn').disabled=true;
        result.textContent = `정답은 ${rand_num}`;
    }
}

CreateNum();