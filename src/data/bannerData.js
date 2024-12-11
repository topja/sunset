import CasaNeruda from "../assets/CasaNeruda.jpg";
import Reiki from "../assets/Reiki.webp";
import KitClasico from "../assets/KitClasico.jpg";
import KitPlayero from "../assets/KitPlayero.avif";

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
  ],
  experiences: [
    {
      title: "Tour a la casa de Pablo Neruda",
      description: "Visita guiada a sitios históricos.",
      image: CasaNeruda,
    },
    {
      title: "Sesión de Reiki",
      description: "Bienestar y energía personal.",
      image: Reiki,
    },
  ],
  food: [
    {
      title: "Cena en el Restaurante",
      description: "Menú de 3 tiempos.",
      image: KitClasico,
    },
    {
      title: "Picnic en la playa",
      description: "Cesta con vino y quesos.",
      image: KitPlayero,
    },
  ],
  sports: [
    {
      title: "Clase de Surf",
      description: "Instructor y tabla incluidos.",
      image: CasaNeruda,
    },
    {
      title: "Tour en bicicleta",
      description: "Recorrido por la ciudad.",
      image: Reiki,
    },
  ],
};
