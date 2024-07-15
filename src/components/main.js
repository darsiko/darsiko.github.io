import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import image from "../assets/22028733.jpeg";
import "../index.css";
import Loader from "./loader";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      offsetX: "",
      offsetY: "",
      friction: 1 / 32,
    };
    this._mouseMove = this._mouseMove.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundColor = "red";
    document.body.style.opacity = "0.9";
    document.addEventListener("mousemove", this._mouseMove);
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._mouseMove);
  }
  _mouseMove(e) {
    let followX = window.innerWidth / 2 - e.clientX;
    let followY = window.innerHeight / 2 - e.clientY;

    let x = 0,
      y = 0;
    x += (-followX - x) * this.state.friction;
    y += (followY - y) * this.state.friction;
    this.setState({
      offsetX: x,
      offsetY: y,
    });
  }

  render() {
    let offset = {
      transform: `translate(-50%, -50%) perspective(600px)
                  rotateY(${this.state.offsetX}deg)
                  rotateX(${this.state.offsetY}deg)`,
    };

    return (
      <div className="wrapper" style={offset}>
        <Loader />
        <img style={{ borderRadius: 10 }} src={image} alt="me"></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "100px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Raleway",
            }}
          >
            Dario Sponchiado
          </h1>

          <p
            style={{
              justifyContent: "center",
              textAlign: "center",
              fontSize: 15,
              fontFamily: "Raleway",
            }}
          >
            Hi.. 😎 i'm Dario, i am a fullstack developer, my works are based on
            the creation of dynamic websites (html, css, javascript, php, with
            frameworks like: react, angular.js, node.js, laravel and yii2 ) and
            apps(react-native, flutter, xamarin). Recently i am studying
            Information Technology at Ca Foscari university,
            <br></br> Contact me if you are interested at: <br></br>
            <a
              style={{ color: "#7C83FD" }}
              href="mailto:dario.sponchiadoo@gmail.com"
            >
              dario.sponchiadoo@gmail.com
            </a>
            <p>Happy Coding to everyone! 🤓💻</p>
          </p>
        </div>
      </div>
    );
  }
}
