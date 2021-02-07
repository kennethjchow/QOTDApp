import React from "react";

import ReactPageScroller from "react-page-scroller";
import QOTDPage from "../QOTDPage/QOTDPage";
import WouldYouRathersPage from "../WouldYouRathersPage/WouldYouRathersPage";

export default class FrontPage extends React.Component {
   constructor(props) {
      super(props);
      this.state = { currentPage: null};
   }

   handlePageChange = (number) => {
      this.setState({ currentPage: number });
   };

   handleBeforePageChange = (number) => {
      console.log(number);
   };

   filterQOTD = () => {
      console.log(this.props)
      const result = this.props.questions.filter(function (e) {
         if (e.is_qotd){
            return e.question
         }
      });
      return result[0].question
   };

   render() {
      return (
         <React.Fragment>
            <ReactPageScroller
               animationTimer={600}
               animationTimerBuffer={0}
               pageOnChange={this.handlePageChange}
               onBeforePageScroll={this.handleBeforePageChange}
               customPageNumber={this.state.currentPage}
            >
               <QOTDPage qotdText={this.filterQOTD()} />
               <WouldYouRathersPage />
            </ReactPageScroller>
         </React.Fragment>
      );
   }
}
