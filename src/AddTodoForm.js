import react from "react";

function AddTodoForm(props) {

    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle);
        event.target.reset();

        props.onAddTodo(todoTitle);
    };

    return (
        <form type="text" onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Anything else you want to add?</label>
            <br></br>
            <input id="todoTitle" type="text" name="title"></input>
            <br></br>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;