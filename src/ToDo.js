import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles/ToDoStyles";

import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';

function ToDo(props) {
  const { classes, todo, removeTodo } = props;
  return (
    <div className={classes.ToDoCard}>
      <header>
        <h3 className={classes.task}>{todo.task}</h3>
      </header>
      <hr />
      <section>
        <h6 className={classes.date}>Date to complete by: {todo.date}</h6>
      </section>
      <section className={classes.description}>
        <p>{todo.desc}</p>
      </section>
      <div className={classes.options}>
      <Fab
          size="small"
          color="primary"
          aria-label="add"
          onClick={() => removeTodo(todo.id)}
        >
          <EditIcon />
        </Fab>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          onClick={() => removeTodo(todo.id)}
        >
          <DeleteIcon />
        </Fab>
      </div>
    </div>
  );
}

export default withStyles(styles)(ToDo);
