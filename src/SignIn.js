import React from 'react'
import firebase from "firebase/app";

import {withStyles} from '@material-ui/styles'
import styles from './styles/SignInStyles'



function SignIn(props) {

    const auth = firebase.auth();
    const {classes} = props

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }
			const signInWithGithub = () => {
        const provider = new firebase.auth.GithubAuthProvider();
        auth.signInWithPopup(provider);
      }
    
      return (
        <>
          <button className={classes.signIn} onClick={signInWithGoogle}>Sign in with Google</button>
					<button className={classes.signIn} onClick={signInWithGithub}>Sign in with Github</button>
        </>
      )
}


export default withStyles(styles)(SignIn)