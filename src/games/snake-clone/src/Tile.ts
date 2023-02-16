import { Sprite } from "pixi.js";
import type { Direction } from "./Direction";

export class Tile extends Sprite {
  direction: Direction;

  constructor(direction: Direction) {
    super();
    this.direction = direction;
  }
}
