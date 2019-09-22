import React from "react";

function UserLose(props) {
  return (
    <div className="masthead container-fluid text-center my-auto mt-4">
      <img
        className="img-fluid mt-5"
        src="https://media3.giphy.com/media/c35RMDO6luMaQ/giphy.gif"
        alt="Mr.Ben-tryagain"
      />
      <h1 className="respon text-white">You Lose..</h1>
      <h3 className="text-success">
        The letter "{props.answer}" was on my mind
      </h3>
      <button
        onClick={() => props.reset()}
        className="btn btn-xl btn-light js-scroll-trigge mr-4 mt-5"
      >
        Play again?
      </button>
    </div>
  );
}

export default UserLose;
