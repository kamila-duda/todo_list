{
    const taskListArray = [];
    const clearInputText = () => {
        const inputField = document.querySelector(".js-form__item");
        inputField.value = "";
    };

    const checkItem = () => {
        const check = document.querySelectorAll(".taskList__itemCheck");
        const taskListText = document.querySelectorAll(".taskList__text");
        check.forEach((checkBox, index) => {
            checkBox.addEventListener("click", () => {
                taskListArray[index].done ? taskListArray[index].done = false : taskListArray[index].done = true;
               displayList();
            });
        });
    };

    const deleteItem = (array) => {
        const removes = document.querySelectorAll(".taskList__itemDelete");
        removes.forEach((remove, index) => {
            remove.addEventListener("click", () => {
                array.splice(index, 1);
                displayList();
            });
        });
    };

    const displayList = () => {
        let list = "";
        for (const taskListArrayItem of taskListArray) {
            list += `<li class="taskList__item"><input type="button" ${taskListArrayItem.done ? "value =\"&#x2713\"" : ""} class="taskList__itemCheck"></button><span ${taskListArrayItem.done ? "style=\"text-decoration: line-through\"" : ""} class="taskList__text">${taskListArrayItem.content}</span><button class="taskList__itemDelete"><i class="icon-trash"></i></button></li>`;
        };
        document.querySelector(".js-taskList__element").innerHTML = list;
        clearInputText();
        checkItem();
        deleteItem(taskListArray);
    };

    const addTask = () => {
        const newTask = document.querySelector(".js-form__item").value.trim();
        if(newTask === ""){
            return;
        };
        taskListArray.push({
            content: newTask,
            done: false,
        });
        displayList();
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        document.querySelector(".js-form__item").focus();
        addTask();

    };

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onSubmitForm);
}
