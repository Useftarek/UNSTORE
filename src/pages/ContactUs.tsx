import React, { useState } from 'react';
import '../styles/InfoPages.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('نشكرك على تواصلك معنا، سنقوم بالرد عليك في أقرب وقت!');
    };

    return (
        <div className="contact-page">
            <h1>اتصل بنا</h1>
            <p className="contact-subtitle">يسعدنا دائماً سماع آرائكم واستفساراتكم</p>

            <div className="contact-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>الاسم</label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>البريد الإلكتروني</label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>الرسالة</label>
                        <textarea
                            rows={5}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">إرسال الرسالة</button>
                </form>

                <div className="contact-info">
                    <div className="info-item">
                        <span className="info-icon">📍</span>
                        <div>
                            <h3>موقعنا</h3>
                            <p>طنطا</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <span className="info-icon">📧</span>
                        <div>
                            <h3>البريد الإلكتروني</h3>
                            <p>support@unstore.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <span className="info-icon">📞</span>
                        <div>
                            <h3>الهاتف</h3>
                            <p>+20 123 456 7890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
