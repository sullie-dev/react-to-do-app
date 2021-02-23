import React from "react";
import uuid from "react-uuid";

import { withStyles } from "@material-ui/core";
import styles from "./styles/ToDoListStyles";
import ToDo from "./ToDo";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CodeIcon from "@material-ui/icons/Code";
import DialogBox from "./DialogBox";

import TopBar from "./TopBar";

import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";

function ToDoList(props) {
  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const todoRef = firestore.collection("Todos");
  const query = todoRef.orderBy("createdAt");

  const [Todos] = useCollectionData(query, { idField: "id" });

  // const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const createTodo = async (evt) => {
    evt.preventDefault();

    const { uid } = auth.currentUser;
    const { name, value } = evt.target;

    setTodo({
      ...todo,
      [name]: value,
    });

    await todoRef.add({
      id: todoRef.id,
      task: todo.task,
      date: todo.date,
      desc: todo.description,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
    });

    setIsOpen(false);
    setTodo("");
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const removeToDo = async (id) => {
    await firebase.firestore().collection("Todos").doc(id).delete();
  };
  const { classes } = props;
  return (
    <div className={classes.ToDoList}>
      <header>
        <TopBar />
      </header>

      {Todos &&
        Todos.map((todo) => (
          <ToDo
            id={todo.id}
            todo={todo}
            key={todo.task + "-" + todo.date}
            removeTodo={removeToDo}
          />
        ))}

      <div className={classes.code}>
        <a href="https://github.com/sullie-dev/react-to-do-app" target="_blank">
          <Fab color="primary" aria-label="code" href>
            <CodeIcon />
          </Fab>
        </a>
      </div>

      <div className={classes.actionButton}>
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </div>
      <DialogBox
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleChange={handleChange}
        createTodo={createTodo}
      />
    </div>
  );
}

export default withStyles(styles)(ToDoList);
