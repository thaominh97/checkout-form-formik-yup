import React, {useState} from 'react';
import {Step, StepLabel, Stepper, Typography} from '@mui/material';
import {Wrapper} from '../components/layout';
import {Formik, Form } from 'formik';

import {initialValues, checkoutFormModel} from '../utils/index';
import {BillingForm, OrderSummary, PaymentMethodForm, ConfirmOrder} from '../components/organism';

const steps = ["Order Summary", "Info Customer", "PaymentMethod", "Confirm Info"];

const { formField } = checkoutFormModel;
function _renderStepContent(step: number) {
  switch (step) {
    case 0:
      return <OrderSummary />;
    case 1:
      return <BillingForm formField={formField} />;
    case 2:
      return <PaymentMethodForm />;
    case 3:
      return <ConfirmOrder />;
    default:
      return <div>Not Found</div>;
  }
}

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

      <Formik initialValues={{initialValues}} onSubmit={()=> {}}>
        <Form>
          {_renderStepContent(activeStep)}
        </Form>
      </Formik>
    </Wrapper>
  )
}