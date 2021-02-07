import "./QOTDPage.css";

function QOTDPage(props) {
   return (
      <div className="qotd-display">
         <h3>Question of the Day</h3>
         <p>{props.qotdText}</p>
      </div>
   );
}

export default QOTDPage;
