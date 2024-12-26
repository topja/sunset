
import '@fortawesome/fontawesome-free/css/all.min.css';
import AtardecerImage from '../assets/Atardecer.avif';
import AboutUsImage from '../assets/AboutUs.avif';

const About = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative mt-24 md:mt-32 mx-4 md:mx-8 lg:mx-24 h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center rounded-2xl" style={{ backgroundImage: `url(${AtardecerImage})` }} >
        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-agbalumo mb-3">Sobre Nosotros</h1>
          <p className="text-white font-inter font-bold text-base md:text-lg lg:text-xl">
            Descubra quiénes somos y qué nos impulsa a brindar experiencias excepcionales.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-6 lg:px-14 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-Charcoal mb-6 font-agbalumo">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 font-inter leading-relaxed mb-6">
              En <strong>Sunset Experience</strong>, creemos en el poder de la simplicidad, la naturaleza y la conexión. Nuestro viaje comenzó en <strong>El Tabo</strong>, donde descubrimos un equilibrio perfecto entre relajación y aventura.
            </p>
            <p className="text-gray-600 leading-relaxed font-inter mb-6">
              Nuestro objetivo es compartir esta serenidad contigo a través de experiencias personalizadas, vistas impresionantes y momentos que quedarán contigo para siempre.
            </p>
            

          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              src={AboutUsImage}
              alt="Our Story"
              className="rounded-lg shadow-lg w-full object-cover h-96"
            />
            <div className="absolute font-inter bottom-0 right-0 bg-Tan text-white text-lg font-medium px-4 py-2 rounded-tl-lg shadow-lg">
              Disfruta el Atardecer
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-white lg:px-14 py-12 md:py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-Charcoal mb-8 font-agbalumo">
            ¿Por qué Elegirnos?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Característica 1 */}
            <div className="text-center font-inter p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-Tan text-white flex items-center justify-center rounded-full">
                <i className="fas fa-heart text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Cuidado Personalizado</h4>
              <p className="text-gray-600">
                Experiencias diseñadas especialmente para ti, para hacer tu viaje inolvidable.
              </p>
            </div>

            {/* Característica 2 */}
            <div className="text-center font-inter p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-Tan text-white flex items-center justify-center rounded-full">
                <i className="fas fa-leaf text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Naturaleza Primero</h4>
              <p className="text-gray-600">
                Conéctate con la naturaleza mientras disfrutas de la tranquilidad y la belleza.
              </p>
            </div>

            {/* Característica 3 */}
            <div className="text-center font-inter p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-Tan text-white flex items-center justify-center rounded-full">
                <i className="fas fa-map-marker-alt text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Ubicación Perfecta</h4>
              <p className="text-gray-600">
                Explora los mejores lugares de El Tabo con nuestras guías y tours seleccionados.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
