import React, {useState} from 'react';
import {Step, StepLabel, Stepper, Typography} from '@mui/material';
import {Wrapper} from '../components/layout'

const steps = ["Info Customer", "PaymentMethod", "Confirm Info"];
export const CheckoutPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Wrapper>
      <Typography>
        Checkout
      </Typography>
      <Stepper style={{paddingBottom: "20px"}} activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel><p>{label}</p></StepLabel>
          </Step> ))}
      </Stepper>
    </Wrapper>
  )
}