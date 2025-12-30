import { useAppDispatch, useAppSelector } from '../app/hooks';
import { removeFromCart, updateCartItemQuantity, clearCart } from '../features/productsSlice';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.products);

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateCartItemQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>سلة التسوق فارغة</h2>
        <p>لم تقم بإضافة أي منتجات إلى سلة التسوق بعد.</p>
        <Link to="/" className="continue-shopping-btn">تصفح المنتجات</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>سلة التسوق</h1>
      
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p className="cart-item-price">${item.price}</p>
            </div>
            <div className="cart-item-quantity">
              <button 
                className="quantity-btn"
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span className="quantity-value">{item.quantity}</span>
              <button 
                className="quantity-btn"
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="cart-item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <button 
              className="remove-item-btn"
              onClick={() => handleRemoveItem(item.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <button className="clear-cart-btn" onClick={handleClearCart}>
          إفراغ السلة
        </button>
        <div className="cart-summary-row cart-summary-total">
          <span>المجموع:</span>
          <span>${calculateTotal()}</span>
        </div>
        <button className="checkout-btn">
          إتمام الشراء
        </button>
        <Link to="/" className="continue-shopping-btn">
          متابعة التسوق
        </Link>
      </div>
    </div>
  );
};

export default Cart;