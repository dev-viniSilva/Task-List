const ulList = document.querySelector(".list")
const inputTask = document.querySelector(".input")
const addTask = document.querySelector(".bt-add")

addTask.addEventListener("click", function() {
    // 1. pega o valor do input
    const userTask = inputTask.value
    // 2. cria um li
    if(!userTask) {
        return alert("Please add task name.")
    } 
    const newItem = document.createElement("li")
    newItem.classList.add("list-item")
    // 3. cria um elemento pra o texto e coloca o valor dentro
    const newTaskName = document.createElement("h2")
    newTaskName.classList.add("task-name")
    newTaskName.textContent = userTask
    // 4. cria o botão de checkmark
    const divIcons = document.createElement("div")
 
    const checkmark = document.createElement("img")
    checkmark.src = "images/icons8-checkmark-50.png"
    checkmark.classList.add("icon")
    // 5. cria o botão de delete
    const crossmark = document.createElement("img")
    crossmark.src = "images/icons8-cross-mark-50-2.png"
    crossmark.classList.add("icon")
    // 6. adiciona o texto, checkmark e delete dentro do li
    // 7. adiciona o li na ul
    divIcons.appendChild(checkmark)
    divIcons.appendChild(crossmark)
    newItem.appendChild(newTaskName)
    newItem.appendChild(divIcons)
    ulList.appendChild(newItem)
    // 8. limpa o input
    inputTask.value = ''


    checkmark.addEventListener("click", function() {
        // adiciona ou remove a classe .done no li
        newTaskName.classList.remove("task-name")
        newTaskName.classList.toggle("done")
        
    })

    crossmark.addEventListener("click", function() {
       newItem.remove()
    })
})
