//import { jsx } from "react/jsx-runtime";
//import { DevEnvironment } from "vite";
import "./style.css";

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
let stringbasic = JSON.stringify(toDoList);
localStorage.setItem("tasksBasic", stringbasic);

  const tasksLocalStorage = localStorage.getItem("tasks");
   if(tasksLocalStorage === null){
    toDoList = toDoListBackup;
    }
    else {
    toDoList = JSON.parse(tasksLocalStorage);
    }



//TEST
let doneList = [
   new Task("open to-do", false)
];

let doneListBackup = [
    new Task("open to-do", false)
];



    const createHtmlTask = () => {
    const mainList = document.getElementById("list");
    mainList.innerHTML = " "; //Tömmer listan vid förändringen

        toDoList.forEach((task, i) => {

        const containerItem = document.createElement("li");
        const taskName = document.createElement("h2");
        const statusText = document.createElement("p");
        const statusCheck = document.createElement("input");

        containerItem.className = "Task";
        taskName.innerHTML = task.task;
        statusText.innerHTML = task.isDone;
        statusCheck.type = "checkbox";

    
        statusCheck.addEventListener("click", () => {

        toDoList[i].isDone = true;
        doneList.push(task);
        localStorage.setItem("DONE", JSON.stringify(doneList));
        createHtmlDONE();
        
       toDoList.splice(task, 1);
       localStorage.setItem("tasks",JSON.stringify(toDoList));

        createHtmlTask();
       });
       
       containerItem.appendChild(taskName);
       containerItem.appendChild(statusText);
       containerItem.appendChild(statusCheck);
       document.body.appendChild(containerItem);
       mainList.appendChild(containerItem);
    

    });
}




    const stringLocal = localStorage.getItem("DONE");
    if (stringLocal === null){
        doneList = doneListBackup;
    }
    else {
      doneList = JSON.parse(stringLocal);
    }
    

    //console.log(doneList.length);
   //const createDoneList = () => {
  //  const mainListDone = document.getElementById("listtwo");
    
const createHtmlDONE = () => {
    const mainListDone = document.getElementById("listtwo");
   mainListDone.innerHTML = " "; //Tömmer listan vid förändringen


    doneList.forEach((done) => {

        const containerItemDone = document.createElement("li");
        const taskNameDone = document.createElement("h2"); 

        containerItemDone.className = "Task";
        taskNameDone.innerHTML = done.task;

          containerItemDone.appendChild(taskNameDone);
          document.body.appendChild(containerItemDone);
          mainListDone.appendChild(containerItemDone);

      //createDoneList();
    });

}
       
     //  containerItemDone.appendChild(taskNameDone);
     //  document.body.appendChild(containerItemDone);
      // mainListDone.appendChild(containerItemDone);
    //});

//}

 createHtmlTask();
createHtmlDONE();
//createDoneList();