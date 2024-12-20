import ElTabo from '../assets/ElTabo5.jpg';

const Banner = () => {

  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${ElTabo})` }}>
      <div className="absolute inset-0 bg-black/50"></div>
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
