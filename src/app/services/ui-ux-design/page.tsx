// app/services/ui-ux-design/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';

const UIUXDesignPage = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />

      <div className="container mx-auto p-4 md:p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mt-14 mb-4">UI/UX Design</h1>
          <p className="text-base md:text-lg text-white mb-8">
            Our UI/UX design services focus on creating user-centric designs that enhance the user experience while being visually appealing and functional.
          </p>
          <Link href="/contact" className="bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-md shadow-md hover:bg-yellow-500">
            Get in Touch
          </Link>
        </div>

        {/* Services Description Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">Why Choose Us?</h2>
          <p className="text-base md:text-lg text-white leading-relaxed">
            At Valora Infotech, we understand the importance of an engaging and intuitive user experience. Our dedicated team combines creativity with functionality to create designs that resonate with users while effectively conveying your brand's message.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="mb-12">
          {/* SVG Images with descriptions */}
          {[ 
              {
                src: '/assets/uiux/svg6.svg',
                title: 'User Research & Analysis',
                description: 'We conduct thorough user research to understand the needs, behaviors, and pain points of your target audience. This involves interviews, surveys, and usability tests to gather insights. By analyzing this data, we create user personas and scenarios that guide the design process, ensuring our solutions are tailored to meet user expectations and improve satisfaction.'
              },
              {
                src: '/assets/uiux/svg2.svg',
                title: 'Wireframing & Prototyping',
                description: 'Our wireframing and prototyping processes allow us to visualize the user journey early in the design phase. We create low-fidelity wireframes to outline the structure and flow of the application, followed by high-fidelity prototypes that simulate user interactions. This iterative approach enables us to refine the design based on feedback, ensuring a seamless and intuitive interface.'
              },
              {
                src: '/assets/uiux/svg3.svg',
                title: 'Visual Design',
                description: 'We create visually stunning designs that capture your brand’s essence while enhancing usability. Our team focuses on typography, color theory, and visual hierarchy to ensure that each design element serves a purpose. The result is an engaging aesthetic that not only attracts users but also guides them seamlessly through their journey, making every interaction enjoyable.'
              },
              {
                src: '/assets/uiux/svg4.svg',
                title: 'Usability Testing',
                description: 'Our iterative design approach includes usability testing at various stages to gather user feedback and validate design decisions. By observing real users interacting with prototypes, we identify potential issues and areas for improvement. This data-driven approach allows us to refine the design for optimal performance and user satisfaction before launch.'
              },
              {
                src: '/assets/uiux/svg5.svg',
                title: 'Responsive Design',
                description: 'We ensure that our designs are responsive and functional across all devices, from desktops to smartphones. By employing flexible grids and layouts, along with adaptive images and media queries, we create a consistent experience that adjusts to different screen sizes and orientations. This commitment to responsive design ensures that users enjoy seamless interactions, regardless of how they access your application.'
              },
              {
                src: '/assets/uiux/svg1.svg',
                title: 'Brand Identity Integration',
                description: 'We seamlessly integrate your brand identity into the UI/UX design, ensuring that it aligns with your overall brand strategy. From colors and typography to imagery and tone of voice, we create a cohesive design that reflects your brand’s values and resonates with your target audience. This consistency builds trust and recognition, ultimately enhancing user loyalty and engagement.'
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
                  <h3 className="text-lg md:text-xl font-bold text-secondary mb-2 py-5">{item.title}</h3>
                  <p className="text-base text-green-900 mb-4">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">Ready to Enhance Your User Experience?</h2>
          <p className="text-base md:text-lg text-gray-200 mb-6">
            Let’s create an unforgettable user experience together with our expert UI/UX design services.
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

export default UIUXDesignPage;
