const Banner = () => {
  

  return (
    <div
      className="relative h-[400px] md:h-[500px] w-full bg-cover bg-center loading-lazy"
      style={{ backgroundImage: "url('/src/assets/ElTabo5.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
    

      {/* Contenido Central */}
      <div className="relative flex flex-col justify-center items-center h-full text-left px-4 md:px-12 lg:px-24 gap-2">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-agbalumo mb-3">
          Limpia tu cuerpo, sana tu alma
        </h1>
        <p className="text-white font-inter font-bold text-base md:text-lg lg:text-xl">
          Empieza tu desconexión desde el primer momento.
        </p>
      </div>
      
    </div>
  );
};

export default Banner;
