import "./FrontPage.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';

const useStyles = makeStyles({
   root: {
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      border: 0,
      boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
      color: "white",
      padding: "6px 2px",
      margin: "6px 6px"
   },
});

function FrontPage() {
   const classes = useStyles();
   return (
      <div className="front-page">
         <h1 className="question-elements">Question of the day:</h1>
         <br/>
         <h3 className="question-elements">What is the point of life?</h3>
         <Button className={classes.root}><RefreshOutlinedIcon></RefreshOutlinedIcon></Button>
      </div>
   );
}

export default FrontPage;
