import React from 'react';

const toDoList = [
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

function App() {
  return (
    <div>
      <h1>To-Do List</h1>
      <ul>{toDoList.map(function (item) {
        return <li key={item.objectID}>{item.title}</li>;
      })}</ul>
    </div>
  );
}

export default App;
