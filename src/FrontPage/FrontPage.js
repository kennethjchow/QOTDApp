import "./FrontPage.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
   root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
   },
});

function FrontPage() {
   const classes = useStyles();
   return (
      <div className="front-page">
         <h1 className="question-elements">Question of the day:</h1>
         <br/>
         <h3 className="question-elements">What is the point of life?</h3>
         <br/>
         <Button className={classes.root}>Refresh</Button>
      </div>
   );
}

export default FrontPage;