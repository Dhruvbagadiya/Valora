// app/services/cloud-solutions/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';

const CloudSolutionsPage = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      <div className="container mx-auto p-4 md:p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary mt-14 mb-4">Cloud Solutions</h1>
          <p className="text-base md:text-lg text-secondary mb-8">
            Revolutionize your business with scalable and secure cloud solutions tailored to your needs.
          </p>
          <Link href="/contact" className="bg-blue-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-md shadow-md hover:bg-blue-600">
            Get Started
          </Link>
        </div>

        {/* Cloud Solutions Description Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Why Cloud?</h2>
          <p className="text-base md:text-lg text-secondary leading-relaxed">
            Valora Infotech offers state-of-the-art cloud solutions that enable businesses to scale effortlessly, enhance security, and improve operational efficiency. With our cloud expertise, you can transition smoothly to the cloud while minimizing risks and maximizing returns.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="mb-12">
          {/* Feature Cards */}
          {[
            {
              src: '/assets/web/svg1.svg',
              title: 'Cloud Infrastructure',
              description: 'Our solutions provide highly scalable cloud infrastructure, ensuring seamless integration and flexible resource allocation. Whether you’re expanding or optimizing your existing infrastructure, we have the tools and expertise to help you deploy, manage, and scale in the cloud environment.',
            },
            {
              src: '/assets/web/svg2.svg',
              title: 'Security and Compliance',
              description: 'We prioritize the security of your data, offering cloud solutions with robust encryption, regular security updates, and compliance with industry standards like GDPR and HIPAA. Our cloud architecture ensures your sensitive information is protected at all times.',
            },
            {
              src: '/assets/web/svg3.svg',
              title: 'Cloud Migration',
              description: 'Seamlessly transition your business to the cloud with minimal downtime and disruption. Our team handles everything, from data transfer to application migration, ensuring a smooth transition while preserving the integrity of your data and operations.',
            },
            {
              src: '/assets/web/svg4.svg',
              title: 'Performance Optimization',
              description: 'We offer ongoing cloud performance optimization, ensuring your resources are utilized efficiently and your systems run at peak performance. Our monitoring tools detect bottlenecks, while we fine-tune your cloud environment to deliver high availability and fast response times.',
            },
            {
              src: '/assets/web/svg5.svg',
              title: 'AI and Machine Learning Integration',
              description: 'Leverage the power of cloud-based AI and machine learning to enhance decision-making, automate processes, and analyze large datasets in real-time. Our cloud solutions integrate cutting-edge AI tools to help your business stay ahead of the competition.',
            },
            {
              src: '/assets/web/svg6.svg',
              title: 'Continuous Support',
              description: 'Our team provides 24/7 support, ensuring that your cloud environment remains stable, secure, and optimized. From troubleshooting to updates, we offer comprehensive support to ensure your cloud infrastructure continues to meet your business needs.',
            },
          ].map((item, index) => (
            <div key={item.title} className={`mb-12 p-4 md:p-6 rounded-3xl shadow-lg bg-gradient-to-r ${index % 2 === 0 ? 'from-primary to-secondary' : 'from-secondary to-primary'} bg-opacity-50`}>
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start justify-center`}>
                <div className={`flex-shrink-0 w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'} flex justify-center items-center`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left text-white p-4">
                  <h3 className="text-lg md:text-xl font-bold text-blue-500 mb-4">{item.title}</h3>
                  <p className="text-base text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">Ready to Harness the Power of the Cloud?</h2>
          <p className="text-base md:text-lg text-secondary mb-6">
            Empower your business with our comprehensive cloud solutions, tailored to your needs.
          </p>
          <Link href="/contact" className="bg-blue-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-md shadow-md hover:bg-blue-600">
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CloudSolutionsPage;
