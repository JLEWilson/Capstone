import React from 'react';
import Arrows from "../img/Key_Arrows.png";
import Wasd from "../img/Key_WASD.png";
import M from "../img/Key_M.png";

const GameControls = () => {
  const styles = {
    outerContainer: {
      display: "flex",
      backgroundColor: "rgba(255, 255, 255, .25)",
      borderRadius: "12px"
    },
    innerContainer1: {
      display: "flex",
      margin: "0 auto",
      justifyContent: "center",
      flex: "1"
    },
    innerContainer2: {
      display: "flex",
      margin: "0 auto",
      justifyContent: "center",
      flex: "1"
    },
    movement: {
      margin: "0 1em",
      alignSelf: "center",
    },
    vertCenter: {
      margin:"0 1em",
      alignSelf: "center",
    }
  }
  return (
    <React.Fragment>
      <div style={styles.outerContainer}>
        <div style={styles.innerContainer1}>
          <h3 style={styles.vertCenter}>Movement: </h3>
          <img src={Arrows} alt="control option 1, move with arrow keys" style={styles.movement}/>
          <h1>/</h1>
          <img src={Wasd} alt="control option 2, move with W, A, S, D keys" style={styles.movement}/>
        </div>
        <div style={styles.innerContainer2}>
          <h3 style={styles.vertCenter}>Menu: </h3>
          <img src={M} alt="M to open in game menu" style={styles.vertCenter}/>
        </div>
      </div>
    </React.Fragment>
  );
  
}

export default GameControls;