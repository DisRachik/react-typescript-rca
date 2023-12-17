import { useRef } from 'react';
import { ForwardedPaymentForm, PaymentFormHandleRef } from './PaymentForm';

export function CheckoutPagePayment() {
  const paymentFormRef = useRef<PaymentFormHandleRef>(null);

  const handlePaymentSubmit = () => {
    if (!paymentFormRef.current) {
      return;
    }
    const data = paymentFormRef.current.submit();
    console.log('payment data - ', data);
  };

  return (
    <div>
      <h2>Payment FORM</h2>
      <ForwardedPaymentForm ref={paymentFormRef} />
      <button onClick={handlePaymentSubmit}>Send Payment</button>
    </div>
  );
}
