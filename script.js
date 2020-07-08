{
    let taskListArray = [];
    let hideShowButtonFlag = false;
    const clearInputText = () => {
        const inputField = document.querySelector(".js-form__item");
        inputField.value = "";
    };

    const checkItem = () => {
        const check = document.querySelectorAll(".taskList__itemCheck");
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
                array = [
                    ...array.splice(index, 1)
                ]
                displayList();
            });
        });
    };
    const onClickHideShowButton = () => {
        if (hideShowButtonFlag) {
            hideShowButton.innerText = "Ukryj ukończone"
            const doneTasks = taskListArray.filter(({ done }) => done);
            for (const doneTask of doneTasks) {
                doneTask.display = true;
            }
            hideShowButtonFlag = false;
        } else {
            hideShowButton.innerText = "Pokaż ukończone";
            const doneTasks = taskListArray.filter(({ done }) => done);
            for (const doneTask of doneTasks) {
                doneTask.display = false;
            }
            hideShowButtonFlag = true;
        }
        displayList();
    }
    const hideShowButton = document.querySelector(".js-taskList__buttonHideShow");
    hideShowButton.addEventListener("click", onClickHideShowButton);
    const checkAllButton = document.querySelector(".js-taskList__buttonCheckAll");
    const onClickCheckAllButton = () => {
        const check = document.querySelectorAll(".taskList__itemCheck");
        for (i = 0; i < check.length; i++) {
            taskListArray[i].done = true;

        };
        checkAllButton.disabled = true;
        displayList();
    };

    checkAllButton.addEventListener("click", onClickCheckAllButton);

    const displayTask = () => {
        let list = "";
        for (const taskListArrayItem of taskListArray) {
            list += `<li ${taskListArrayItem.display ? "class=\"taskList__item\"" : "class=\"taskList__item taskList__item--hide\""} ><input type="button" ${taskListArrayItem.done ? "value =\"&#x2713\"" : ""} class="taskList__itemCheck"></button><span ${taskListArrayItem.done ? "style=\"text-decoration: line-through\"" : ""} class="taskList__text">${taskListArrayItem.content}</span><button class="taskList__itemDelete"><i class="icon-trash"></i></button></li>`;
        };

        document.querySelector(".js-taskList__element").innerHTML = list;
    }
    const showButtons = () => {
        if (taskListArray.length > 0) {
            hideShowButton.style.display = "unset";
            checkAllButton.style.display = "unset";
        }else{
            hideShowButton.style.display = "none";
            checkAllButton.style.display = "none";
        }
    }
    const displayList = () => {
        displayTask();
        clearInputText();
        checkItem();
        deleteItem(taskListArray);
        showButtons();
    };

    const addTask = () => {
        const newTask = document.querySelector(".js-form__item").value.trim();
        if (newTask === "") {
            return;
        };
        taskListArray = [
            ...taskListArray,
            {
                content: newTask,
                done: false,
                display: true,
            },
        ];
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
