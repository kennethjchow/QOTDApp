import "./App.css";
import FrontPage from "./FrontPage/FrontPage";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
   root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: "100vh",
      padding: "0 30px",
   },
});

function App() {
   const classes = useStyles();
   return (
      <div className={`App ${classes.root}`} >
         <FrontPage></FrontPage>
      </div>
   );
}

export default App;
