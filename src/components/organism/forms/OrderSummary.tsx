import React from 'react';
import {FormikValues} from 'formik';
import {CheckboxField} from '../../atoms';
import {Grid, Typography} from '@mui/material';


interface PropsType {
  formField?: FormikValues
}

export const OrderSummary: React.FC<PropsType> = (props)  => {
  const {
    formField: {
      useAddressForPaymentDetails
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>Order Summary</Typography>
      <Grid item xs={12}>
        <CheckboxField
          name={useAddressForPaymentDetails.name}
          label={useAddressForPaymentDetails.label}
        />
      </Grid>
    </React.Fragment>
  )
}