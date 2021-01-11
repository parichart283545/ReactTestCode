import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
//import { values } from "lodash";
import Grid from "@material-ui/core/Grid";
//import { DateTimePicker } from "formik-material-ui-pickers";
import { KeyboardDatePicker } from "formik-material-ui-pickers";
//import { TimePicker } from "formik-material-ui-pickers";



import {
  TimePicker,
  DatePicker,
  DateTimePicker,
} from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import DayJsUtils from '@date-io/dayjs';
require('dayjs/locale/th')
var dayjs = require('dayjs')
dayjs.locale('th')

// Depending on the library you picked
//import DateFnsUtils from "@date-io/date-fns";

function WithDatepicker() {
  return (
    <MuiPickersUtilsProvider utils={DayJsUtils}>
      <Formik
        initialValues={{
          birthDate: dayjs(),
          birthDate2: dayjs(),
          birthDate3: dayjs(),
          birthDate4: dayjs(),
        }}
        //Validation section
        validate={(values) => {
          const errors = {};
          return errors;
        }}
        //Form Submission
        //ต้องผ่าน validate ก่อนถึงจะเข้าอันนี้
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {/* Render Form */}
        {({ submitForm, isSubmitting, values, errors }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <Field
                  fullWidth
                  component={DatePicker}
                  label="label"
                  name="birthDate"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Field
                  fullWidth
                  component={DateTimePicker}
                  label="label"
                  name="birthDate2"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Field
                  fullWidth
                  component={KeyboardDatePicker}
                  label="label"
                  name="birthDate3"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Field
                  fullWidth
                  component={TimePicker}
                  label="label"
                  name="birthDate4"
                />
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid xs={12} lg={3}>
                  {isSubmitting && <LinearProgress />}
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <br></br>
            values : {JSON.stringify(values)}
            <br></br>
            errors :{JSON.stringify(errors)}
            <br></br>
          </Form>
        )}
      </Formik>
    </MuiPickersUtilsProvider>
  );
}

export default WithDatepicker;
