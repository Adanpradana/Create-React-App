import { useState } from "react";
import Welcome from "../components/Welcome.components";
import React from "react";

const Homepage = () => {
  //fetch API
  const [activity, setActivity] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({});
  const [error, setEerror] = useState("");

  const updateActivity = (event) => {
    event.preventDefault();
    if (!activity) {
      return setEerror("isi dulu brok");
    }
    setEerror("");
    if (edit.id) {
      const updateTodo = {
        ...edit,
        activity,
      };
      const index = todos.findIndex((todo) => {
        return todo.id === edit.id;
      });
      const updateTodos = [...todos];
      updateTodos[index] = updateTodo;

      // update di dalam state array baru, di setTodos
      setTodos(updateTodos);
      return cancelEdit();
    }

    function generateTodoId() {
      return Date.now();
    }
    setTodos([
      ...todos,
      {
        id: generateTodoId(),
        activity,
        done: false,
      },
    ]);
    setActivity("");
  };
  // delete todolistId
  const deleteActivity = (todoId) => {
    // todos.filter atau array.filter untuk memfilter array
    const remove = todos.filter((todo) => todo.id !== todoId);
    setTodos(remove);
    if (edit.id) cancelEdit();
  };

  const editActivity = (todo) => {
    setActivity(todo.activity);
    setEdit(todo);
  };

  const cancelEdit = () => {
    setEdit({});
    setActivity("");
  };

  const ceklist = (todo) => {
    const updateList = {
      ...todo,
      done: todo.done ? false : true,
    };
    const index = todos.findIndex((current) => {
      return current.id === todo.id;
    });
    const updateTodos = [...todos];
    updateTodos[index] = updateList;
    setTodos(updateTodos);
  };
  return (
    <>
      <Welcome children="HOMEPAGE BROK!" />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={updateActivity}>
        <input
          type="text"
          placeholder="Activity"
          value={activity}
          onChange={(event) => {
            setActivity(event.target.value);
          }}
        />
        <button type="submit">{edit.id ? "SAVE" : "ADD"}</button>
        {edit.id && <button onClick={cancelEdit}>CANCEL EDIT</button>}
      </form>
      {todos.length ? (
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <input type="checkbox" checked={todo.done} onChange={ceklist.bind(this, todo)} />
                {todo.activity}({todo.done ? "DONE" : "PROGRESS"})<button onClick={editActivity.bind(this, todo)}>edit</button>
                <button onClick={deleteActivity.bind(this, todo.id)}>delete</button>
              </li>
            );
          })}
        </ul>
      ) : (
        <i>todolist kosong</i>
      )}
      <img src="logo512.png" alt="" />
    </>
  );
};

export default Homepage;
