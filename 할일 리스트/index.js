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
let tabs = document.querySelectorAll(".task-tabs div");

let mode = "all";
let filterList=[];
let doneList=[];


for(let i=1; i<tabs.length; i++){
  tabs[i].addEventListener("click", function(event) {
    filter(event)
  })
}

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

  if(mode === "all"){
    List = taskList;
  }else if(mode==="doing"){
    List= filterList;
  }else if(mode==="done"){
    List= doneList;
  }


  let result = "";
  for (let i = 0; i < List.length; i++) {
    if(List[i].isComplete == true) {
        result += `<div class="task">
        <div class="task-done">${List[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${List[i].id}')">Check</button>
            <button onclick="deleteTask('${List[i].id}')">Delete</button>
        </div>
    </div>`
    }else{
        result += `<div class="task">
        <div>${List[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${List[i].id}')">Check</button>
            <button onclick="deleteTask('${List[i].id}')">Delete</button>
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

function filter(event) {
  console.log("filter");
  mode = event.target.id;
  filterList=[];
  doneList=[];
  if(mode === "all"){
    render();
  }else if(mode==="doing"){
    for(let i=0; i<taskList.length; i++){
      if(taskList[i].isComplete === false){
        filterList.push(taskList[i]);
      }
    }
    render();
  }else if(mode==="done"){
    for(let i=0; i<taskList.length; i++){
      if(taskList[i].isComplete === true){
        doneList.push(taskList[i]);
      }
    } 
    render();
  }
}