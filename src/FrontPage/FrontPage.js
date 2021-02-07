import React from "react";

import ReactPageScroller from 'react-page-scroller';
import AllQuestionsPage from "../AllQuestionsPage/AllQuestionsPage";
import QOTDPage from "../QOTDPage/QOTDPage";


export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = number => {
    console.log(number);
  };

  render() {

    return (
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
        >
          <QOTDPage />
          <AllQuestionsPage />
        </ReactPageScroller>
      </React.Fragment>
    );
  }
}
