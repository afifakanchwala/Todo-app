// Requirements
// Create react app to display TO-DOs fetched by ID.
// Create an input field for todo id. enter TO-DO id in it.
// Create one submit button onclick make API call to given API URL with entered todo id from input. it will fetch the data for TO-DO.
// Append every fetched data in store/state.
// If data fetched from API is empty display alert. and don't append anything to store/state.
// Render all available TO-DOs data store/state in UI and display todo title and completed checkbox for TO-DOs (NOTE: do not display TO-DOs with completed=true).
// When user clicks on any TO-DO's check box for that TO-DO completed flag should be updated to true and it should be removed from UI.
// Try to make the UI decent.

// Example API URL for fetching TODO data by id: jsonplaceholder.typicode.com/todos/{todo-id}
import React, { useState } from "react";
import axios from "axios";

const ToDo = () => {
  const [todo, setTodo] = useState([]);
  const [todoId, setTodoId] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = async () => {
    try {
      const response = await fetch(
        "jsonplaceholder.typicode.com/todos/{todo-id}"
      );
      if (response.ok) {
        const data = await response.json();
        setTodo([...todo, data]);
        setError(null);
      } else {
        setError("Todo not found");
      }
    } catch (error) {
      setError("An error occured");
    }
    // if (!todoId) {
    //   alert("Please enter a valid Todo Id");
    //   return;
    // }
    // const apiUrl = `jsonplaceholder.typicode.com/todos/${todoId}`;
    // axios
    //   .get(apiUrl)
    //   .then((response) => {
    //     setTodo(response.data);
    //   })
    //   .catch((error) => {
    //     console.log("error fetching todo:", error);
    //   });
  };

  return (
    <div>
      <h1>TODO app</h1>
      <div>
        <input
          type="text"
          value={todoId}
          onChange={(e) => setTodoId(e.target.value)}
        />
        <button onClick={submitHandler}>Submit</button>
        {error && <p>{error}</p>}
        <ul>
          {todo.map((todo, index) => (
            <div>
              <li key={index}>TODO:{todo.title}</li>
              <li key={index}>Completed:{todo.completed}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
