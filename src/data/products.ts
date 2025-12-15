import buscopan from "@/assets/products/buscopan.png";
import nutritionVanilla from "@/assets/products/nutrition-vanilla.png";
import wheyProtein from "@/assets/products/whey-protein.png";
import proteinOrange from "@/assets/products/protein-orange.png";
import preworkout from "@/assets/products/preworkout.png";
import pillJar from "@/assets/products/pill-jar.png";
import softgel from "@/assets/products/softgel.png";
import proteinBlue from "@/assets/products/protein-blue.png";
import proteinBlack from "@/assets/products/protein-black.png";
import fishOil from "@/assets/products/fish-oil.png";
import aguaOxigenada3 from "@/assets/products/Agua-Oxigenada-3.png";
import aguaOxigenada3500ml from "@/assets/products/Agua-Oxigenada_3_500ml.png";
import vitaminB6 from "@/assets/products/vitamin-b6.png";
import codOil from "@/assets/products/cod-oil.png";
import sorofisiologico from "@/assets/products/soro-fisiologico.png";
import alcooletilico from "@/assets/products/alcool-etilico.png";
import alcoolcanforado from "@/assets/products/alcool-canforado.png";
import solutodakin from "@/assets/products/soluto-dakin.png";
import alcoolgel from "@/assets/products/alcool-gel.png";
import clorexidinaSolucao from "@/assets/products/clorexidina-solucao.png";
import clorexidinaDegermante from "@/assets/products/clorexidina-degermante.png";
import desifectanteFrutas from "@/assets/products/desifectante-frutas.png";
import hipocloretoSodio from "@/assets/products/hipocloreto-sodio.png";
import iodopovidonaSolucao from "@/assets/products/iodopovidona-solucao.png";
import iodopovidonaEspuma from "@/assets/products/iodopovidona-espuma.png";
import iodopovidonaEspumaVaginal from "@/assets/products/iodopovidona-espuma-vaginal.png";
import iodopovidonaSolucaoVaginal from "@/assets/products/iodopovidona-solucao-vaginal.png";
import iodopovidonaSolucaoGargarejar from "@/assets/products/iodopovidona-solucao-gargarejar.png";
import oleoAmendoas from "@/assets/products/oleo-amendoas.png";
import oleoRicinio from "@/assets/products/oleo-ricinio.png";
import acetonaSuavizada from "@/assets/products/acetona-suavizada.png";
import acetonaPura from "@/assets/products/acetona-pura.png";
import aguaDestilada from "@/assets/products/agua-destilada.png";

export interface Product {
  id: string;
  image: string;
  category: string;
  categoryColor: string;
  name: string;
  price: string;
  rating: number;
  description?: string;
  details?: {
    brand?: string;
    weight?: string;
    volume?: string;
    dosage?: string;
    ingredients?: string[];
    benefits?: string[];
  };
}

export const products: Product[] = [
  {
    id: "1",
    image: aguaOxigenada3,
    category: "Galênicos",
    categoryColor: "galenicos",
    name: "Água Oxigenada 3%",
    price: "$ 8,95",
    rating: 4,
    description: "Água Oxigenada 3% é um produto que contém oxigênio ativo, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Água Oxigenada 3%",
      weight: "250ml",
      dosage: "1 copo de 250ml",
      ingredients: ["Água Oxigenada 3%"],
      benefits: [
        "Desinfecta e limpa feridas e lesões cutâneas",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "2",
    image: sorofisiologico,
    category: "Galênicos",
    categoryColor: "category-protein",
    name: "Soro Fisiológico 0,9%",
    price: "$ 24,90",
    rating: 5,
    description: "Soro Fisiológico 0,9% é um produto que contém solução fisiológica, que é usado para reequilibrar o corpo e restaurar a saúde.",
    details: {
      brand: "Soro Fisiológico 0,9%",
      volume: "500ml",
      dosage: "1 copo de 500ml",
      ingredients: ["Soro Fisiológico 0,9%"],
      benefits: [
        "Reequilibra o corpo e restaura a saúde",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "3",
    image: alcooletilico,
    category: "Galênicos",
    categoryColor: "category-protein",
    name: "Álcool Etílico 96%",
    price: "$ 45,00",
    rating: 4,
    description: "Álcool Etílico 96% é um produto que contém álcool etílico, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "100ml",
      dosage: "1 copo de 100ml",
      ingredients: ["Álcool Etílico 96%"],
      benefits: [
        "Desinfecta e limpa feridas e lesões cutâneas",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "4",
    image: alcoolcanforado,
    category: "Galênicos",
    categoryColor: "category-sports",
    name: "Álcool Canforado 96%",
    price: "$ 32,50",
    rating: 4,
    description: "Álcool Canforado 96% é um produto que contém álcool canforado, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "100ml",
      dosage: "1 copo de 100ml",
      ingredients: ["Álcool Canforado 96%"],
      benefits: [
        "Desinfecta e limpa feridas e lesões cutâneas",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "5",
    image: solutodakin,
    category: "Galênicos",
    categoryColor: "category-sports",
    name: "Soluto Dakin",
    price: "$ 38,90",
    rating: 5,
    description: "Soluto Dakin é um produto que contém solução de dakin, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "300ml",
      dosage: "1 copo de 300ml",
      ingredients: ["Soluto Dakin"],
      benefits: [
        "Desinfecta e limpa feridas e lesões cutâneas",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "6",
    image: alcoolgel,
    category: "Galênicos",
    categoryColor: "category-vitamins",
    name: "Álcool Gel 70%",
    price: "$ 12,50",
    rating: 4,
    description: "Álcool Gel 70% é um produto que contém álcool gel, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "10mg",
      dosage: "1 copo de 100ml",
      ingredients: ["Álcool Gel 70%"],
      benefits: [
        "Desinfecta e limpa feridas e lesões cutâneas",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "7",
    image: clorexidinaSolucao,
    category: "Galênicos",
    categoryColor: "category-protein",
    name: "Clorexidina Solução 0,02%",
    price: "$ 55,00",
    rating: 5,
    description: "Clorexidina Solução 0,02% é um produto que contém clorexidina, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "300ml",
      dosage: "1 copo de 300ml",
      ingredients: ["Clorexidina Solução 0,02%"],
      benefits: [
        "Desinfecta e limpa feridas e lesões cutâneas",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "8",
    image: clorexidinaDegermante,
    category: "Galênicos",
    categoryColor: "category-supplements",
    name: "Clorexidina Degermante 0,02%",
    price: "$ 42,00",
    rating: 4,
    description: "Clorexidina Degermante 0,02% é um produto que contém clorexidina, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "100ml",
      dosage: "1 copo de 100ml",
      ingredients: ["Clorexidina Degermante 0,02%"],
      benefits: [
        "Desinfecta e limpa feridas e lesões cutâneas",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "9",
    image: desifectanteFrutas,
    category: "Galênicos",
    categoryColor: "category-sports",
    name: "Desifectante de Frutas",
    price: "$ 48,90",
    rating: 5,
    description: "Desifectante de Frutas é um produto que contém desifectante de frutas, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "100ml",
      dosage: "1 copo de 100ml",
      ingredients: ["Desifectante de Frutas"],
      benefits: [
        "Desinfecta e limpa feridas e lesões cutâneas",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "10",
    image: hipocloretoSodio,
    category: "Galênicos",
    categoryColor: "category-sports",
    name: "Hipoclorito de Sódio",
    price: "$ 52,00",
    rating: 5,
    description: "Hipoclorito de Sódio é um produto que contém hipoclorito de sódio, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "100ml",
      dosage: "1 copo de 100ml",
      ingredients: ["Hipoclorito de Sódio"],
      benefits: [
        "Desinfecta e limpa feridas e lesões cutâneas",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "11",
    image: iodopovidonaSolucao,
    category: "Iodopovidona",
    categoryColor: "category-home",
    name: "Iodopovidona Solução 0,02%",
    price: "$ 18,50",
    rating: 4,
    description: "Iodopovidona Solução 0,02% é um produto que contém iodopovidona, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "500g",
      dosage: "1 copo de 500ml",
      ingredients: ["Iodopovidona Solução 0,02%"],
      benefits: [
        "Desinfecta e limpa feridas e lesões cutâneas",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "12",
    image: iodopovidonaEspuma,
    category: "Iodopovidona",
    categoryColor: "category-pets",
    name: "Iodopovidona Espuma 0,02%",
    price: "$ 22,90",
    rating: 4,
    description: "Iodopovidona Espuma 0,02% é um produto que contém iodopovidona, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "100ml",
      dosage: "1 copo de 100ml",
      ingredients: ["Iodopovidona Espuma 0,02%"],
      benefits: [
        "Desinfecta e limpa feridas e lesões cutâneas",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "13",
    image: iodopovidonaEspumaVaginal,
    category: "Iodopovidona",
    categoryColor: "category-pets",
    name: "Iodopovidona Espuma Vaginal 0,02%",
    price: "$ 22,90",
    rating: 4,
    description: "Iodopovidona Espuma Vaginal 0,02% é um produto que contém iodopovidona, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "100ml",
      dosage: "1 cápsula ao dia",
      ingredients: ["Iodopovidona Espuma Vaginal 0,02%"],
      benefits: [
        "Desinfecta e limpa feridas e lesões cutâneas",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "14",
    image: iodopovidonaSolucaoVaginal,
    category: "Iodopovidona",
    categoryColor: "category-pets",
    name: "Iodopovidona Solução Vaginal 0,02%",
    price: "$ 22,90",
    rating: 4,
    description: "Iodopovidona Solução Vaginal 0,02% é um produto que contém iodopovidona, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "100ml",
      dosage: "1 cápsula ao dia",
      ingredients: ["Iodopovidona Solução Vaginal 0,02%"],
      benefits: [
        "Desinfecta e limpa feridas e lesões cutâneas",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "15",
    image: iodopovidonaSolucaoGargarejar,
    category: "Iodopovidona",
    categoryColor: "category-pets",
    name: "Iodopovidona Solução Gargarejar 0,02%",
    price: "$ 22,90",
    rating: 4,
    description: "Iodopovidona Solução Gargarejar 0,02% é um produto que contém iodopovidona, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "100ml",
      dosage: "1 cápsula ao dia",
      ingredients: ["Iodopovidona Solução Gargarejar 0,02%"],
      benefits: [
        "Desinfecta e limpa feridas e lesões cutâneas",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "16",
    image: oleoAmendoas,
    category: "Adjuvantes",
    categoryColor: "category-pets",
    name: "Óleo de Amendoas Doces",
    price: "$ 22,90",
    rating: 4,
    description: "Óleo de Amendoas Doces é um produto que contém óleo de amendoas doces, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "125ml",
      dosage: "1 cápsula ao dia",
      ingredients: ["Óleo de Amendoas Doces"],
      benefits: [
        "Ajuda a melhorar a saúde da pele",
        "Ajuda a reduzir a inflamação"
      ]
    }
  },
  {
    id: "17",
    image: oleoRicinio,
    category: "Adjuvantes",
    categoryColor: "category-pets",
    name: "Óleo de Ricínio",
    price: "$ 22,90",
    rating: 4,
    description: "Óleo de Ricínio é um produto que contém óleo de ricínio, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "125ml",
      dosage: "1 cápsula ao dia",
      ingredients: ["Óleo de Ricínio"],
      benefits: [
        "Ajuda a melhorar a saúde da pele",
        "Ajuda a reduzir a inflamação",
        "Ajuda a melhorar a circulação sanguínea"
      ]
    }
  },
  {
    id: "18",
    image: acetonaSuavizada,
    category: "Adjuvantes",
    categoryColor: "category-pets",
    name: "Acetona Suavizada",
    price: "$ 22,90",
    rating: 4,
    description: "Acetona Suavizada é um produto que contém acetona suavizada, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "125ml",
      dosage: "1 cápsula ao dia",
      ingredients: ["Acetona Suavizada"],
      benefits: [
        "Ajuda a limpar e desinfectar superfícies",
        "Eficaz contra infecções bacterianas e virais"
      ]
    }
  },
  {
    id: "19",
    image: acetonaPura,
    category: "Adjuvantes",
    categoryColor: "category-pets",
    name: "Acetona Pura",
    price: "$ 22,90",
    rating: 4,
    description: "Acetona Pura é um produto que contém acetona pura, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "125ml",
      dosage: "1 cápsula ao dia",
      ingredients: ["Acetona Pura"],
      benefits: [
        "Ajuda a limpar e desinfectar superfícies",
        "Eficaz contra infecções bacterianas e virais",
        "Eficaz contra infecções virais"
      ]
    }
  },
  {
    id: "20",
    image: aguaDestilada,
    category: "Adjuvantes",
    categoryColor: "category-pets",
    name: "Água Destilada",
    price: "$ 22,90",
    rating: 4,
    description: "Água Destilada é um produto que contém água destilada, que é usado para desinfectar e limpar feridas e lesões cutâneas.",
    details: {
      brand: "Vida Pro",
      weight: "5L",
      dosage: "1 copo de 1000ml",
      ingredients: ["Água Destilada"],
      benefits: [
        "Usa para preparar soluções e desinfectar superfícies",
        "Eficaz para higienização de instrumentos médicos"
      ]
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};



