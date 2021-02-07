import "./WouldYouRathersPage.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function WouldYouRathersPage() {
   return (
      <div>
         <List>
            <ListItem>
               <ListItemText primary="Swag"/>
            </ListItem>
            <ListItem>
               <ListItemText primary="Double Swag"/>
            </ListItem>
         </List>
      </div>
   );
}

export default WouldYouRathersPage;
