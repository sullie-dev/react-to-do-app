import { withWidth } from "@material-ui/core";

export default {
  ToDoCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: 'flex-start',
    padding: "2rem",
    wordWrap: "break-word",
    margin:'1.4rem',
    backgroundColor: "white",
    color: "black",
    borderRadius: "15px",
    width: "20rem",
    "& hr": {
      width: "95%",
      color: "black",
      display: "inline",
    },
  },

  task: {
    color: "#342a28",
  },
  date: {
    color: "#49515f",
    fontSize: "11px",
    marginRight: "0px",
    marginLeft: "0px",
  },
  description:{
    width: 'inherit',
    color: "#342a28",
    textAlign:'justify',
  },
  options:{
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
};
