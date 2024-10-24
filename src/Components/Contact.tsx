"use client";

import { useState, useEffect } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [success, setSuccess] = useState(false);



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formPayload = new FormData();
        formPayload.append("access_key", "c79d1361-f4dd-40f5-9fd3-48550bb65493");
        formPayload.append("name", formData.name);
        formPayload.append("email", formData.email);
        formPayload.append("message", formData.message);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Accept": "application/json",
            },
            body: formPayload,
        }).then((res) => res.json());

        if (res.success) {
            setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        }
    };

    return (
        <section id="contact" className={`py-16 dark:bg-gray-900 dark:text-white bg-white text-black`}>
            <div className="container mx-auto px-6 py-7 md:px-12 lg:px-24 text-center">
                <div className="flex items-center mb-6 justify-center">
                    <h2 className={`text-4xl md:text-5xl font-bold dark:text-whitetext-black`}>
                        Contact <span className="text-primary">Us</span>
                    </h2>
                </div>
                <p className="mb-12 text-lg">We&apos;d love to hear from you! Please fill out the form below or reach out to us directly.</p>

                {success && <div className="mb-4 text-green-500">Message sent successfully!</div>}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <form onSubmit={onSubmit} className={`p-8 rounded-lg shadow-md dark:bg-gray-800 bg-gray-100`}>
                        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 bg-white text-black border-gray-300`}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Your Email"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 bg-white text-black border-gray-300'}`}
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your Message"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32 dark:bg-gray-700 dark:text-white dark:border-gray-600 bg-white text-black border-gray-300`}
                            />
                        </div>
                        <button type="submit" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors">
                            Send Message
                        </button>
                    </form>

                    {/* Company Details */}
                    <div className={`p-8 rounded-lg shadow-md dark:bg-gray-800 bg-gray-100`}>
                        <h3 className="text-2xl font-semibold mb-4">Our Contact Information</h3>
                        <p className="mb-2"><strong>Email:</strong> admin@valorainfotech.com</p>
                        <p className="mb-4"><strong>Address:</strong> 207, Akshar Square B/h Cancer Hospital, Dabholi Road, Surat, Gujarat</p>

                        {/* Map Section */}
                        <div className="mt-4">
                            <h4 className="text-xl font-semibold mb-2">Find Us Here</h4>
                            <iframe
                                title="Company Location"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14875.867681707166!2d72.8177033!3d21.2331603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f967d5d93bb%3A0x77fb537ecd3fbc7!2sValora%20infotech!5e0!3m2!1sen!2sin!4v1727086162788!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                className="rounded-lg"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
