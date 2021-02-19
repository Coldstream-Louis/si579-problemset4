const table = document.getElementById("list");
const addButton = document.getElementById("addButton");

function remove1(){
    const l1 = document.getElementById("listItem-1");
    table.removeChild(l1);
}

function remove2(){
    const l2 = document.getElementById("listItem-2");
    table.removeChild(l2);
}

document.getElementById("hide-backend-button").addEventListener("click", ()=>{
    const backendItems = document.getElementsByClassName("backend");
    for(item of backendItems) {
        item.style.display = "none";
    }
});

document.getElementById("all-button").addEventListener("click", ()=>{
    const backendItems = document.getElementsByClassName("backend");
    for(item of backendItems) {
        item.style.display = "block";
    }
});

addButton.addEventListener("click", () =>{
    const name = document.getElementById("item-name").value;
    const value = document.getElementById("item-value").value;
    const isBackend = document.getElementById("is-backend").checked;
    const newItem = document.createElement("li");
    newItem.className = isBackend? "backend" : "";
    newItem.textContent = name+": ";
    table.appendChild(newItem);
    const progressBar = document.createElement("progress");
    progressBar.setAttribute("max", "100");
    progressBar.value = value;
    newItem.appendChild(progressBar);
    const newButton = document.createElement("button");
    newButton.setAttribute('class', 'remove-button');
    newButton.textContent = 'Remove';
    newItem.appendChild(newButton);
    newButton.addEventListener("click", () => {
        table.removeChild(newItem);
    });
});

