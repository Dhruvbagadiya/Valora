// app/services/ai-ml/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components//Footer';

const AiMlPage = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      <div className="container mx-auto p-4 md:p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mt-14 mb-4">AI & ML</h1>
          <p className="text-base md:text-lg text-white mb-8">
            Innovative AI solutions that transform businesses and create intelligent systems.
          </p>
          <Link href="/contact" className="bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-md shadow-md hover:bg-yellow-500">
            Get in Touch
          </Link>
        </div>

        {/* Services Description Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">Why Choose Us?</h2>
          <p className="text-base md:text-lg text-white leading-relaxed">
            At Valora Infotech, we leverage AI & Machine Learning technologies to develop intelligent, data-driven solutions. From predictive analytics to deep learning, we build models that help you make informed decisions and automate complex tasks.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="mb-12">
          {/* SVG Images with descriptions */}
          {[    
            {
              src: '/assets/ai-ml/svg1.svg',
              title: 'Predictive Analytics',
              description: 'We harness the power of machine learning to forecast future outcomes based on historical data, enabling you to make proactive business decisions and stay ahead of the competition. Our predictive models are designed to optimize accuracy and performance, tailored to your specific use case and industry requirements.'
            },
            {
              src: '/assets/ai-ml/svg2.svg',
              title: 'Natural Language Processing (NLP)',
              description: 'Our NLP solutions allow you to extract valuable insights from text data, automate customer support, and enhance communication with AI-powered chatbots. By employing advanced algorithms, we create systems that understand, interpret, and generate human language, improving user experience and operational efficiency.'
            },
            {
              src: '/assets/ai-ml/svg3.svg',
              title: 'Computer Vision',
              description: 'We develop AI systems that analyze and interpret visual data, enabling automated recognition and analysis of images and videos. From facial recognition to object detection and image segmentation, our solutions empower businesses to extract actionable insights from visual content.'
            },
            {
              src: '/assets/ai-ml/svg4.svg',
              title: 'Deep Learning Solutions',
              description: 'With deep learning techniques, we build sophisticated models for tasks such as image classification, speech recognition, and recommendation systems. Our expertise in neural networks ensures that we deliver cutting-edge solutions that learn and adapt to your needs.'
            },
            {
              src: '/assets/ai-ml/svg5.svg',
              title: 'AI for Automation',
              description: 'We design AI systems that automate repetitive and complex processes, allowing you to focus on strategic tasks. From robotic process automation (RPA) to intelligent decision-making systems, we implement solutions that increase efficiency, reduce costs, and minimize human error.'
            },
            {
              src: '/assets/ai-ml/svg6.svg',
              title: 'Custom AI Models',
              description: 'Our team develops tailored AI models that align with your business objectives. Whether you need a recommendation engine, fraud detection system, or any specialized AI solution, we work closely with you to design models that drive results and provide a competitive advantage.'
            },
          ].map((item, index) => (
            <div key={item.title} className={`mb-12 p-4 md:p-6 rounded-3xl shadow-lg bg-gradient-to-r ${index % 2 === 0 ? 'from-primary to-[#ffffff]' : 'from-[#ffffff] to-primary'} bg-opacity-50`}>
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start justify-center`}>
                <div className={`flex-shrink-0 w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'} flex justify-center items-center`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={250} // Adjust the width as needed
                    height={250} // Adjust the height as needed
                    className="transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'} flex flex-col justify-center items-start text-left`}>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2 py-5">{item.title}</h3>
                  <p className="text-base text-[#000000] mb-4">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">Ready to Leverage AI & ML?</h2>
          <p className="text-base md:text-lg text-white mb-6">
            Let’s develop intelligent systems that drive innovation and efficiency in your business.
          </p>
          <Link href="/contact" className="bg-primary text-white px-6 py-2 md:px-8 md:py-3 rounded-md shadow-md hover:bg-yellow-500">
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AiMlPage;
