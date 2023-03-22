import react from "react";

const todoList = [
    {
        id: 1,
        title: 'Read the assigned chapter',
    },
    {
        id: 2,
        title: 'Attend a mentor session or two',
    },
    {
        id: 3,
        title: 'Tackle the homework',
    },
];

function TodoList() {
    return (
        <ul>{todoList.map(function (item) {
            return <li key={item.objectID}>{item.title}</li>;
        })}</ul>
    );
}

export default TodoList;