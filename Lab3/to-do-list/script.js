//delete elements from list
let deleteBtn = document.getElementsByClassName("fa-trash-can");

for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].onclick = function() {
        let liRow = this.parentElement;
        liRow.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul, .fa-square-check');
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}, false);


function addItem() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("input-text").value;
    let t = document.createTextNode(inputValue);

    li.appendChild(t);

    if (inputValue === "") {
        alert("Please, add the work you want to be done");
    } else {
        document.getElementById("item-list").appendChild(li);
    }

    document.getElementById("input-text").value = "";

    let iconTrash = document.createElement("i");
    let iconDone = document.createElement("i");
    iconDone.className = "fa-solid fa-square-check";
    iconTrash.className = "fa-solid fa-trash-can";

    li.appendChild(iconDone);
    li.appendChild(iconTrash);

    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].onclick = function() {
            let liRow = this.parentElement;
            liRow.style.display = "none";
        }
    }



}
