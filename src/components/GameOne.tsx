import React, { useEffect } from "react";
import { init } from "../games/snake-clone/src/main";

const GameOne = () => {
  const date = new Date();

  useEffect(() => {
    console.log("hi");
    init();
  });

  return (
    <div className="w-2/3 h-2/3 border-4 mx-auto mt-12">
      <h3>First Game: snake-clone</h3>
      <p>
        Published on <code>{date.toLocaleDateString()}</code>
      </p>
      <div className="w-full h-full" id="canvas1" />
    </div>
  );
};

export default GameOne;
