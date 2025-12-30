import '../styles/InfoPages.css';

const PrivacyPolicy = () => {
    return (
        <div className="info-page">
            <h1>سياسة الخصوصية</h1>
            <div className="info-content">
                <section>
                    <h2>جمع المعلومات</h2>
                    <p>نحن نقوم بجمع المعلومات التي تقدمها لنا مباشرة عند إنشاء حساب أو إجراء عملية شراء في متجرنا.</p>
                </section>
                <section>
                    <h2>استخدام المعلومات</h2>
                    <p>نستخدم المعلومات التي نجمعها لتوفير خدماتنا وتحسينها، ومعالجة المعاملات، والتواصل معك.</p>
                </section>
                <section>
                    <h2>حماية المعلومات</h2>
                    <p>نحن نتخذ تدابير أمنية متنوعة لضمان سلامة معلوماتك الشخصية وحمايتها من الوصول غير المصرح به.</p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
