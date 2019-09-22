import React from "react";

function UserAttemps(props) {
  return (
    <div className="masthead container-fluid text-center my-auto mt-4">
      <img
        onClick={() => props.ToNull()}
        src="https://www.nicepng.com/png/full/138-1382910_mr-bean-beans-this-or-that-questions-projects.png"
        alt="Mr.Ben-tryagain"
        className="menu-toggle mt-3"
      ></img>
      <h4 className="respon">{props.attemps} attempts left</h4>
      <h3>{props.choiceLocation}</h3>
    </div>
  );
}

export default UserAttemps;
