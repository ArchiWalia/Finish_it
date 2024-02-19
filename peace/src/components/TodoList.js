import React from 'react';

const TodoList = ({ works, setWorks, setEditTodo }) => {
  const handleComplete = (work) => {
    setWorks(
      works.map((item) => {
        if (item.id === work.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })

    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = works.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };


  const handleDelete = ({ id }) => {
    setWorks(works.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {works.map((work) => (
        <li className="list-item" key={work.id}>
          <input
            type="text"
            value={work.title}
            className={`list ${work.completed ? "complete": ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className="button-complete task-button" onClick={() => handleComplete(work)}>
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button" onClick={() => handleEdit(work)}>
              <i className="fa fa-edit"></i>

            </button>
            <button className="button-delete task-button" onClick={() => handleDelete(work)}>
              <i className="fa fa-trash"></i>

            </button>
          </div>
        </li>
      ))}




    </div>
  );
};

export default TodoList;




  
 