import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import * as demoRedux from "../_redux/demoRedux";



export default function Room(props) {
  //const classes = useStyles();

  const demoReducer = useSelector(({ demo }) => demo);
  const dispatch = useDispatch()
  React.useEffect(() => {
      if(demoReducer.switch1&&demoReducer.switch2&&demoReducer.switch3)
      {
          //set ligth on
          dispatch(demoRedux.actions.updateLightState('ON'))
      }
      else  
      {
          //set ligth off
          dispatch(demoRedux.actions.updateLightState('OFF'))
      }
  }, [demoReducer.switch1,demoReducer.switch2,demoReducer.switch3])

  return (
      <div>
          <h1>Light Status : {demoReducer.lightState}</h1>
      </div>
    // <Card className={classes.root}>
    //   <CardContent>
    //     <Typography
    //       className={classes.title}
    //       color="textSecondary"
    //       gutterBottom
    //     >
    //       {props.name}
    //     </Typography>
    //     Switch1 : {demoReducer.switch1.toString()} <br></br>
    //     Switch2 : {demoReducer.switch2.toString()}
    //     <br></br>
    //     Switch3 : {demoReducer.switch3.toString()}
    //     <br></br>
    //   </CardContent>
    // </Card>
  );
}
