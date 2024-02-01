//유저 값 입력
//add버튼 추가,
//delete 버튼 삭제
//check버튼은 할일 완료 (밑줄그음) true (끝남)/ false(안끝남)
//진행중 끝남 탭을 누르면, 언더바가 이동
//끝난 텝은, 끝난 아이템만, 진행중 탭은 진행중인것만 (필터링)
//전체탭은 전체아이템

let taskInput = document.getElementById("task-input");

let AddButton = document.getElementById("add");

let taskList = [];
AddButton.addEventListener("click", addTask);

function addTask() {
  let task = {
    id: random_id(),
    taskContent: taskInput.value,
    isComplete: false,
  };

  taskList.push(task);
  render();
  taskInput.value = "";
}

function render() {
  let result = "";
  for (let i = 0; i < taskList.length; i++) {

    if(taskList[i].isComplete == true) {
        result += `<div class="task">
        <div class="task-done">${taskList[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
            <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
        </div>
    </div>`
    }else{
        result += `<div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
            <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
        </div>
</div>`;
    }


    
  }

  document.getElementById("task-board").innerHTML = result;
}

function toggleComplete(id) {
  for(let i=0; i<taskList.length; i++){
    if(taskList[i].id == id){
        taskList[i].isComplete = !taskList[i].isComplete;
        break;
    }
  }
  render();
}

function random_id() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function deleteTask(id) {
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList.pop(taskList[i]);
            break;
        }
    }
    render();
}