// app/services/web-development/page.tsx
// app/services/web-development/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@App/components/Navbar';
import Footer from '@App/components/Footer';

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <div className="p-4 md:p-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mt-14 mb-6">Web Development</h1>
          <p className="text-base md:text-lg text-gray-200 mb-8">
            Customized web solutions to elevate your online presence.
          </p>
          <Link href="/contact" className="bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-md shadow-md hover:bg-yellow-500">
            Get in Touch
          </Link>
        </div>

        {/* Hero Image */}
        {/* Uncomment the hero image if needed
        <div className="relative w-full h-72 md:h-96 mb-12">
          <Image 
            src="/assets/web/web-development-hero.jpg" // Ensure this image is in your public/assets directory.
            alt="Web Development"
            layout="fill"
            objectFit="cover"
            className="rounded-md shadow-lg"
          />
        </div>
        */}

        {/* Services Description Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">Why Choose Us?</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            At Valora Infotech, we specialize in building innovative, responsive, and scalable web applications that meet the unique needs of your business. Whether you need a simple website or a complex web-based solution, we have the expertise to deliver.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="mb-12">
          {/* SVG Images with descriptions */}
          {[
              {
                src: '/assets/web/svg1.svg',
                title: 'World Wide Web Development',
                description: 'Creating dynamic and responsive web applications that connect users to the vast world of information online. Our team utilizes modern frameworks and technologies to build websites that are not only visually appealing but also optimized for performance. We ensure that your web application is compatible across all devices and browsers, providing a seamless experience for your users.',
              },
              {
                src: '/assets/web/svg2.svg',
                title: 'Web Design and Development',
                description: 'Crafting visually appealing and user-friendly websites tailored to meet the unique needs of businesses and users. We focus on user experience (UX) and user interface (UI) design principles, ensuring that every element of your website is designed with your audience in mind. Our design process includes thorough research and analysis to create a customized design that aligns with your brand identity and business goals.',
              },
              {
                src: '/assets/web/svg3.svg',
                title: 'Team Work',
                description: 'Collaborating with talented professionals to deliver high-quality web solutions through effective communication and teamwork. Our diverse team brings a wealth of knowledge and experience, allowing us to tackle complex challenges with creativity and innovation. We believe in maintaining open lines of communication with our clients throughout the development process, ensuring that their feedback and ideas are incorporated.',
              },
              {
                src: '/assets/web/svg4.svg',
                title: 'Web Statistics',
                description: 'Utilizing analytics and data insights to optimize website performance and improve user engagement and experience. We implement advanced analytics tools to track user behavior, page performance, and conversion rates, providing valuable insights that drive informed decision-making. Our data-driven approach helps identify areas for improvement and allows us to fine-tune your website for better performance.',
              },
              {
                src: '/assets/web/svg5.svg',
                title: 'Structure of Web Development',
                description: 'Understanding the foundational principles and technologies that drive effective web development processes. We cover the essential components of web architecture, including front-end and back-end development, database management, and server configurations. Our team stays updated with the latest industry trends and best practices to ensure that your web development process is robust and scalable.',
              },
              {
                src: '/assets/web/svg6.svg',
                title: 'Comprehensive Web Development',
                description: 'Providing end-to-end web development services, from initial planning and design to deployment and maintenance. We guide you through every stage of the web development lifecycle, ensuring that your project is completed on time and within budget. Our comprehensive services include project scoping, prototyping, development, quality assurance, and post-launch support.',
              },
            ].map((item, index) => (
            <div key={item.title} className={`mb-12 p-4 md:p-6 rounded-3xl shadow-lg bg-gradient-to-r ${index % 2 === 0 ? 'from-primary to-[#f1f0f0]' : 'from-[#f1f0f0] to-primary'} bg-opacity-50`}>
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start justify-center`}>
                <div className={`flex-shrink-0 w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'} flex justify-center items-center`}>
                  <Image 
                    src={item.src}
                    alt={item.title} 
                    width={250}
                    height={250}
                    className="transition-transform duration-300 transform hover:scale-105" 
                  />  
                </div>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'} flex flex-col justify-center items-start text-left`}>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2 py-5">{item.title}</h3>
                  <p className="text-base text-green-950 mb-4">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">Ready to Start Your Project?</h2>
          <p className="text-base md:text-lg text-gray-400 mb-6">
            Let’s bring your ideas to life with our expert web development services.
          </p>
          <Link href="/contact" className="bg-primary text-white px-6 py-2 md:px-8 md:py-3 rounded-md shadow-md hover:bg-yellow-500">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  );
};

export default WebDevelopmentPage;
