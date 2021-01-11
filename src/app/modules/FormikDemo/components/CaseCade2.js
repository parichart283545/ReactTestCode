/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */
import * as React from "react";
import { Field } from "formik";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from "prop-types";
import { Select } from "formik-material-ui";
import Grid from "@material-ui/core/Grid";
import FormHelperText from "@material-ui/core/FormHelperText";
import Axios from "axios";
import * as CONST from "../../../../Constants";

function CaseCade2(props) {
  const [provinceList, setProvinceList] = React.useState([]);
  const [districtList, setDistrictList] = React.useState([]);
  const [subDistrictList, setSubDistrictList] = React.useState([]);

  const api_get_provoince_url = `${CONST.apiUrl}/Workshop/province`;
  const api_get_district_url = `${CONST.apiUrl}/Workshop/district/`;
  const api_get_subDistrict_url = `${CONST.apiUrl}/Workshop/subdistrict/`;

  React.useEffect(() => {
    //load province
    Axios.get(api_get_provoince_url)
      .then((res) => {
        if (res.data.isSuccess) {
          setProvinceList(res.data.data);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  React.useEffect(() => {
    //load district
    if (props.values[`${props.name}_provinceId`]) {
      Axios.get(
        `${api_get_district_url}${props.values[`${props.name}_provinceId`]}`
      )
        .then((res) => {
          if (res.data.isSuccess) {
            setDistrictList(res.data.data);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, [props.values[`${props.name}_provinceId`]]);

  React.useEffect(() => {
    //load subDistrict
    if (props.values[`${props.name}_districtId`]) {
      //reset selected sub district
      //

      Axios.get(
        `${api_get_subDistrict_url}${props.values[`${props.name}_districtId`]}`
      )
        .then((res) => {
          if (res.data.isSuccess) {
            setSubDistrictList(res.data.data);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.values[`${props.name}_districtId`],
    props.values[`${props.name}_provinceId`],
  ]);

  return (
    <Grid container spacing={3}>
      {/* Start Province */}
      <Grid item xs={12} lg={4}>
        <FormControl fullWidth error={props.errors[`${props.name}_provinceId`]}>
          <InputLabel htmlFor="province">จังหวัด</InputLabel>
          <Field
            component={Select}
            name={`${props.name}_provinceId`}
            inputProps={{
              id: "provinceId",
            }}
            onChange={(event) => {
              props.setFieldValue(event.target.name, event.target.value);
              // reset selected district and subDistrict
              props.setFieldValue(`${props.name}_districtId`, 0);
              props.setFieldValue(`${props.name}_subDistrictId`, 0);
            }}
          >
            <MenuItem disabled value={0}>
              กรุณาเลือก
            </MenuItem>
            {provinceList.map((item) => (
              <MenuItem key={item.provinceId} value={item.provinceId}>
                {item.provinceName}
              </MenuItem>
            ))}
          </Field>
          <FormHelperText>
            {props.errors[`${props.name}_provinceIdText`]}
          </FormHelperText>
        </FormControl>
      </Grid>
      {/* End Province */}

      {/* Start District */}
      <Grid item xs={12} lg={4}>
        <FormControl fullWidth error={props.errors[`${props.name}_districtId`]}>
          <InputLabel htmlFor="province">อำเภอ</InputLabel>
          <Field
            component={Select}
            name={`${props.name}_districtId`}
            inputProps={{
              id: "districtId",
            }}
            onChange={(event) => {
              props.setFieldValue(event.target.name, event.target.value);
              // reset selected subDistrict
              props.setFieldValue(`${props.name}_subDistrictId`, 0);
            }}
          >
            <MenuItem disabled value={0}>
              กรุณาเลือก
            </MenuItem>
            {districtList.map((item) => (
              <MenuItem key={item.districtId} value={item.districtId}>
                {item.districtName}
              </MenuItem>
            ))}
          </Field>
          <FormHelperText>
            {props.errors[`${props.name}_districtIdText`]}
          </FormHelperText>
        </FormControl>
      </Grid>
      {/* End District */}

      {/* Start SubDistrict */}
      <Grid item xs={12} lg={4}>
        <FormControl
          fullWidth
          error={props.errors[`${props.name}_subDistrictId`]}
        >
          <InputLabel htmlFor="province">ตำบล</InputLabel>
          <Field
            component={Select}
            required
            name={`${props.name}_subDistrictId`}
            inputProps={{
              id: "subDistrictId",
            }}
          >
            <MenuItem disabled value={0}>
              กรุณาเลือก
            </MenuItem>
            {subDistrictList.map((item) => (
              <MenuItem key={item.subDistrictId} value={item.subDistrictId}>
                {item.subDistrictName}
              </MenuItem>
            ))}
          </Field>
          <FormHelperText>
            {props.errors[`${props.name}_subDistrictIdText`]}
          </FormHelperText>
        </FormControl>
      </Grid>
      {/* End SubDistrict */}
    </Grid>
  );
}

export default CaseCade2;
