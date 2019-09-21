import React from "react";

function UserWin(props) {
  return (
    <div className="masthead container-fluid text-center my-auto mt-4">
      <div className="container text-center my-auto">
        <img
          className="img-bean"
          src="https://www.nicepng.com/png/full/138-1382485_bean-png-mr-bean-png.png"
          alt="Mr.Ben-tryagain"
        ></img>
        <h1 className="respon text-white">You Won!</h1>
        <button
          onClick={() => props.reset()}
          className="btn btn-xl btn-dark js-scroll-trigge mr-4 mt-5"
        >
          Play again?
        </button>
      </div>
    </div>
  );
}

export default UserWin;
