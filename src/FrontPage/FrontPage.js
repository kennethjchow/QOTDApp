import "./FrontPage.css";
import axios from "axios";
import { Component } from "react";

class FrontPage extends Component {

   state = {
      questionText: '',
      loaded: false,
   };

   componentDidMount() {
      if (!this.state.loaded && this.state.questionText === '') {
         axios.get(`http://localhost:8081/getQOTD`).then((res) => {
            console.log(res.data.question)
            this.setState({ questionText: res.data.question, loaded: true });
         });
      }
   }
   render() {
      return (
         <div className="front-page">
            <h1 className="question-elements">Question of the day:</h1>
            <br />
            <h3 className="question-elements">{this.state.questionText}</h3>
         </div>
      );
   }
}

export default FrontPage;
