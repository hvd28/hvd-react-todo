import react from "react";
import TodoListItem from "./TodoListItem";

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
        <ul>{todoList.map((item) =>
            <TodoListItem todo={item} key={item.id} />
        )}
        </ul>
    );
}

export default TodoList;