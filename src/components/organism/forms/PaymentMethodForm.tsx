import React from 'react';
import {FormikValues} from 'formik';
import {Grid, Typography} from '@mui/material';
import { InputField } from '../../atoms';

interface PropsType {
  formField: FormikValues;
}

export const PaymentMethodForm: React.FC<PropsType> = (props)  => {
  const {
    formField: { nameOnCard, cardNumber, expiryDate, cvv },
  } = props;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            defaultProps={{
              name: nameOnCard.name,
              label: nameOnCard.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            defaultProps={{
              name: cardNumber.name,
              label: cardNumber.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            defaultProps={{
              name: expiryDate.name,
              label: expiryDate.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            defaultProps={{
              name: cvv.name,
              label: cvv.label,
              fullWidth: true,
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}