import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Select } from "formik-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import DropdownTitle from "../components/DropdownTitle";
import Casecade2 from '../components/CaseCade2'

function WithDropdown() {
  return (
    <Formik
      initialValues={{
        titleId: "ten",
        t1: "",
        t2: "",
        t3: "",
        province_provinceId: 0,
        province_districtId: 0,
        province_subDistrictId: 0
      }}
      //Validation section
      validate={(values) => {
        const errors = {};
        if (values.t1 === 10) {
          errors.t1_isError = true;
          errors.t1_errorText = "cannot be 10";
        }
        if (values.t2 === 20) {
          errors.t2_isError = true;
          errors.t2_errorText = "cannot be 20";
        }
        if (values.t3 === 30) {
          errors.t3_isError = true;
          errors.t3_errorText = "cannot be 30";
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
      {({ submitForm, isSubmitting, values, errors,setFieldValue }) => (
        <Form>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <InputLabel htmlFor="titleId-simple">Age</InputLabel>
              <Field
                fullWidth
                component={Select}
                name="titleId"
                inputProps={{
                  id: "titleId-simple",
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Field>
            </Grid>
            <Grid item xs={12} lg={6}>
              <DropdownTitle
               fullWidth
                name="t1"
                label="T1"
                errors={errors}
              ></DropdownTitle>
            </Grid>
            <Grid item xs={12} lg={6}>
              <DropdownTitle
              fullWidth
                name="t2"
                label="T2"
                errors={errors}
              ></DropdownTitle>
            </Grid>
            <Grid item xs={12} lg={6}>
              <DropdownTitle
              fullWidth
                name="t3"
                label="T3"
                errors={errors}
              ></DropdownTitle>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Casecade2
                name="province"
                errors={errors}
                values={values}
                setFieldValue={setFieldValue}
              ></Casecade2>
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

export default WithDropdown;
