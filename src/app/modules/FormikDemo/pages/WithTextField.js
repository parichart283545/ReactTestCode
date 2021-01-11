import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
//import { values } from "lodash";
import Grid from "@material-ui/core/Grid";

function WithTextField() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        LastName: "",
        email: "abj@njcd.com",
        password: "123",
      }}
      //Validation section
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (values.password === "1234") {
          errors.password = "don't use 1234";
        }

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
                component={TextField}
                name="FirstName"
                type="email"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Field
                fullWidth
                component={TextField}
                name="LastName"
                type="email"
                label="Last Name"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Field
                fullWidth
                component={TextField}
                name="email"
                type="email"
                label="Email"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Field
                fullWidth
                component={TextField}
                type="password"
                label="Password"
                name="password"
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
  );
}

export default WithTextField;
