




class Task {
    constructor(){
        this.whatToDO = prompt("What task do you have to do?")
        this.deadline = prompt("What is the task's deadline?")
        this.done = prompt("Is it done yet? true/false")

        console.log(this.whatToDO, this.deadline, this.done)
        appearOnScreen(this.whatToDO, this.deadline, this.done);
    }
}




let addNewButton = document.querySelector(".addNew")
addNewButton.addEventListener("click", addingNewTask);
function addingNewTask(){
    new Task();
}


function appearOnScreen(task, deadline, done){
    let x = document.getElementById("tasksTable").insertRow(-1);
    
    let y = x.insertCell(0);
    let z = x.insertCell(1);
    let v = x.insertCell(2);
    let b = x.insertCell(3);
    y.innerHTML = task;
    z.innerHTML = deadline;
    if(done === "false"){
        v.style.backgroundColor = "red";
    }else if(done === "true") {
        v.style.backgroundColor = "green";
        
    };
    y.style.border = "2px solid black";
    z.style.border = "2px solid black";
    v.style.border = "2px solid black";
    b.style.border = "2px solid black";
    let newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    if(done === true){
        document.querySelector("checkbox").checked = true;
    } else if(done === false){
        document.querySelector("checkbox").checked = false;
    }

    newCheckbox.onclick = () => {
        if(v.style.backgroundColor == "green"){
            v.style.backgroundColor = "red"
        } else if(v.style.backgroundColor == "red"){
            v.style.backgroundColor = "green"
        };
    }
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE";
    deleteButton.onclick = () => {
        x.deleteCell(y);
        x.deleteCell(z);
        x.deleteCell(v);
        x.deleteCell(b);

    }
    
    b.appendChild(deleteButton);

    v.appendChild(newCheckbox);
    



};


function isChecked(){
    if(newCheckbox.checked === true){
        v.style.backgroundColor = "green";
    } else {
        v.style.backgroundColor = "red";
    }
} 

isChecked();
