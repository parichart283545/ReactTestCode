import * as React from "react";
import { Formik, Form, Field } from "formik";
import {
  Button,
  FormControl,
  FormHelperText,
  LinearProgress,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Select } from "formik-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import * as CONST from "../../../../Constants";
import Axios from "axios";

function DropdownTitle(props) {
  const title_api_url = `${CONST.apiUrl}/Workshop/title`;
  const [title, setTitle] = React.useState([]);
  React.useEffect(() => {
    Axios.get(title_api_url)
      .then((res) => {
        //blind data
        if (res.data.isSuccess) {
            setTitle(res.data.data)
        }else{
            // internal error
            alert(res.data.message)
        }
      })
      .catch((err) => {
          // physical error
        alert(err.message);
      });
  }, []);
  return (
    <FormControl fullWidth error={props.errors[`${props.name}_isError`]}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <InputLabel htmlFor="titleId-simple">{props.label}</InputLabel>
          <Field
            fullWidth
            component={Select}
            name={props.name}
            inputProps={{
              id: "titleId-simple",
            }}
          >
              {title.map((item)=>(
                  <MenuItem value={item.titleId}>{item.titleName}</MenuItem>
              ))}
          </Field>
        </Grid>
      </Grid>
      <FormHelperText>{props.errors[`${props.name}_errorText`]}</FormHelperText>
    </FormControl>
  );
}

export default DropdownTitle;
