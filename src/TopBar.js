import React from "react";
import SignOut from "./SignOut";

import { withStyles } from "@material-ui/core";
import styles from "./styles/TopBarStyles";

function TopBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.topbar}>
        <section className={classes.title}>
          <h3>Simple To Do App</h3>
        </section>
        <section className={classes.signout}>
          <SignOut />
        </section>
      </div>
    </div>
  );
}

export default withStyles(styles)(TopBar);
