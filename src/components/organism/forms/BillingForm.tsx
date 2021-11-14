import React, {ReactNode} from 'react';
import {InputField} from '../../atoms';
import { FormikValues } from 'formik';
import {Grid, Typography} from '@mui/material';
// import { checkoutFormModel }  from '../../../utils/index';

interface PropsType {
  formField?: FormikValues
}

export const BillingForm: React.FC<PropsType> = (props)  => {
  const {
    formField: {
      firstName,
      lastName,
      address1,
      city,
      zipcode,
      country,
      nameOnCard,
      cardNumber,
      expiryDate,
      cvv
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
            <InputField name={address1.name} label={address1.label} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <InputField name={address2.name} label={address2.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectField
              name={city.name}
              label={city.label}
              data={cities}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectField
              name={state.name}
              label={state.label}
              data={states}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={zipcode.name} label={zipcode.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectField
              name={country.name}
              label={country.label}
              data={countries}
              fullWidth
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