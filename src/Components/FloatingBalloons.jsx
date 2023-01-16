import React from "react";
import { ReactFloatingBalloons } from "react-floating-balloons";

const FloatingBalloons = () => {
  return (
    <ReactFloatingBalloons
      count={1}
      msgText="Click me twice!!"
      colors={["red"]}
      popVolumeLevel={0.1}
    />
  );
};

export default FloatingBalloons;
