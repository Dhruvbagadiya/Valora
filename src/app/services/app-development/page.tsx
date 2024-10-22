// app/services/app-development/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@App/components/Navbar';
import Footer from '@App/components/Footer';

const MobileDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />

      <div className="container mx-auto p-4 md:p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mt-14 mb-4">Mobile Application Development</h1>
          <p className="text-base md:text-lg text-white mb-8">
            Innovative mobile solutions to enhance user engagement and reach.
          </p>
          <Link href="/contact" className="bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-md shadow-md hover:bg-yellow-500">
            Get in Touch
          </Link>
        </div>

        {/* Services Description Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">Why Choose Us?</h2>
          <p className="text-base md:text-lg text-white leading-relaxed">
            At Valora Infotech, we specialize in creating user-friendly mobile applications that cater to the needs of modern users. Our team is skilled in both iOS and Android development, ensuring that your app reaches a wider audience.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="mb-12">
          {/* SVG Images with descriptions */}
          {[
              {
                src: '/assets/mobile/svg1.svg',
                title: 'Cross-Platform Development',
                description: 'We develop applications that work seamlessly across different platforms, allowing you to reach users on both iOS and Android devices with a single codebase. Our expertise in frameworks like React Native ensures high performance and a native look and feel.',
              },
              {
                src: '/assets/mobile/svg2.svg',
                title: 'User-Centric Design',
                description: 'Our focus is on creating intuitive and engaging user experiences. We employ design thinking principles to ensure that every aspect of the app is tailored to meet user needs, making navigation simple and enjoyable.',
              },
              {
                src: '/assets/mobile/svg3.svg',
                title: 'Scalable Architecture',
                description: 'We build applications with a robust architecture that can handle increasing loads and complex functionalities. This scalability ensures that your app can grow alongside your business.',
              },
              {
                src: '/assets/mobile/svg4.svg',
                title: 'Performance Optimization',
                description: 'Our development process includes rigorous performance testing and optimization to ensure that your app runs smoothly and efficiently, providing a seamless user experience even under heavy load.',
              },
              {
                src: '/assets/mobile/svg5.svg',
                title: 'Regular Updates and Maintenance',
                description: 'Post-launch, we provide ongoing support and updates to ensure that your application remains relevant and functional. We monitor user feedback and performance metrics to implement necessary improvements.',
              },
              {
                src: '/assets/mobile/svg6.svg',
                title: 'Integration with Backend Services',
                description: 'Our team can integrate your mobile app with various backend services and APIs, enabling functionalities such as user authentication, data storage, and real-time updates to enhance user engagement.',
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
                    className=" transition-transform duration-300 transform hover:scale-105" 
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">Ready to Build Your App?</h2>
          <p className="text-base md:text-lg text-white mb-6">
            Let’s turn your ideas into reality with our expert mobile development services.
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

export default MobileDevelopmentPage;
