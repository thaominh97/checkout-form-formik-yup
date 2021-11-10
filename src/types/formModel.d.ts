
declare module FormModel {
  export interface CheckoutFormModel {
    formField: {
      firstName: {
        name: string;
        label: string;
        requiredErrorMsg: string;
      },
      lastName: {
        name: string;
        label: string;
        requiredErrorMsg: string;
      },
      address: {
        name: string;
        label: string;
        requiredErrorMsg: string;
      },
      phone: {
        name: string;
        label: string;
        requiredErrorMsg: string;
      },
      city: {
        name: string;
        label: string;
        requiredErrorMsg: string;
      },
      code: {
        name: string;
        label: string;
        requiredErrorMsg: string;
        invalidErrorMsg: string;
      },
      country: {
        name: string;
        label: string;
        requiredErrorMsg: string;
      },
      useAddressForPaymentDetails: {
        name: string;
        label: string;
      },
      useMethodForPayment: {
        name: string;
        label: string;
      },
      useCashForPayment: {
        name: string;
        label: string;
      },
      useCardForPayment: {
        name: string;
        label: string;
      },
      nameOnCard: {
        name: string;
        label: string;
        requiredErrorMsg: string;
      },
      cardNumber: {
        name: string;
        label: string;
        requiredErrorMsg: string;
        invalidErrorMsg: string;
      },
      expiryDate: {
        name: string;
        label: string;
        requiredErrorMsg: string;
        invalidErrorMsg: string;
      },
      cvv: {
        name: string;
        label: string;
        requiredErrorMsg: string;
        invalidErrorMsg: string;
      }
    }
  }
}