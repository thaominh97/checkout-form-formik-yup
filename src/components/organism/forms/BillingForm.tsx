import React from 'react';
import {CheckboxField, InputField} from '../../atoms';
import { FormikValues } from 'formik';
import {Grid, Typography} from '@mui/material';

interface PropsType {
  formField?: FormikValues
}

export const BillingForm: React.FC<PropsType> = (props)  => {
  const {
    formField: {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zipcode,
      country,
      useAddressForPaymentDetails
    }
  } = props;

  return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField defaultProps={{
              name: firstName.name,
              label: firstName.label,
              fullWidth: true
            }}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField defaultProps={{
              name: lastName.name,
              label: lastName.label,
              fullWidth: true}}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField defaultProps={{
              name: address1.name,
              label: address1.label,
              fullWidth: true}}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField defaultProps={{
              name: address2.name,
              label: address2.label,
              fullWidth: true}}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField defaultProps={{
              name: city.name,
              label: city.label,
              fullWidth: true}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField defaultProps={{
              name: state.name,
              label: state.label,
              fullWidth: true}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField defaultProps={{
              name: zipcode.name,
              label: zipcode.label,
              fullWidth: true}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField defaultProps={{
              name: country.name,
              label: country.label,
              fullWidth: true}}
            />
          </Grid>
          <Grid item xs={12}>
            <CheckboxField
              name={useAddressForPaymentDetails.name}
              label={useAddressForPaymentDetails.label}
            />
          </Grid>
        </Grid>
      </React.Fragment>
  )
}