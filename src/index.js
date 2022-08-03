import React, { Component } from "react";
import { render } from "react-dom";

import CanvasDraw from "./CanvasDraw.js";
import classNames from "./styles.css";

class Demo extends Component {
  state = {
    color: "#ffc600",
    width: 400,
    height: 400,
    brushRadius: 3,
    lazyRadius: 0,
    backgroundImg:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg",
    imgs: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg",
      "https://i.imgur.com/a0CGGVC.jpg"
    ]
  };

  componentDidMount() {
    // let's change the background image every 2 seconds. fun!
    /* window.setInterval(() => {
      this.setState({
        color: "#" + Math.floor(Math.random() * 16777215).toString(16)
      });
      if (
        this.state.imgs &&
        this.state.imgs.length &&
        this.state.backgroundImg
      ) {
        let img = "";
        let imgs = this.state.imgs;
        for (let i = 0; i < imgs.length; i++) {
          if (this.state.backgroundImg !== imgs[i]) {
            img = imgs[i];
          }
        }

        this.setState({
          backgroundImg: img
        });
      }
    }, 2000);
    */
  }
  render() {
    return (
      <div>
        <h2>Get Data </h2>

        <div className={classNames.tools}>
          <button
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.eraseAll();
            }}
          >
            Erase
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.undo();
            }}
          >
            Undo
          </button>
          <button
            onClick={() => {
              console.log(this.saveableCanvas.getDataURL("png", true, false));
              //  alert("DataURL written to console");
            }}
          >
            GetDataURL
          </button>
          <div>
            <label>Width:</label>
            <input
              type="number"
              value={this.state.width}
              onChange={(e) =>
                this.setState({ width: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div>
            <label>Height:</label>
            <input
              type="number"
              value={this.state.height}
              onChange={(e) =>
                this.setState({ height: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div>
            <label>Brush-Radius:</label>
            <input
              type="number"
              value={this.state.brushRadius}
              onChange={(e) =>
                this.setState({ brushRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div>
            <label>Lazy-Radius:</label>
            <input
              type="number"
              value={this.state.lazyRadius}
              onChange={(e) =>
                this.setState({ lazyRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
        </div>
        <div>
          <CanvasDraw
            ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
            hideInterface
            hideGrid
            brushColor={this.state.color}
            brushRadius={this.state.brushRadius}
            lazyRadius={this.state.lazyRadius}
            canvasWidth={this.state.width}
            canvasHeight={this.state.height}
            imgSrc={this.state.backgroundImg}
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<Demo />, rootElement);
