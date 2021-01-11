import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import { useSelector, useDispatch } from "react-redux";
import * as demoRedux from "../_redux/demoRedux";
import {red} from "@material-ui/core/colors"

const useStyles = makeStyles({
  root: {
    width: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  imposter:{
fontSize:14,
color: red[500]
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Player(props) {
  const classes = useStyles();
  //   const bull = <span className={classes.bullet}>•</span>;
  //   const [check1, setCheck1] = React.useState(false);
  //   const [check2, setCheck2] = React.useState(false);
  //   const [check3, setCheck3] = React.useState(false);
  const dispatch = useDispatch();

  const demoReducer = useSelector(({ demo }) => demo);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={(props.name===demoReducer.imposter)?classes.imposter : classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.name}  
        </Typography>

        {/* <Switch
          checked={check1}
          onChange={() => {
            setCheck1(!check1);
          }}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />

        <Switch
          checked={check2}
          onChange={() => {
            setCheck2(!check2);
          }}
          name="checkedB"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />

        <Switch
          checked={check3}
          onChange={() => {
            setCheck3(!check3);
          }}
          name="checkedC"
          inputProps={{ "aria-label": "secondary checkbox" }}
        /> */}

        <Switch
          checked={demoReducer.switch1}
          onChange={() => {
            dispatch(demoRedux.actions.turnSwitch1(!demoReducer.switch1));
          }}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />

        <Switch
          checked={demoReducer.switch2}
          onChange={() => {
            dispatch(demoRedux.actions.turnSwitch2(!demoReducer.switch2));
          }}
          name="checkedB"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />

        <Switch
          checked={demoReducer.switch3}
          onChange={() => {
            dispatch(demoRedux.actions.turnSwitch3(!demoReducer.switch3));
          }}
          name="checkedC"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </CardContent>
    </Card>
  );
}
