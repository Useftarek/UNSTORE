import { useNavigate } from 'react-router-dom';
import '../styles/Categories.css';

const categories = [
    { id: 1, name: "ملابس رجالية", slug: "men's clothing", icon: "👕" },
    { id: 2, name: "ملابس نسائية", slug: "women's clothing", icon: "👗" },
    { id: 3, name: "إلكترونيات", slug: "electronics", icon: "💻" },
    { id: 4, name: "مجوهرات", slug: "jewelery", icon: "💎" }
];

const Categories = () => {
    const navigate = useNavigate();

    const handleExplore = (slug: string) => {
        navigate('/', { state: { selectedCategory: slug } });
    };

    return (
        <div className="categories-page">
            <div className="page-header">
                <h1>تصنيفات المنتجات</h1>
                <p>اختر التصنيف الذي تبحث عنه لاستعراض المنتجات</p>
            </div>

            <div className="categories-grid">
                {categories.map(category => (
                    <div key={category.id} className="category-card" onClick={() => handleExplore(category.slug)}>
                        <div className="category-icon">{category.icon}</div>
                        <h3 className="category-name">{category.name}</h3>
                        <span className="category-slug">{category.slug}</span>
                        <button className="explore-btn" onClick={(e) => {
                            e.stopPropagation();
                            handleExplore(category.slug);
                        }}>استكشاف</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
