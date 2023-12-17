import React, { ForwardedRef, forwardRef, useImperativeHandle, useState } from 'react';

type SendPaymentType = {
  dataPayment: { [x: string]: string };
};

type Props = {};

export type PaymentFormHandleRef = {
  submit: () => SendPaymentType;
};

// ForwardedRef used for description ref, passed through forwardRef in TypeScript.

export function PaymentForm(props: Props, ref: ForwardedRef<PaymentFormHandleRef>) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardOwnerName, setCardOwnerName] = useState('');

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleCardOwnerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardOwnerName(e.target.value);
  };

  useImperativeHandle(ref, () => ({
    submit: (): SendPaymentType => ({
      dataPayment: {
        cardNumber,
        cardOwnerName,
      },
    }),
  }));

  return (
    <form>
      <input type="text" value={cardNumber} onChange={handleCardNumber} placeholder="Card Number" />
      <input
        type="text"
        value={cardOwnerName}
        onChange={handleCardOwnerName}
        placeholder="Cardholder Name"
      />
    </form>
  );
}

export const ForwardedPaymentForm = forwardRef<PaymentFormHandleRef, Props>(PaymentForm);
