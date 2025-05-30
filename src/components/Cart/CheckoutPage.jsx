import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const nigeriaStates = [
  'Abia','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue','Borno','Cross River','Delta',
  'Ebonyi','Edo','Ekiti','Enugu','Gombe','Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara',
  'Lagos','Nasarawa','Niger','Ogun','Ondo','Osun','Oyo','Plateau','Rivers','Sokoto','Taraba','Yobe','Zamfara'
];

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, calculateTotal, clearCart } = useCart();

  const [deliveryMethod, setDeliveryMethod] = useState('pickup');
  const [selectedState, setSelectedState] = useState('Lagos');
  const [customerName, setCustomerName] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({ cardNumber: '', expiry: '', cvv: '' });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!selectedState) newErrors.selectedState = 'State is required';
    if (deliveryMethod === 'shipping' && !shippingAddress) newErrors.shippingAddress = 'Shipping address is required';
    if (!/^[0-9]{16}$/.test(paymentDetails.cardNumber.replace(/\s/g, ''))) newErrors.cardNumber = 'Card number must be 16 digits';
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentDetails.expiry)) newErrors.expiry = 'Expiry must be in MM/YY format';
    if (!/^\d{3}$/.test(paymentDetails.cvv)) newErrors.cvv = 'CVV must be 3 digits';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setShowModal(true);
      setTimeout(() => {
        clearCart();
        window.location.reload();
      }, 3000);
    }
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length >= 3) value = value.slice(0, 2) + '/' + value.slice(2);
    setPaymentDetails({ ...paymentDetails, expiry: value });
  };

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, '')
      .slice(0, 16)
      .replace(/(.{4})/g, '$1 ')
      .trim();
  };

  const total = calculateTotal();

  return (
    <>
    <div className="p-6 flex flex-col lg:flex-row gap-8">
      {/* Left: Shipping & Payment Form */}
      <div className="flex-1 bg-white shadow rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold">Delivery</h2>

        {/* Delivery method */}
        <div>
          <p className="font-semibold">Select Delivery Method</p>
          <label className="flex items-center space-x-2">
            <input type="radio" name="delivery" value="pickup" checked={deliveryMethod==='pickup'} onChange={() => setDeliveryMethod('pickup')} />
            <span>Pick up</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="delivery" value="shipping" checked={deliveryMethod==='shipping'} onChange={() => setDeliveryMethod('shipping')} />
            <span>Ship to address</span>
          </label>
        </div>

        {/* State selector */}
        <div>
          <label className="block font-semibold mb-1">State</label>
          <select className="w-full border rounded p-2" value={selectedState} onChange={e => setSelectedState(e.target.value)}>
            <option value="">Select state</option>
            {nigeriaStates.map(st => <option key={st} value={st}>{st}</option>)}
          </select>
          {errors.selectedState && <p className="text-red-500 text-sm">{errors.selectedState}</p>}
        </div>

        {/* Name input */}
        <div>
          <label className="block font-semibold mb-1">Name <span className="text-sm text-gray-500">(optional)</span></label>
          <input type="text" className="w-full border rounded p-2" value={customerName} onChange={e=>setCustomerName(e.target.value)} placeholder="Your name" />
        </div>

        {/* Shipping address */}
        {deliveryMethod==='shipping' && (
          <div>
            <label className="block font-semibold mb-1">Shipping Address</label>
            <input type="text" className="w-full border rounded p-2" value={shippingAddress} onChange={e=>setShippingAddress(e.target.value)} placeholder="Enter delivery address" />
            {errors.shippingAddress && <p className="text-red-500 text-sm">{errors.shippingAddress}</p>}
          </div>
        )}

        {/* Shipping method */}
        <div>
          <label className="block font-semibold mb-1">Shipping Method</label>
          <p>Free Shipping</p>
        </div>

        {/* Payment details */}
        <div className="space-y-2">
          <p className="font-semibold">Payment Details</p>
          <div>
            <input type="text" className="w-full border rounded p-2" placeholder="Card Number" value={paymentDetails.cardNumber} onChange={e=>setPaymentDetails({...paymentDetails, cardNumber: formatCardNumber(e.target.value)})} />
            {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <input type="text" className="w-full border rounded p-2" placeholder="Expiry (MM/YY)" value={paymentDetails.expiry} onChange={handleExpiryChange} />
              {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry}</p>}
            </div>
            <div className="w-24">
              <input type="text" className="w-full border rounded p-2" placeholder="CVV" value={paymentDetails.cvv} onChange={e=>setPaymentDetails({...paymentDetails, cvv:e.target.value.replace(/[^0-9]/g, '').slice(0, 3)})} />
              {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
            </div>
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={() => {
            if (validate()) {
              setShowModal(true);
              setTimeout(() => {
                clearCart();
                navigate('/reviewpage'); // only navigate if valid
                window.location.reload();
              }, 3000);
            }
          }}
          className="mt-4 w-full bg-black border border-black transition-all duration-200 hover:bg-[#0c0c0ce1] text-white py-2 rounded"
        >
          Purchase Now
        </button>
    
    </div>

      {/* Right: Order Summary */}
      <div className="w-full lg:w-1/3 bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex items-center gap-4">
              <img src={item.img} alt={item.name} className="w-12 h-12 object-cover rounded" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>{item.quantity} x ₦{item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t pt-4">
          <p className="font-semibold">Total: ₦{total.toFixed(2)}</p>
        </div>
      </div>
    </div>

    {/* Modal */}
    {showModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow text-center max-w-sm w-full">
          <div className="text-4xl mb-2">🌸</div>
          <h2 className="text-xl font-bold mb-2">Congratulations!</h2>
          <p>Your item has been purchased.</p>
        </div>
      </div>
    )}
    </>
  );
};

export default CheckoutPage;
