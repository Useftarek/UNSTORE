import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchProductById, addToCart } from '../features/productsSlice';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { currentProduct, loading, error } = useAppSelector((state) => state.products);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(parseInt(id)));
    }
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (currentProduct) {
      dispatch(addToCart({ id: currentProduct.id, quantity }));
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>جاري تحميل المنتج...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>حدث خطأ!</h2>
        <p>{error}</p>
        <button onClick={() => id && dispatch(fetchProductById(parseInt(id)))}>
          إعادة المحاولة
        </button>
      </div>
    );
  }

  if (!currentProduct) {
    return (
      <div className="not-found-container">
        <h2>المنتج غير موجود</h2>
        <p>لم نتمكن من العثور على المنتج المطلوب</p>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={currentProduct.image} alt={currentProduct.title} />
      </div>
      <div className="product-detail-info">
        <h1 className="product-detail-title">{currentProduct.title}</h1>
        <div className="product-detail-category">{currentProduct.category}</div>
        <div className="product-detail-rating">
          <span className="rating-stars">
            {'★'.repeat(Math.round(currentProduct.rating.rate))}
            {'☆'.repeat(5 - Math.round(currentProduct.rating.rate))}
          </span>
          <span className="rating-count">({currentProduct.rating.count} تقييم)</span>
        </div>
        <div className="product-detail-price">${currentProduct.price}</div>
        <p className="product-detail-description">{currentProduct.description}</p>
        
        <div className="product-detail-actions">
          <div className="quantity-selector">
            <button 
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              disabled={quantity <= 1}
            >
              -
            </button>
            <input type="number" value={quantity} readOnly />
            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            إضافة إلى السلة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;