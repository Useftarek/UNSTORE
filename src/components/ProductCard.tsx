import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { addToCart, type Product } from '../features/productsSlice';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addToCart({ id: product.id, quantity: 1 }));
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      className={`product-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-overlay">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            إضافة للسلة
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-price">{product.price} $</div>
        <div className="product-rating">
          <span className="rating-stars">
            {'★'.repeat(Math.round(product.rating.rate))}
            {'☆'.repeat(5 - Math.round(product.rating.rate))}
          </span>
          <span className="rating-count">({product.rating.count})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;