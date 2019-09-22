import React, { Component } from "react";
import "./App.css";

/* 
1- generate a random button color (rand index)
2 - random letters into buttons

*/
// Components

import UserGuess from "./UserGuess";
import UserLose from "./UserLose";
import UserAttemps from "./UserAttemps";
import UserWin from "./UserWin";
import InvaildInput from "./InvaildInput";

const randColor = () => {
  const btnColorArray = ["success", "primary", "info", "danger", "dark"];
  var random2 = Math.random() * 5;
  let color = btnColorArray[Math.floor(random2)];
  return "btn btn-" + color + " btn-circle btn-circle-xl m-1";
};

let start = () => {
  const letterArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  var min1 = 0;
  var max1 = 25;
  var random1 = Math.random() * (+max1 - +min1) + +min1;
  return letterArray[Math.floor(random1)];
};
class App extends Component {
  state = {
    playerStatus: "start",
    hintShow: false,
    attemps: 4,
    mrben: start(),
    answerLocation: "",
    choiceLocation: ""
  };
  letterArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  randL = () => {
    const letterArray = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ];
    var min1 = 0;
    var max1 = 25;
    var random1 = Math.random() * (+max1 - +min1) + +min1;
    return letterArray[Math.floor(random1)];
  };

  reset = () => {
    this.setState({
      playerStatus: "start",
      attemps: 4,
      mrben: this.randL(),
      hintShow: false
    });
  };

  randLetter = num => {
    const randArr = [];
    while (num) {
      let num1 = this.randL();
      if (!randArr.includes(num1) && num1 !== this.state.mrben) {
        randArr.push(num1);
        num--;
      }
    }

    return randArr;
  };

  checkDist = choice => {
    let answerIndex = this.letterArray.indexOf(this.state.mrben);
    let choiceIndex = this.letterArray.indexOf(choice);
    let diff = Math.abs(answerIndex - choiceIndex);
    if (answerIndex >= 0 && answerIndex <= 8) {
      this.setState({ answerLocation: "the beginning of the alphabet" });
    } else if (answerIndex >= 9 && answerIndex <= 16) {
      this.setState({ answerLocation: "the middle of the alphabet" });
    } else if (answerIndex > 16) {
      this.setState({ answerLocation: "the end of the alphabet" });
    }

    if (diff <= 3 && diff >= 1) {
      this.setState({ choiceLocation: "You are TOO CLOSE!!" });
    } else if (diff <= 7 && diff >= 4) {
      this.setState({ choiceLocation: "Hmm.. okay you are close enough.." });
    } else if (diff <= 10 && diff >= 8) {
      this.setState({ choiceLocation: "Nah.." });
    } else if (diff >= 11) {
      this.setState({ choiceLocation: "Hehe.. NOT close at all" });
    }
  };

  checkLetter = (choice, attemps) => {
    if (!this.letterArray.includes(choice)) {
      return this.setState({ playerStatus: "invaild" });
    }
    if (attemps > 1) {
      if (choice === this.state.mrben) {
        this.setState({ playerStatus: "win" });
      } else {
        this.setState({ playerStatus: "try", attemps: this.state.attemps - 1 });
        this.checkDist(choice);
      }
    } else if (attemps === 1) {
      if (choice === this.state.mrben) {
        this.setState({ playerStatus: "win" });
      } else {
        this.setState({ playerStatus: "lost", mrben: this.randL() });
      }
    }
  };

  randChoice = arr => {
    let result = [];
    arr.forEach((i, idx) => {
      let color = randColor();
      result.push(
        <button
          onClick={() => this.checkLetter(i, this.state.attemps)}
          key={idx}
          className={color}
        >
          {i}
        </button>
      );
    });
    let color = randColor();
    result.push(
      <button
        onClick={() => this.checkLetter(this.state.mrben, this.state.attemps)}
        key={arr.length}
        className={color}
      >
        {this.state.mrben}
      </button>
    );
    return result;
  };

  arrayShuffle = function(arr) {
    let newPos, temp;
    for (let i = arr.length - 1; i > 0; i--) {
      newPos = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[newPos];
      arr[newPos] = temp;
    }
    return arr;
  };

  ToNull = () => {
    this.setState({ playerStatus: "start" });
  };

  HintLegth = () => {
    let i = this.state.attemps;
    return i * 2;
  };

  GetHint = () => {
    if (this.state.hintShow) {
      return (
        <>
          <div className="col-lg-12 mb-4 mt-3">
            <h5>Mr.Bean is thinking of one of these letters..</h5>
            {this.arrayShuffle(
              this.randChoice(this.randLetter(this.HintLegth()))
            )}
            <br></br>
            <h4 className="mt-3">
              Mr.Bean's letter is at..
              {this.state.answerLocation.toUpperCase()}!
            </h4>
          </div>
        </>
      );
    }
  };

  ShowHint = () => {
    if (!this.state.hintShow) return this.setState({ hintShow: true });
    this.setState({ hintShow: false });
  };

  MoveTo() {
    if (this.state.playerStatus === "win") {
      return <UserWin reset={this.reset} />;
    } else if (this.state.playerStatus === "lost") {
      return <UserLose reset={this.reset} answer={this.state.mrben} />;
    } else if (this.state.playerStatus === "try") {
      return (
        <UserAttemps
          ToNull={this.ToNull}
          attemps={this.state.attemps}
          answerLocation={this.state.answerLocation}
          choiceLocation={this.state.choiceLocation}
        />
      );
    } else if (this.state.playerStatus === "start")
      return (
        <div className="masthead justify-content-center">
          <div className="container text-center my-auto justify-content-center">
            <img
              className="img-bean1"
              src="https://media1.tenor.com/images/99ae42efae7963340c8a4a63012c857c/tenor.gif?itemid=11570520"
              alt="Mr.Ben-welcome"
            ></img>
            <h1 className="respon">Mr.Bean Mind Game</h1>
            <h2 className="mb-2 font-italic font-weight-light">
              Guess which letter is on Mr.Bean's mind...
            </h2>
            <UserGuess
              checkLetter={this.checkLetter}
              attemps={this.state.attemps}
            />
            <div className="justify-content-center row">
              <button
                onClick={() => this.ShowHint()}
                className="btn btn-lg btn-outline-dark js-scroll-trigge mr-4"
              >
                What's on Mr.Bean's mind?
              </button>

              {this.GetHint()}
            </div>

            <h4 className="text-danger mt-2">
              {this.state.attemps} attemps left!
            </h4>
          </div>
        </div>
      );
    else if (this.state.playerStatus === "invaild")
      return <InvaildInput ToNull={this.ToNull} />;
  }

  render() {
    return <div>{this.MoveTo()}</div>;
  }
}

export default App;
