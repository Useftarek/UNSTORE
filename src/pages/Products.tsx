import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchProducts } from '../features/productsSlice';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

const Products = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { products, loading, error } = useAppSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState(location.state?.selectedCategory || 'all');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  useEffect(() => {
    if (products.length > 0) {
      const uniqueCategories = [...new Set(products.map(product => product.category))];
      setCategories(uniqueCategories);
    }
  }, [products]);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>جاري تحميل المنتجات...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>حدث خطأ!</h2>
        <p>{error}</p>
        <button onClick={() => dispatch(fetchProducts())}>إعادة المحاولة</button>
      </div>
    );
  }

  return (
    <div className="products-page">
      <div className="hero-section">
        <h1>تسوق أحدث المنتجات</h1>
        <p>اكتشف مجموعتنا الواسعة من المنتجات عالية الجودة بأسعار تنافسية</p>
      </div>

      <div className="category-filter">
        <button
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => setSelectedCategory('all')}
        >
          جميع المنتجات
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;