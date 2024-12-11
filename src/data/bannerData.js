import CasaNeruda from "../assets/CasaNeruda.jpg";
import Reiki from "../assets/Reiki.webp";
import KitClasico from "../assets/KitClasico.jpg";
import KitPlayero from "../assets/KitPlayero.avif";
import Surf from "../assets/Surf.jpg";
import Bicicleta from "../assets/Bicicleta.png";
import Restaurant from "../assets/Restaurant.jpg";
import Picnic from "../assets/Picnic.jpg";
import KitPisco from "../assets/KitPisco.jpg";

export const tabs = [
  { id: "kits", label: "Kit Bienvenida" },
  { id: "experiences", label: "Experiencias" },
  { id: "food", label: "Gastronimía" },
  { id: "sports", label: "Deporte" },
];

export const cards = {
  kits: [
    {
      title: "Kit Clásico",
      description: "Botella de vino y chocolate.",
      image: KitClasico,
    },
    {
      title: "Kit Playero",
      description: "Aperol y snack sorpresa.",
      image: KitPlayero,
    },
    {
      title: "Kit de Relajación",
      description: "Pisco sour, galletas, y una vela aromática",
      image: KitPisco,
    },
  ],
  experiences: [
    {
      title: "Tour a la casa de Pablo Neruda",
      description: "Visita guiada a sitios históricos.",
      image: CasaNeruda,
      duration: "Duración: 2 horas",
      price: "Precio: 20.000 CLP",
    },
    {
      title: "Sesión de Reiki",
      description: "Bienestar y energía personal.",
      image: Reiki,
      duration: "Duración: 1 hora",
      price: "Precio: 10.000 CLP",
    },
  ],
  food: [
    {
      title: "Cena en el Restaurante",
      description: "Menú de 3 tiempos.",
      image: Restaurant,
    },
    {
      title: "Picnic en la playa",
      description: "Cesta con vino y quesos.",
      image: Picnic,
    },
  ],
  sports: [
    {
      title: "Clase de Surf",
      description: "Instructor y tabla incluidos.",
      image: Surf,
      duration: "Duración: 2 horas",
      price: "Precio: 20.000 CLP",
    },
    {
      title: "Tour en bicicleta",
      description: "Recorrido por la ciudad.",
      image: Bicicleta,
      duration: "Duración: 2 horas",
      price: "Precio: 15.000 CLP",
    },
  ],
};
