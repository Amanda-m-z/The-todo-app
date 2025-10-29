//import { jsx } from "react/jsx-runtime";
//import { DevEnvironment } from "vite";
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
//let stringbasic = JSON.stringify(toDoList);
//localStorage.setItem("tasksBasic", stringbasic);

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

//Submit
const submitButton = (e) => {
    e.preventDefault();

    const newTaskInput = document.getElementById("taskInput").value;
    
    const newTask = new Task (newTaskInput, false);
    toDoList.push(newTask);


    localStorage.setItem("tasks", JSON.stringify(toDoList));
    console.log("Du har lagt till något");
    
    createHtmlTask();
}

//Testar här
const myForm = document.getElementById("form");
myForm.addEventListener("submit", submitButton);
//console.log(myForm);
//const clickButton = document.getElementById("Button");
//clickButton.addEventListener("click", submitButton);

//clickButton.addEventListener(
  //  "submit",
   // function(event) {
    //  event.preventDefault();

//    const newTaskInput = document.getElementById("taskInput").value;
    
  //  const newTask = new Task (newTaskInput, false);
   // toDoList.push(newTask);


//    localStorage.setItem("tasks", JSON.stringify(toDoList));
  //  console.log("Du har lagt till något");
    
   // createHtmlTask();
   // }
//);
//myForm.addEventListener("sumbit", submitButton);


    const createHtmlTask = () => {
    const mainList = document.getElementById("list");
    mainList.innerHTML = " "; //Tömmer listan vid förändringen


        toDoList.forEach((task, i) => {

        const containerItem = document.createElement("li");
        const taskName = document.createElement("h2");
        const statusText = document.createElement("p");
        const statusCheck = document.createElement("input");
        //Testa
        const arrowDown = document.createElement("button");
        const arrowUpp = document.createElement("button");
        containerItem.className = "Task";
        taskName.innerHTML = task.task;
        statusText.innerHTML = task.isDone;
        statusCheck.type = "checkbox";
        //testa
        arrowDown.innerHTML = "NER";
        arrowUpp.innerHTML = "UPP";

        arrowDown.addEventListener("click", () => {
            console.log("Du aktiverade metoden");
        
        if(toDoList[i+1] == null)
        {
            console.log("NULL")
        }
        else {
        //testar
        console.log(toDoList[i].task);
        const x = toDoList[i];
        console.log(x);
        toDoList[i] = toDoList[i+1];
        console.log(toDoList[i]);
        toDoList[i+1] = x;
        console.log(toDoList[i]);
        }

        //console.log("Här är test" + toDoList[i].task);
        localStorage.setItem("tasks",JSON.stringify(toDoList));
        createHtmlTask();
        //localStorage.setItem("DONE", JSON.stringify(doneList));
    });
    arrowUpp.addEventListener("click", () => {
            console.log("Du aktiverade metoden");
        
       if(toDoList[i-1] == null)
        {
            console.log("NULL")
        }
        else {
        //testar
        console.log(toDoList[i].task);
        const x = toDoList[i];
        console.log(x);
        toDoList[i] = toDoList[i-1];
        console.log(toDoList[i]);
        toDoList[i-1] = x;
        console.log(toDoList[i]);
        }

        //console.log("Här är test" + toDoList[i].task);
        localStorage.setItem("tasks",JSON.stringify(toDoList));
        createHtmlTask();
        //localStorage.setItem("DONE", JSON.stringify(doneList));
    });
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
       
       //Test
       console.log(toDoList.length);
       containerItem.appendChild(arrowDown);
       containerItem.appendChild(arrowUpp);

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
     
const createHtmlDONE = () => {
    const mainListDone = document.getElementById("listtwo");
   mainListDone.innerHTML = " "; //Tömmer listan vid förändringen


    doneList.forEach((done, i) => {

        const containerItemDone = document.createElement("li");
        const taskNameDone = document.createElement("h2"); 

        containerItemDone.className = "Task";
        taskNameDone.innerHTML = done.task;

        containerItemDone.appendChild(taskNameDone);
        document.body.appendChild(containerItemDone);
        mainListDone.appendChild(containerItemDone);
    
        //Testar
        taskNameDone.addEventListener("click", () => {
            doneList[i].isDone = false;
            toDoList.push(done);
            localStorage.setItem("tasks", JSON.stringify(toDoList));
            createHtmlTask();

            
            doneList.splice(i, 1);
            localStorage.setItem("DONE",JSON.stringify(doneList));
            createHtmlDONE();
        })
        
    });

}

createHtmlTask();
createHtmlDONE();
