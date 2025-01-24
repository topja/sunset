import CasaNeruda from "../assets/CasaNeruda.jpg";
import Reiki from "../assets/Reiki.webp";
import KitClasico from "../assets/KitClasico.jpg";
import KitPlayero from "../assets/KitPlayero.avif";
import Surf from "../assets/Surf.jpg";
import Bicicleta from "../assets/Bicicleta.png";
import Restaurant from "../assets/Restaurant.jpg";
import Picnic from "../assets/Picnic.jpg";
import KitPisco from "../assets/KitPisco.jpg";
import PiscinaImage from "../assets/Piscina.avif";
import ComedorImage from "../assets/Comedor.avif";
import SalaImage from "../assets/Sala.avif";
import CocinaImage from "../assets/Cocina.avif";
import BalconImage from "../assets/Balcon.avif";
import Resena1 from "../assets/Resena1.jpg";
import Resena2 from "../assets/Resena2.jpg";

export const tabs = [
  { id: "kits", label: "Kit Bienvenida" },
  { id: "experiences", label: "Experiencias" },
];

export const mapSectionImages = [
  CasaNeruda,
  PiscinaImage,
  ComedorImage,
  SalaImage,
  CocinaImage,
  BalconImage,
  Resena1,
  Resena2,
];

export const cards = {
  kits: [
    {
      id: "kit-1",
      title: "Kit Clásico",
      description: "Botella de vino y chocolate.",
      image: KitClasico,
    },
    {
      id: "kit-2",
      title: "Kit Playero",
      description: "Aperol y snack sorpresa.",
      image: KitPlayero,
    },
    {
      id: "kit-3",
      title: "Kit de Relajación",
      description: "Pisco sour, galletas, y una vela aromática",
      image: KitPisco,
    },
  ],
  relax: [
    {
      id: "exp-relax-1",
      title: "Tour a la casa de Pablo Neruda",
      description: "Visita guiada a sitios históricos.",
      completeDescription: "Visita guiada a la casa de Pablo Neruda, poeta chileno y premio Nobel de Literatura, ubicada en la localidad costera de Isla Negra, en la comuna de El Quisco (Región de Valparaíso). Esta casa, que comenzó a construirse alrededor de 1937 y fue ampliada en distintas etapas, fue el principal refugio del poeta, donde plasmó su pasión por el mar y coleccionó diversos objetos navales. Se trata de una de las tres residencias que Neruda tuvo en Chile, declarada Monumento Nacional y convertida actualmente en un museo que atrae a visitantes de todo el mundo.",
      image: CasaNeruda,
      images: [CasaNeruda, CasaNeruda, CasaNeruda, CasaNeruda],

      duration: "2 horas",
      price: "Desde 20.000 CLP/Persona",
    },
    {
      id: "exp-relax-2",
      title: "Sesión de Reiki",
      description: "Bienestar y energía personal.",
      completeDescription: "El Reiki es una técnica de sanación que se basa en la imposición de manos. Es una terapia alternativa que busca equilibrar la energía del cuerpo y la mente. El Reiki se basa en la creencia de que la energía vital fluye a través de todos los seres vivos y que cuando esta energía está bloqueada, puede causar enfermedades y malestar. El Reiki se utiliza para aliviar el estrés, la ansiedad, el dolor y otras dolencias físicas y emocionales.",
      image: Reiki,
      images: [Reiki, Reiki, Reiki, Reiki],
      duration: "1 hora",
      price: "Desde 10.000 CLP/Persona",
    },
  ],
  food: [
    {
      id: "exp-food-1",
      title: "Cena en el Restaurante",
      description: "Menú de 3 tiempos.",
      completeDescription: "La cena en el restaurante es una experiencia gastronómica que consiste en disfrutar de una comida en un restaurante. La cena en el restaurante es una actividad popular en todo el mundo, ya que es una forma de disfrutar de la comida y la compañía de amigos y familiares. La cena en el restaurante es una actividad relajante y divertida que se puede disfrutar en solitario o en grupo. La cena en el restaurante es una forma de disfrutar de la gastronomía local y de probar platos nuevos y ex óticos.",
      image: Restaurant,
      images: [Restaurant, Restaurant, Restaurant, Restaurant],
      duration: "2 horas",
      price: "Desde 10.000 CLP/Persona",
    },
    {
      id: "exp-food-2",
      title: "Picnic en la playa",
      description: "Cesta con vino y quesos.",
      completeDescription: "El picnic en la playa es una experiencia gastronómica perfecta para disfrutar de una comida al aire libre junto al mar. Es especialmente popular durante el verano, cuando el sol y la brisa marina invitan a relajarse sobre la arena. Además de ser una forma excelente de conectar con la naturaleza, ofrece la oportunidad de compartir momentos inolvidables en familia o con amigos. Con su ambiente relajante y divertido, el picnic en la playa puede disfrutarse tanto en solitario como en grupo, brindando siempre una experiencia refrescante y placentera.",
      image: Picnic,
      images: [Picnic, Picnic, Picnic, Picnic],
      duration: "2 horas",
      price: "Desde 10.000 CLP/Persona",
    },
  ],
  sports: [
    {
      id: "exp-sports-1",
      title: "Clase de Surf",
      description: "Instructor y tabla incluidos.",
      completeDescription: "El surf es un deporte acuático que consiste en deslizarse sobre las olas con una tabla. En El Tabo, famoso por su ambiente playero y sus olas adecuadas, este deporte ofrece una experiencia emocionante para quienes buscan combinar actividad física y contacto con el mar. Practicar surf requiere equilibrio, fuerza y coordinación, y puede disfrutarse tanto en solitario como en grupo, haciendo de él una actividad versátil para cualquier época del año. Aunque su popularidad suele aumentar en verano, cuando las olas son más grandes y consistentes, el surf sigue siendo una excelente opción para los amantes del mar durante el resto de las estaciones.",
      image: Surf,
      images: [Surf, Surf, Surf, Surf],
      duration: "2 horas",
      price: "Desde 15.000 CLP/Persona",
    },
    {
      id: "exp-sports-2",
      title: "Tour en bicicleta",
      description: "Recorrido por la ciudad.",
      completeDescription: "El tour en bicicleta es una actividad deportiva que permite recorrer la ciudad de una forma diferente, al tiempo que fomenta el ejercicio y el contacto con el aire libre. Se trata de una opción popular en todo el mundo, ya que brinda la oportunidad de descubrir tanto espacios urbanos como entornos naturales. Además, su carácter relajante y divertido lo hace ideal para disfrutar en solitario o en grupo, convirtiéndolo en una experiencia versátil y accesible para todos.",
      image: Bicicleta,
      images: [Bicicleta, Bicicleta, Bicicleta, Bicicleta],
      duration: "2 horas",
      price: "Desde 15.000 CLP/Persona",
    },
  ],
};
