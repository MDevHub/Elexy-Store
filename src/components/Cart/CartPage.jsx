import { useNavigate } from 'react-router-dom';
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, updateQuantity, calculateTotal } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .cart-items {
            max-height: none !important;
            overflow-y: visible !important;
          }
          .checkout-summary {
            position: static !important;
            top: auto !important;
          }
        }
      `}</style>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Cart items - left/top */}
            <div className="flex-1 max-h-[70vh] overflow-y-auto space-y-4 cart-items">
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white shadow rounded-lg space-y-4 sm:space-y-0 sm:gap-4"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-16 h-16 rounded-lg object-cover"
                      onError={(e) => e.currentTarget.src = '/path/to/placeholder.png'}
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">TK {item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="bg-gray-200 p-1 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-200 p-1 rounded"
                      >
                        +
                      </button>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout summary - right/below */}
            <div className="w-full md:w-72 sticky md:sticky top-20 self-start p-6 bg-white shadow rounded-lg border border-gray-300 checkout-summary">
              <h3 className="text-lg font-semibold mb-4">Checkout Summary</h3>
              <p className="mb-2">Items: <span className="font-bold">{totalItems}</span></p>
              <p className="mb-4">Total Price: <span className="font-bold">TK {calculateTotal().toFixed(2)}</span></p>
              <button
                onClick={() => navigate('/checkoutpage')}
                className="w-full bg-black hover:bg-neutral-800 transition-all duration-300 text-white font-semibold py-2 rounded"
              >
                Proceed to Checkout
              </button>
              <button 
                onClick={clearCart} 
                disabled={cart.length === 0}
                className={`mt-4 w-full px-4 py-2 rounded text-white ${cart.length === 0 ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"}`}
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
