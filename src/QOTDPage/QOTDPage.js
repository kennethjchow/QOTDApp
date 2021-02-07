import "./QOTDPage.css";
import axios from "axios";
import { Component } from "react";

class QOTDPage extends Component {
   
   constructor(props) {
      super(props)

      this.renderQOTD = this.renderQOTD.bind(this);
   }
   state = {
      questionText: "",
      loaded: false,
   };

   componentDidMount() {
      if (!this.state.loaded && this.state.questionText === "") {
         axios
            .get(
               `https://uxnym3vqua.execute-api.us-west-1.amazonaws.com/stage/getqotd`
            )
            .then((res) => {
               this.setState({
                  questionText: res["data"]["question"],
                  loaded: true,
               });
            });
      }
   }

   renderQOTD() {
      if (this.state.loaded) {
         return (
            <div className="qotd-display">
               <h1 className="question-elements">Question of the day</h1>
               <br />
               <h3 className="question-elements">{this.state.questionText}</h3>
            </div>
         );
      }
      return <div></div>;
   }
   render() {
      return (
         <div className="qotd-page">
            <div>
               <p>View all questions</p>
            </div>
            {this.renderQOTD()}
         </div>
      );
   }
}

export default QOTDPage;
