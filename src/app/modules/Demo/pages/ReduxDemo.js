import React from "react";
import Player from "../components/Player";
import Room from "../components/Room";
import { useSelector } from "react-redux";
import GameConfig from "../components/GameConfig";

function ReduxDemo() {
  const demoReducer = useSelector(({ demo }) => demo);
  return (
    <div>
      <GameConfig></GameConfig>
      <Room></Room>
      {demoReducer.playerList.map((item) => (
        <Player key={item} name={item}></Player>
      ))}
    </div>
  );
}

export default ReduxDemo;
