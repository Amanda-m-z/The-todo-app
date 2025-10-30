//import { jsx } from "react/jsx-runtime";
//import { DevEnvironment } from "vite";
//import { jsx } from "react/jsx-runtime";
import "./style.scss";

class Task {
    task;
    isDone;
    
    constructor(task, isDone) {
        this.task = task,
        this.isDone = isDone;
    }
}

let toDoListBackup = [
    new Task ("eat breakfast", false),
    new Task ("brush teeth", false),
    new Task ("wash dishes", false),
    new Task ("pack backpack", false),
    new Task ("get dressed", false),
    new Task ("go to school", false),
];

let toDoList = [
    new Task ("eat breakfast", false),
    new Task ("brush teeth", false),
    new Task ("wash dishes", false),
    new Task ("pack backpack", false),
    new Task ("get dressed", false),
    new Task ("go to school", false),
];


const tasksLocalStorage = localStorage.getItem("tasks");
 if (tasksLocalStorage === null){
    toDoList = toDoListBackup;
}
 else{
    toDoList = JSON.parse(tasksLocalStorage);
 }

//Submit
const submitButton = (e) => {
    e.preventDefault();

    const newTaskInput = document.getElementById("taskInput").value;
    
    const newTask = new Task (newTaskInput, false);
    toDoList.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(toDoList));    
    createHtmlTask();
}


const myForm = document.getElementById("form");
myForm.addEventListener("submit", submitButton);

const createHtmlTask = () => {
    
    const mainList = document.getElementById("list");
    mainList.innerHTML = " "; //Tömmer listan vid förändringen
    const mainListDone = document.getElementById("listtwo");
    mainListDone.innerHTML = " "; //Tömmer listan vid förändringen
        
    toDoList.forEach((task, i)  => {

    //toDoList = JSON.parse(localStorage.getItem("tasks"));
        
       if(toDoList[i].isDone == false){
       const containerItem = document.createElement("li");
       const taskName = document.createElement("h3");
       const statusCheck = document.createElement("input");
       const buttonDiv = document.createElement("div");
       const arrowDown = document.createElement("button");
       const arrowUpp = document.createElement("button");
 
       containerItem.className = "Task";
       taskName.innerHTML = task.task;
       statusCheck.type = "checkbox";
       buttonDiv.className = "navButton"
       arrowDown.innerHTML = "NER";
       arrowUpp.innerHTML = "UPP";

        containerItem.appendChild(statusCheck);
        containerItem.appendChild(taskName);
        buttonDiv.appendChild(arrowDown);
        buttonDiv.appendChild(arrowUpp);
        containerItem.appendChild(buttonDiv);
        //containerItem.appendChild(arrowDown);
        //containerItem.appendChild(arrowUpp);
        mainList.appendChild(containerItem);

        statusCheck.addEventListener("click", () => {
        toDoList[i].isDone = true;
        localStorage.setItem("tasks", JSON.stringify(toDoList));
        toDoList = JSON.parse(localStorage.getItem("tasks"));
         createHtmlTask();
        });

        arrowDown.addEventListener("click", () => {
        
        if(toDoList[i+1] == null)
        {
            toDoList[i] = toDoList[i];
        }
        else {
           const x = toDoList[i];
           toDoList[i] = toDoList[i+1];
           toDoList[i+1] = x;
          }
        
        localStorage.setItem("tasks",JSON.stringify(toDoList));
        createHtmlTask();        
    });
        
    arrowUpp.addEventListener("click", () => {
        
       if(toDoList[i-1] == null)
        {
         toDoList[i-1] = toDoList[i-1];
        }
        else {
        const x = toDoList[i];
        toDoList[i] = toDoList[i-1];
        toDoList[i-1] = x;
        }
        localStorage.setItem("tasks",JSON.stringify(toDoList));
        createHtmlTask();
    });
    }
    else {
        const containerItemDone = document.createElement("li");
        const taskNameDone = document.createElement("h3"); 

        containerItemDone.className = "Task";
        taskNameDone.innerHTML = task.task;

        containerItemDone.appendChild(taskNameDone);
        document.body.appendChild(containerItemDone);
        mainListDone.appendChild(containerItemDone); 

         taskNameDone.addEventListener("click", () => {
         toDoList[i].isDone = false;
         localStorage.setItem("tasks", JSON.stringify(toDoList));
         
         createHtmlTask();
        });
    }
    });
}
createHtmlTask();
