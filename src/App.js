import "./App.css";
import FrontPage from "./FrontPage/FrontPage";
import axios from "axios";
import { Component } from "react";

class App extends Component {
   
   constructor(props) {
      super(props)

      this.renderFrontPage = this.renderFrontPage.bind(this);
   }
   state = {
      questions: [],
      loaded: false,
   };

   componentDidMount() {
      if (!this.state.loaded && this.state.questions.length === 0 ) {
         axios
            .get(
               `https://uxnym3vqua.execute-api.us-west-1.amazonaws.com/stage/getqotd`
            )
            .then((res) => {
               this.setState({
                  questions: res["data"],
                  loaded: true,
               });
               console.log(this.state)
            });
      }
   }

   renderFrontPage() {
      if (this.state.loaded) {
         return (
            <FrontPage questions={this.state.questions}></FrontPage>
         );
      }
      return <div></div>;
   }
   render() {
      return (
         <div>
            {this.renderFrontPage()}
         </div>
      );
   }
}

export default App;
