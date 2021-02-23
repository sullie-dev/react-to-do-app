import React from 'react'
import firebase from "firebase/app";

import {withStyles} from '@material-ui/styles'
import styles from './styles/SignOutStyles'

function SignOut(props) {

    const auth = firebase.auth();
    const {classes} = props

    return (
        auth.currentUser && (
          <button className={classes.signOut} onClick={() => auth.signOut()}>
            Sign Out
          </button>
        )
      );
}

export default withStyles(styles)(SignOut)
