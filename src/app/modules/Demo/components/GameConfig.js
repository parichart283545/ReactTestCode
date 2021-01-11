/* eslint-disable no-restricted-imports */
import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useSelector, useDispatch } from "react-redux";
import * as demoRedux from "../_redux/demoRedux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function GameConfig() {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    //setAge(event.target.value);
    //alert(event.target.value);
    dispatch(demoRedux.actions.updateImposter(event.target.value));
  };
  const demoReducer = useSelector(({ demo }) => demo);

  const addPlayer = () => {
    let objOldPLayer = [...demoReducer.playerList];
    objOldPLayer.push("Test");
    dispatch(demoRedux.actions.updateImposter(''))
    //alert(objOldPLayer);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Imposter :</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={demoReducer.imposter}
          onChange={handleChange}
        >
          {demoReducer.playerList.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField id="standard-basic" label="Player name" />
      <Button variant="contained" color="primary" onClick={addPlayer}>
        Primary
      </Button>
    </div>
  );
}

export default GameConfig;
