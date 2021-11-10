// @ts-ignore
import React from 'react';
import {Step, StepLabel, Stepper, Typography} from '@mui/material';

const steps = ["Info Customer", "PaymentMethod", "Confirm Info"];
export const CheckoutPage: React.FC = () => {
  return (
    <div>
      <Typography>
        Checkout
      </Typography>
      <Stepper>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step> ))}
      </Stepper>
    </div>
  )
}