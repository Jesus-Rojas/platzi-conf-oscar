import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button-v2'
import { AppContext } from '@context/AppContext'
import '@styles/pages/Payment.css'

const Payment = () => {
  const { state } = useContext(AppContext);
  const navigate = useNavigate();
  const { cart, buyer, addNewOrder } = state;
  const paypalOptions = {
    clientId: process.env.CLIENT_ID_PAYPAL,
    intent: 'capture',
    currency: 'USD'
  }
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  //methods
  const handleSumTotal = () => { 
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }
  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      }
      addNewOrder(newOrder)
      navigate('/checkout/success')
    }
  }

  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resumen del pedido:</h3>
        {cart.map(item => (
          <div className='Payment-item' key={'Payment-item-'+item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className='Payment-button'>
          { handleSumTotal() > 0 && 
            <PayPalButton 
              options={paypalOptions}
              style={buttonStyles}
              amount={handleSumTotal()}
              onSuccess={data => handlePaymentSuccess(data)}
              onError={data => console.log(data)}
              onCancel={data => console.log(data)}
            />
          }
        </div>
      </div>
      <div />
    </div>
  );
};

export { Payment } 