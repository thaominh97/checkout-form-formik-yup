import * as Yup from 'yup';

export const checkoutFormModel = {
  formId: 'checkoutForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name*',
      requiredErrorMsg: 'First name is required'
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      requiredErrorMsg: 'Last name is required'
    },
    address: {
      name: 'address',
      label: 'Address*',
      requiredErrorMsg: 'Address is required'
    },
    phone: {
      name: 'phone',
      label: 'Phone number',
      requiredErrorMsg: 'Phone number is required'
    },
    city: {
      name: 'city',
      label: 'City*',
      requiredErrorMsg: 'City is required'
    },
    code: {
      name: 'code',
      label: 'ZIP/Postal code*',
      requiredErrorMsg: 'ZIP/Postal code is required',
      invalidErrorMsg: 'ZIP/Postal code is not valid (e.g. 70000)'
    },
    country: {
      name: 'country',
      label: 'Country/ State*',
      requiredErrorMsg: 'Country/ State is required'
    },
    useAddressForPaymentDetails: {
      name: 'useAddressForPaymentDetails',
      label: 'Use this address for payment details'
    },
    useMethodForPayment: {
      name: 'useMethodForPayment',
      label: 'Use method for payment'
    },
    useCashForPayment: {
      name: 'useCashForPayment',
      label: 'Use cash for payment'
    },
    useCardForPayment: {
      name: 'useCardForPayment',
      label: 'Use cart for payment'
    },
    nameOnCard: {
      name: 'nameOnCard',
      label: 'Name on card*',
      requiredErrorMsg: 'Name on card is required'
    },
    cardNumber: {
      name: 'cardNumber',
      label: 'Card number*',
      requiredErrorMsg: 'Card number is required',
      invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
    },
    expiryDate: {
      name: 'expiryDate',
      label: 'Expiry date*',
      requiredErrorMsg: 'Expiry date is required',
      invalidErrorMsg: 'Expiry date is not valid'
    },
    cvv: {
      name: 'cvv',
      label: 'CVV*',
      requiredErrorMsg: 'CVV is required',
      invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    }
  }
};
const {
  formField: {
    firstName,
    lastName,
    address,
    city,
    code,
    country,
    useAddressForPaymentDetails,
    useMethodForPayment,
    useCashForPayment,
    useCardForPayment,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv
  }
} = checkoutFormModel;
const visaRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
export const formInitialValue = {
  [firstName.name]: '',
  [lastName.name]: '',
  [address.name]: '',
  [city.name]: '',
  [code.name]: '',
  [country.name]: '',
  [useAddressForPaymentDetails.name]: false,
  [useMethodForPayment.name]: false,
  [useCashForPayment.name]: false,
  [useCardForPayment.name]: false,
  [nameOnCard.name]: '',
  [cardNumber.name]: '',
  [expiryDate.name]: '',
  [cvv.name]: ''
};
export const validationSchema = [ Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
    [city.name]: Yup.string()
      .nullable()
      .required(`${city.requiredErrorMsg}`),
    [code.name]: Yup.string()
      .required(`${code.requiredErrorMsg}`),
      // .test('len', `${code.invalidErrorMsg}`, val => val && val.length === 5),
    [country.name]: Yup.string()
      .nullable()
      .required(`${country.requiredErrorMsg}`)
  }),
  Yup.object().shape({
  [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
  [cardNumber.name]: Yup.string()
    .required(`${cardNumber.requiredErrorMsg}`)
    .matches(visaRegEx, cardNumber.invalidErrorMsg),
  [expiryDate.name]: Yup.string()
    .nullable()
    .required(`${expiryDate.requiredErrorMsg}`),
  [cvv.name]: Yup.string()
    .required(`${cvv.requiredErrorMsg}`)
    // .test('len', `${cvv.invalidErrorMsg}`, val => val && val.length === 3)
})
];
