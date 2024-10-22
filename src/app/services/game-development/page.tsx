// app/services/game-development/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';

const GameDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />

      <div className="container mx-auto p-4 md:p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mt-14 mb-4">Game Development</h1>
          <p className="text-base md:text-lg text-white mb-8">
            Immersive game experiences with captivating stories and stunning visuals.
          </p>
          <Link href="/contact" className="bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-md shadow-md hover:bg-yellow-500">
            Get in Touch
          </Link>
        </div>

        {/* Services Description Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">Why Choose Us?</h2>
          <p className="text-base md:text-lg text-white leading-relaxed">
            At Valora Infotech, we craft engaging and visually impressive games, focusing on player experience and high-performance gameplay. Our team is well-versed in game engines like Unity and Unreal Engine, ensuring that we bring your vision to life.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="mb-12">
          {/* SVG Images with descriptions */}
          {[
            {
              src: '/assets/game/svg1.svg',
              title: 'Cross-Platform Game Development',
              description: 'We build games that run seamlessly on multiple platforms, including PC, consoles, and mobile devices, using industry-leading technologies like Unity and Unreal Engine. By developing a single codebase for different platforms, we ensure a consistent gaming experience, optimized for each device’s unique capabilities. Our goal is to maximize your gameFs reach while maintaining high performance and fluid gameplay across all platforms.'
            },
            {
              src: '/assets/game/svg2.svg',
              title: 'Immersive Storytelling',
              description: 'Our game development process emphasizes rich, immersive storytelling that captivates players from the very start. We combine creative writing with dynamic game mechanics, building narratives that evolve with player decisions. Whether it’s an open-world RPG or a narrative-driven adventure, our team ensures that the story is deeply integrated into the gameplay, making each interaction meaningful and memorable.'
            },
            {
              src: '/assets/game/svg3.svg',
              title: 'High-Quality Visuals',
              description: 'We push the boundaries of graphical fidelity by utilizing cutting-edge rendering techniques, advanced shaders, and realistic lighting. From meticulously crafted environments to lifelike character animations, our visuals are designed to create truly immersive experiences. Whether it’s photorealistic or stylized art, we adapt the visuals to suit the tone and style of your game, ensuring an aesthetic that resonates with players and enhances their overall experience.'
            },
            {
              src: '/assets/game/svg4.svg',
              title: 'Multiplayer and Online Integration',
              description: 'We specialize in creating robust multiplayer experiences, from competitive eSports games to cooperative multiplayer adventures. Our expertise in real-time networking ensures low-latency gameplay, smooth synchronization between players, and the seamless integration of matchmaking and leaderboards. Whether you’re aiming for small-scale multiplayer sessions or massive online battles, we develop scalable server architectures that ensure a stable and enjoyable experience for all players.'
            },
            {
              src: '/assets/game/svg5.svg',
              title: 'Game Monetization',
              description: 'Our team works closely with you to design effective and player-friendly monetization strategies. We offer expertise in integrating in-game purchases, subscriptions, and rewarded ads in ways that complement the gaming experience rather than disrupt it. From implementing in-app purchases in mobile games to creating premium downloadable content (DLC) for PC and console titles, we ensure your game generates revenue without sacrificing player engagement or enjoyment.'
            },
            {
              src: '/assets/game/svg6.svg',
              title: 'Post-Launch Support and Updates',
              description: 'Launching a game is just the beginning. We provide continuous post-launch support, from addressing bugs and technical issues to developing new content and expansions. We also monitor player feedback and game performance, rolling out updates and patches to ensure long-term player retention. Whether it’s balancing gameplay mechanics or introducing new levels, we make sure your game stays fresh and engaging long after its initial release.'
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
                  <p className="text-base text-[#000000] mb-4">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">Ready to Create Your Game?</h2>
          <p className="text-base md:text-lg text-white mb-6">
            Let’s turn your game ideas into a reality with our expert game development services.
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

export default GameDevelopmentPage;
