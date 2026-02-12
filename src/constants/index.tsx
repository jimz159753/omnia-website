import moon from "@/assets/moon.webp";
import butterfly from "@/assets/butterfly.webp";
import hand from "@/assets/hand.webp";
import frontdesk from "@/assets/frontdesk.webp";
import cosmetology from "@/assets/cosmetology.webp";
import massage from "@/assets/massage.webp";
import mirrors from "@/assets/mirrors.webp";
import plants from "@/assets/plants.webp";
import products from "@/assets/products.webp";
import yard from "@/assets/yard.webp";

export interface IService {
  id: string;
  label: string;
  description: string;
}

export const navigationItems = [
  { id: "conocenos", label: "Conocenos" },
  { id: "servicios", label: "Servicios" },
  { id: "espacios", label: "Espacios" },
  { id: "reservas", label: "Reservas" },
  { id: "contacto", label: "Contacto" },
];

export const tagSpaces = [
  {
    id: 1,
    name: "tranquilidad",
  },
  {
    id: 2,
    name: "cuidado",
  },
  {
    id: 3,
    name: "recuperacion",
  },
  {
    id: 4,
    name: "paz",
  },
  {
    id: 5,
    name: "tempo",
  },
  {
    id: 6,
    name: "calma",
  },
  {
    id: 7,
    name: "equilibrio",
  },
  {
    id: 8,
    name: "momento",
  },
];

export const values = [
  {
    id: 1,
    title: "Misión",
    image: moon,
    description:
      "Promover el desarrollo integral de las personas mediante experiencias que unan mente, cuerpo y espíritu, construyendo una comunidad consciente y solidaria.",
  },
  {
    id: 2,
    title: "Visión",
    image: butterfly,
    description:
      "Ser un referente en el desarrollo integral de las personas, ofreciendo experiencias que unan mente, cuerpo y espíritu en una comunidad consciente y solidaria.",
  },
  {
    id: 3,
    title: "Valores",
    image: hand,
    description:
      "Una casa holística se guía por valores de equilibrio, sostenibilidad y bienestar, creando un espacio que nutre la mente, el cuerpo y el espíritu.",
  },
];

export const services: IService[] = [
  {
    id: "masajes",
    label: "Masajes",
    description:
      "Liberación, descanso y presencia a través del tacto consciente. Nuestros masajes son una pausa para el cuerpo y una caricia para el alma.",
  },
  {
    id: "tarot",
    label: "Tarot",
    description:
      "Más que una lectura de cartas, es un espacio de conexión contigo mismo, donde podrás encontrar claridad, orientación y nuevas perspectivas para tu vida.",
  },
  {
    id: "cosmetologia",
    label: "Cosmetología",
    description:
      "Cada tratamiento está diseñado para realzar tu belleza natural mientras disfrutas de un momento de relajación y conexión contigo mismo. Utilizamos productos de calidad y, en algunos casos, naturales, buscando siempre un equilibrio entre salud, estética y bienestar integral.",
  },
  {
    id: "reiki",
    label: "Reiki",
    description:
      "A través de la imposición de manos, se canaliza energía vital para desbloquear, armonizar y revitalizar tu campo energético.",
  },
  {
    id: "meditacion",
    label: "Meditación",
    description:
      "Durante cada práctica aprenderás a observar tus pensamientos sin juicio, soltar tensiones y abrir espacio a la serenidad y la claridad. Nuestras sesiones son aptas tanto para principiantes como para personas con experiencia.",
  },
  {
    id: "terapias",
    label: "Terapias",
    description:
      "Ofrecemos diferentes terapias alternativas que buscan armonizar tu energía, liberar bloqueos y acompañarte en tu camino de transformación personal.",
  },
];

export const aboutImages = [
  {
    id: 1,
    image: frontdesk,
  },
  {
    id: 2,
    image: cosmetology,
  },

  {
    id: 3,
    image: massage,
  },
  {
    id: 4,
    image: mirrors,
  },
  {
    id: 5,
    image: plants,
  },
  {
    id: 6,
    image: products,
  },
  {
    id: 7,
    image: yard,
  },
];
