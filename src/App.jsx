import sunsetIcon from "./assets/sunset.svg";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
      <img src={sunsetIcon} alt="Sunset Icon" className="w-40 h-40 mb-4" />
      <h1 className="text-2xl font-bold text-blue-500">
        ¡Hola, Sunset Experience!
      </h1>
    </div>
  );
}

export default App;
