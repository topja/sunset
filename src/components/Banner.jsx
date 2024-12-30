import ElTabo from '../assets/ElTabo5.jpg';

const Banner = () => {

  return (
    <div className="relative mt-24 md:mt-32 mx-4 md:mx-8 lg:mx-24 h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center rounded-2xl" style={{ backgroundImage: `url(${ElTabo})` }}>
      <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
      <div className="text-center relative z-10 text-white px-4">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-agbalumo mb-3">Limpia tu cuerpo, sana tu alma</h1>
        <p className="text-white font-inter font-bold text-base md:text-lg lg:text-xl">
          Empieza tu desconexión desde el primer momento.
        </p>
      </div>
    </div>       
  );
};

export default Banner;
