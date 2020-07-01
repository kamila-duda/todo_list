# To Do List
> Application to create a list of tasks. kamila-duda.github.io/todo_list/

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Status](#status)
* [Contact](#contact)

## General info
You can create your own TO-DO List, check your task and remove when finish.

![homepage screenshot](https://github.com/kamila-duda/todo_list/blob/master/openGraph.JPG?raw=true)

## Technologies
* Html
* Css
* JavaScript

code snippet
```javascript
    const checkItem = () => {
        const check = document.querySelectorAll(".taskList__itemCheck");
        check.forEach((checkBox, index) => {
            checkBox.addEventListener("click", () => {
                taskListArray[index].done ? taskListArray[index].done = false : taskListArray[index].done = true;
                displayList();
            });
        });
    };
```

## Status
Project is: _not finished_.

## Contact
Created by [@Kamila Duda](https://github.com/kamila-duda)
