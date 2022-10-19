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
    console.log("addItem")
    todos.push(valueInput)
    addItemToNav(valueInput)
    console.log("addItem :", todos)
}

// Fonction addItemToNav() // Ajouter l'item graphiquement
function addItemToNav(item) {
    let ul = document.querySelector("ul")
    let li = document.createElement("li")
    li.textContent = item
    ul.appendChild(li)
}

// Fonction deleteItem() // Pour supprimer un item de la liste
function deleteItem() {
    console.log("deleteItem")
}

// Fonction deleteAllItems() // Pour supprimer tous les items
function deleteAllItems() {
    console.log("deleteAllItems")
}
