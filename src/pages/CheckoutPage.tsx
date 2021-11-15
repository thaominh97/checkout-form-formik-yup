import React, {useState} from 'react';
import {Button, CircularProgress, Step, StepLabel, Stepper, Typography} from '@mui/material';
import {Wrapper} from '../components/layout';
import {Formik, Form, FormikValues, FormikHelpers } from 'formik';
import { useAppStyles } from '../styles/App.styles';

import {initialValues, checkoutFormModel, validationSchema} from '../utils';
import {BillingForm, OrderSummary, PaymentMethodForm, ConfirmOrder, CheckoutSuccess} from '../components/organism';

const steps = ["Order Summary", "Billing Info", "PaymentMethod", "Confirm Order"];

const { formField } = checkoutFormModel;
function _renderStepContent(step: number) {
  switch (step) {
    case 0:
      return <OrderSummary />;
    case 1:
      return <BillingForm formField={formField} />;
    case 2:
      return <PaymentMethodForm formField={formField} />;
    case 3:
      return <ConfirmOrder />;
    default:
      return <div>Not Found</div>;
  }
}

export const CheckoutPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const selectedValidationSchema = validationSchema[activeStep]
  const isLast = activeStep === steps.length - 1
  // @ts-ignore
  const styles = useAppStyles();

  const sleep = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  const submitForm = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    await sleep(1000)
    alert(JSON.stringify(values, null, 2))
    actions.setSubmitting(false)
    setActiveStep((prev) => prev + 1)
  }

  const handleSubmit = (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (isLast) {
      submitForm(values, actions)
    } else {
      setActiveStep((prev) => prev + 1)
      actions.setTouched({})
      actions.setSubmitting(false)
    }
  }

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
      {activeStep === steps.length ? (
        <CheckoutSuccess />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={selectedValidationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => (
            <Form>
              {_renderStepContent(activeStep)}

              <div className={styles.buttons}>
                {activeStep === 0 && (
                  <Button
                    onClick={() => setActiveStep((prev) => prev - 1)}
                    className={styles.button}
                  >
                    Back
                  </Button>
                )}

                <div className={styles.wrapper}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={styles.button}
                    disabled={formikProps.isSubmitting}
                  >
                    {isLast ? "Place your order" : "Next"}
                  </Button>
                  {formikProps.isSubmitting && <CircularProgress />}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </Wrapper>
  )
}