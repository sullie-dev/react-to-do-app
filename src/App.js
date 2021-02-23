import "./App.css";
import ToDoList from "./ToDoList";
import SignIn from "./SignIn";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
firebase.initializeApp({
  apiKey: "AIzaSyAokCzPeFE_GkYaq98uIvjRlDi4kYQ5JqQ",
  authDomain: "todo-sullie-app.firebaseapp.com",
  projectId: "todo-sullie-app",
  storageBucket: "todo-sullie-app.appspot.com",
  messagingSenderId: "419428388699",
  appId: "1:419428388699:web:36226a2805580bce5f147e",
  measurementId: "G-X}L5Q5K7PEE",
});

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
      {user ?  <ToDoList /> :<SignIn/>}
      </header>
    </div>
  );
}

export default App;
