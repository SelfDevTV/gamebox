import { Application, Ticker } from "pixi.js";
import { Direction } from "./Direction";
import { GameManager } from "./GameManager";
import { Keyboard } from "./Keyboard";
import { Snake } from "./Snake";

import worm from "../public/worm.png";

import { Tile } from "./Tile";

export const init = () => {
  console.log("init called");
  const app = new Application({
    backgroundColor: 0x234ffa,
    width: 1000,
    height: 500,
  });

  document.querySelector("#canvas1")?.appendChild(app.view as unknown as Node);

  const wormHead = Tile.from(worm) as Tile;
  wormHead.direction = Direction.right;
  wormHead.width = 50;
  wormHead.height = 50;

  wormHead.x = 250;
  wormHead.y = 150;

  const snake = new Snake(wormHead, app);

  const game = new GameManager("germany.png", app, snake);
  game.spawnFruit();

  Keyboard.init();
  console.log(Keyboard.state);

  let counter = 0;

  Ticker.shared.add((delta: number) => {
    counter += delta;
    if (Math.floor(counter) >= 5) {
      game.update();
      counter = 0;
    }

    if (Keyboard.state.get("KeyD")) {
      snake.direction = Direction.right;
    } else if (Keyboard.state.get("KeyW")) {
      snake.direction = Direction.up;
    } else if (Keyboard.state.get("KeyA")) {
      snake.direction = Direction.left;
    } else if (Keyboard.state.get("KeyS")) {
      snake.direction = Direction.down;
    }
  });
};
