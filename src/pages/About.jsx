import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/src/assets/Atardecer.avif')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-agbalumo mb-3">About Us</h1>
          <p className="text-white font-inter font-bold text-base md:text-lg lg:text-xl">
            Discover who we are and what drives us to provide exceptional experiences.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-agbalumo">
              Our Story
            </h2>
            <p className="text-gray-600 font-inter leading-relaxed mb-6">
              At <strong>Sunset Experience</strong>, we believe in the power of simplicity, nature, and connection. Our journey started in <strong>El Tabo</strong>, where we discovered a perfect balance between relaxation and adventure. 
            </p>
            <p className="text-gray-600 leading-relaxed font-inter mb-6">
              We aim to share this serenity with you through personalized experiences, breathtaking views, and moments that will remain with you forever.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-lg transition font-inter duration-300">
              Explore Experiences
            </button>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              src="/src/assets/AboutUs.avif"
              alt="Our Story"
              className="rounded-lg shadow-lg w-full object-cover h-96"
            />
            <div className="absolute font-inter bottom-0 right-0 bg-amber-500 text-white text-lg font-medium px-4 py-2 rounded-tl-lg shadow-lg">
              Embrace the Sunset
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 font-agbalumo">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center font-inter p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-500 text-white flex items-center justify-center rounded-full">
                <i className="fas fa-heart text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Personalized Care</h4>
              <p className="text-gray-600">
                Experiences tailored just for you to make your journey unforgettable.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center font-inter p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-500 text-white flex items-center justify-center rounded-full">
                <i className="fas fa-leaf text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Nature First</h4>
              <p className="text-gray-600">
                Connect with nature while enjoying tranquility and beauty.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center font-inter p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-500 text-white flex items-center justify-center rounded-full">
                <i className="fas fa-map-marker-alt text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Perfect Location</h4>
              <p className="text-gray-600">
                Explore El Tabo's best spots with our curated guides and tours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
