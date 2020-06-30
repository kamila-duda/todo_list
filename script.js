{
    const taskListArray = [];
    const clearInput = () => {
        let inputField = document.querySelector(".js-form__item");
        inputField.value = "";
        inputField.focus();
    }
    const checkItem = () => {
        const check = document.querySelectorAll(".taskList__itemCheck");
        const lineThrough = document.querySelectorAll(".taskList__text");
        check.forEach((checkBox, index) => {
            checkBox.addEventListener("click", () => {
                lineThrough[index].classList.toggle("taskList__text--lineThrough"); 
                if(checkBox.innerHTML === ""){
                    checkBox.innerHTML = "&#x2713"
                }else{
                    checkBox.innerHTML = "";
                };
            })
        })
    }
    const deleteItem = (array) => {
        const removes = document.querySelectorAll(".taskList__itemDelete");
        removes.forEach((remove, index) => {
            remove.addEventListener("click", () => {
                array.splice(index, 1);
                displayList();
            })
        })
    }
    const displayList = () => {
        let list = "";
        for (const taskListArrayItem of taskListArray) {
            list += `<li class="taskList__item"><button class="taskList__itemCheck"></button><span class="taskList__text">${taskListArrayItem}</span><button class="taskList__itemDelete"><i class="icon-trash"></i></button></li>`;
        }
        document.querySelector(".js-taskList__element").innerHTML = list;
        clearInput();
        checkItem();
        deleteItem(taskListArray);

    };

    const addTask = () => {
        const newTask = document.querySelector(".js-form__item").value;
        console.log(newTask)
        taskListArray.push(newTask);
        console.log(taskListArray)
        displayList();
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        addTask();

    };

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onSubmitForm);
}
