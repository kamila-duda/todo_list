{
    let tasks = [];
    let hideShowButtonFlag = false;

    const deleteTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1),
        ];
        displayList();
    };
    const toggleTaskDone = (taskIndex) => {
        
        tasks = [
            ...tasks.slice(0, taskIndex),
            {
                ...tasks[taskIndex],
                done: !tasks[taskIndex].done,
            },
            ...tasks.slice(taskIndex + 1),
        ];
        displayList();
    }
    
    const markAllTasksDone = () => {
        tasks = tasks.map((task) => ({
            ...task,
            done: true,
        }));

        displayList();
    };

    const toggleHideDoneTasks = () => {
        console.log(tasks)
        hideShowButtonFlag = !hideShowButtonFlag;
        displayList();
    };
    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".tasks__deleteButton");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                deleteTask(taskIndex);
            });
        });
    };

    const bindToggleDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".tasks__checkButton");

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });
    };
    const displayTask = () => {
        const taskToHTML = task => `
        <li class="tasks__item${task.done && hideShowButtonFlag ? "  tasks__item--hide" : ""} "><button class="tasks__checkButton"> ${task.done ? "&#x2713" : ""} </button><span ${task.done ? "style=\"text-decoration: line-through\"" : ""} class="tasks__text">${task.content}</span><button class="tasks__deleteButton"><i class="icon-trash"></i></button></li>`;
        const tasksElement = document.querySelector(".tasks");
        tasksElement.innerHTML = tasks.map(taskToHTML).join("");
        };

    const showButtons = () => {
        const buttonElement = document.querySelector(".buttons");

        if (!tasks.length) {
            buttonElement.innerHTML = "";
            return;
        }
        buttonElement.innerHTML = `
        <button class="buttons__button toggleHideDoneTasks">
        ${hideShowButtonFlag ? "Pokaż" : "Ukryj"} ukończone</button>
        <button class="buttons__button markAllDone"
        ${tasks.every(({done}) => done) ? "disabled" : ""}>
        Ukończ wszystkie</button>`;
    };
    const bindButtonsEvents = () => {
        const markAllDoneButton = document.querySelector(".markAllDone");
        if (markAllDoneButton){
            markAllDoneButton.addEventListener("click", markAllTasksDone);
        };
        const toggleHideDoneTasksButton = document.querySelector(".toggleHideDoneTasks");
        if(toggleHideDoneTasksButton){
            toggleHideDoneTasksButton.addEventListener("click", toggleHideDoneTasks);
        };     
    };

    const addTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            {
                content: newTaskContent
            },
        ];
        displayList();
    };

    const displayList = () => {
        displayTask();
        bindRemoveEvents();
        bindToggleDoneEvents();
        showButtons();
        bindButtonsEvents();
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        const newTaskElement = document.querySelector(".form__item");
        const newTaskContent = newTaskElement.value.trim();
        if(newTaskContent !== "") {
            addTask(newTaskContent);
            newTaskElement.value = "";
        }
        newTaskElement.focus();
        
    };

    const form = document.querySelector(".form");
    form.addEventListener("submit", onSubmitForm);
}
