import React from "react";

function InvaildInput(props) {
  return (
    <div className="masthead container-fluid text-center my-auto mt-4">
      <img
        onClick={() => props.ToNull()}
        src="https://media1.tenor.com/images/fd53171945f4b555b05f813f66e67da2/tenor.gif?itemid=3808522"
        alt="Mr.Ben-tryagain"
        className="mt-3"
      ></img>
      <br></br>
      <button
        onClick={() => props.ToNull()}
        className="btn btn-xl  btn-light js-scroll-trigge mr-4 mt-5"
      >
        Enter a vaild value.. A LETTER PLEASE!
      </button>
    </div>
  );
}

export default InvaildInput;
