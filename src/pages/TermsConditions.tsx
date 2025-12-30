import '../styles/InfoPages.css';

const TermsConditions = () => {
    return (
        <div className="info-page">
            <h1>الشروط والأحكام</h1>
            <div className="info-content">
                <section>
                    <h2>قبول الشروط</h2>
                    <p>باستخدامك لموقعنا، فإنك توافق على الالتزام بهذه الشروط والأحكام بالكامل.</p>
                </section>
                <section>
                    <h2>شروط الشراء</h2>
                    <p>يجب أن تكون جميع المعلومات المقدمة عند الشراء دقيقة وكاملة. نحن نحتفظ بالحق في رفض أي طلب.</p>
                </section>
                <section>
                    <h2>حقوق الملكية</h2>
                    <p>جميع المحتويات الموجودة على هذا الموقع هي ملك لمتجر UNSTORE ومحمية بموجب قوانين الملكية الفكرية.</p>
                </section>
            </div>
        </div>
    );
};

export default TermsConditions;
