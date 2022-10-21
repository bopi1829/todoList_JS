// Changer le titre de la nav
let navTitle = document.getElementById("nav-title")
navTitle.textContent = "Liste des choses à faire"

// Déclaration du Array todos
let todos = []

// Remise à 0 de la liste // Création d'une fonction resetList()
function resetList() {
    let ul = document.querySelector("ul")
    let lis = document.querySelectorAll("li")
    for (let i = 0; i < lis.length; i++) {
        const allLis = lis[i]
        ul.removeChild(allLis)
    }
}
resetList()

// Fonction addItem() // Pour ajouter un item à la liste
function addItem() {
    let valueInput = document.getElementById("input-todo").value
    //console.log("addItem")
    todos.push(valueInput)
    addItemToNav(valueInput)
    console.log("addItem :", todos)
}

// Fonction addItemToNav() // Ajouter l'item graphiquement
function addItemToNav(item) {
    let ul = document.querySelector("ul")
    let li = document.createElement("li")
    let a = document.createElement("a")

    a.setAttribute("href", "#")
    a.addEventListener("mouseover", function() { selectItem(item) })
    a.textContent = item

    li.appendChild(a)
    ul.appendChild(li)
}

// Fonction selectItem() // Récupère la valeur pour la supprimer
function selectItem(item) {
    document.getElementById("input-todo").value = item
    console.log("selectItem :", item)
}

// Fonction deleteItem() // Pour supprimer un item de la liste
function deleteItem() {
    //console.log("deleteItem")
    let item = document.getElementById("input-todo").value
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i]
        if (item === todo) {
            todos.splice(item, 1)
            deleteItemSelected(item)
        }        
    }
    console.log("deleteItem :", todos)
}

// Fonction deleteItemSelected(item) // Supprimer l'item graphiquement
function deleteItemSelected(item) {
    let ul = document.querySelector("ul")
    let li = document.querySelector("li")
    let a = document.querySelector("a")
    li.removeChild(a)
    ul.removeChild(li)
}

// Fonction deleteAllItems() // Pour supprimer tous les items
function deleteAllItems() {
    todos = []
    deleteAll()
    console.log("deleteAllItems :", todos)
}

// Fonction deleteAll() // Pour supprimer tous les items graphiquement
function deleteAll()  {
    let lis = document.querySelectorAll("li")
    for (let i = 0; i < lis.length; i++) {
        const allLis = lis[i]
        deleteItemSelected(allLis)
    }
}
