// app/services/digital-marketing/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const DigitalMarketingPage = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      <div className="container mx-auto p-4 md:p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mt-14 mb-4">Digital Marketing</h1>
          <p className="text-base md:text-lg text-white mb-8">
            Transform your brand with our expert digital marketing strategies.
          </p>
          <Link href="/contact" className="bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-md shadow-md hover:bg-yellow-500">
            Get in Touch
          </Link>
        </div>

        {/* Services Description Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">Why Choose Us?</h2>
          <p className="text-base md:text-lg text-white leading-relaxed">
            At Valora Infotech, we leverage data-driven digital marketing techniques to enhance your brand's online presence. From SEO to content creation and social media marketing, we ensure that your business reaches its target audience effectively.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="mb-12">
          {/* SVG Images with descriptions */}
          {[
            {
              src: '/assets/marketing/svg1.svg',
              title: 'Search Engine Optimization (SEO)',
              description: 'Our SEO strategies are designed to boost your website’s visibility on search engines, driving organic traffic to your business. We conduct in-depth keyword research, optimize on-page content, and build high-quality backlinks to ensure that your site ranks well for relevant searches.'
            },
            {
              src: '/assets/marketing/svg2.svg',
              title: 'Social Media Marketing',
              description: 'We create compelling social media campaigns that engage your audience and build brand loyalty. Our team utilizes platforms like Facebook, Instagram, and LinkedIn to reach potential customers, driving engagement through targeted content and ads that resonate with your audience.'
            },
            {
              src: '/assets/marketing/svg3.svg',
              title: 'Content Marketing',
              description: 'Our content marketing services focus on creating valuable and relevant content that attracts and retains your target audience. We specialize in blog posts, videos, infographics, and whitepapers that are designed to educate and engage, positioning your brand as a leader in the industry.'
            },
            {
              src: '/assets/marketing/svg4.svg',
              title: 'Email Marketing',
              description: 'We design and implement personalized email marketing campaigns that nurture leads and convert them into customers. Our data-driven approach ensures that your emails reach the right audience at the right time, with tailored messaging that drives results.'
            },
            {
              src: '/assets/marketing/svg5.svg',
              title: 'Pay-Per-Click (PPC) Advertising',
              description: 'We manage highly targeted PPC campaigns that maximize your return on investment. Whether it’s Google Ads, Facebook Ads, or LinkedIn Ads, we optimize each campaign to ensure that you’re reaching the right people while staying within your budget.'
            },
            {
              src: '/assets/marketing/svg6.svg',
              title: 'Analytics and Reporting',
              description: 'Our team tracks the performance of your digital marketing campaigns in real-time, providing detailed reports that highlight key metrics. We continuously optimize campaigns based on the data, ensuring that you achieve your marketing goals and see a high return on investment.'
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">Ready to Elevate Your Digital Presence?</h2>
          <p className="text-base md:text-lg text-white mb-6">
            Let us help you reach your audience with our digital marketing expertise.
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

export default DigitalMarketingPage;
