import react from "react";

function AddTodoForm() {
    return (
    <form>
        <label htmlFor="todoTitle">Anything else you want to add?</label>
        <br></br>
        <input id="todoTitle" type="text"></input>
        <br></br>
        <button type="submit">Add</button>
    </form>
);
}

export default AddTodoForm;