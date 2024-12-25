import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.jsx';
import Alert from '../components/Alert.jsx';

const Contact = () => {
    const formRef = useRef();
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);
    const [isCooldown, setIsCooldown] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isCooldown) return;

        setLoading(true);
        setIsCooldown(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Adrian Osorio Blanchard',
                    from_email: form.email,
                    to_email: 'Osorioadrianb@gmail.com',
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )
            .then(
                () => {
                    setLoading(false);
                    showAlert({
                        show: true,
                        text: 'Thank you for your message 😃',
                        type: 'success',
                    });

                    setTimeout(() => {
                        hideAlert(false);
                        setForm({
                            name: '',
                            email: '',
                            message: '',
                        });
                    }, 3000);

                    setTimeout(() => setIsCooldown(false), 3000);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    showAlert({
                        show: true,
                        text: "I did not get your email! Please try again.",
                        type: 'danger',
                    });

                    setTimeout(() => setIsCooldown(false), 3000);
                },
            );
    };

    return (
        <section className="text-white" id="contact">
            <div className="relative py-28 flex items-center justify-center flex-col px-4" data-aos="fade-up">
                <div className="text-3xl sm:text-4xl md:text-5xl text-center mb-8 mt-16 whitespace-nowrap">Contact Me</div>
                <p className="text-lg sm:text-xl md:text-2xl text-center mb-8">
                    I&#39;d love to hear from you! Please feel free to send me an email, thank you!
                </p>

                <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-blue-500">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="mt-2 w-full px-4 py-2 border border-blue-500 rounded-md shadow-sm focus:outline-none text-blue-800 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-blue-500">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="mt-2 w-full px-4 py-2 border border-blue-500 rounded-md shadow-sm focus:outline-none text-blue-800 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-blue-500">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows="5"
                            className="mt-2 w-full px-4 py-2 border border-blue-500 rounded-md shadow-sm focus:outline-none text-blue-800 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition ${isCooldown ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isCooldown}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
            {alert.show && <Alert message={alert.text} type={alert.type} />}
        </section>
    );
};

export default Contact;
