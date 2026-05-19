export const BRANDS = [
  { id: "new-balance", name: "New Balance", count: 24 },
  { id: "asics",       name: "ASICS",       count: 18 },
  { id: "salomon",     name: "Salomon",     count: 12 },
  { id: "on",          name: "On",          count: 9  },
  { id: "veja",        name: "Veja",        count: 7  },
  { id: "diadora",     name: "Diadora",     count: 11 },
  { id: "autry",       name: "Autry",       count: 6  },
  { id: "hoka",        name: "Hoka",        count: 5  },
];

export type ShoePalette = "cream" | "black" | "white" | "navy" | "red" | "olive" | "grey" | "tan";

export const SHOE_COLORS: Record<ShoePalette, { upper: string; accent: string; sole: string; lace: string }> = {
  cream: { upper: "#E8E2D5", accent: "#0F0F0F", sole: "#FAFAF7", lace: "#B8B0A0" },
  black: { upper: "#1A1A1A", accent: "#E63946", sole: "#0F0F0F", lace: "#3A3A3A" },
  white: { upper: "#F2EFE9", accent: "#1B5E20", sole: "#FAFAF7", lace: "#D4D4D4" },
  navy:  { upper: "#1F2A44", accent: "#E8E2D5", sole: "#FAFAF7", lace: "#3A4666" },
  red:   { upper: "#9C2A2A", accent: "#1A1A1A", sole: "#F2EFE9", lace: "#7A1F1F" },
  olive: { upper: "#5C6440", accent: "#E8E2D5", sole: "#3A3F2A", lace: "#7A8456" },
  grey:  { upper: "#A5A29A", accent: "#0F0F0F", sole: "#F2EFE9", lace: "#7C7A72" },
  tan:   { upper: "#C19A6B", accent: "#3A2E20", sole: "#F2EFE9", lace: "#A07F5A" },
};

export type ProductDetail = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  brand: string;
  model: string;
  price: number;
  oldPrice: number | null;
  color: ShoePalette;
  colorways: ShoePalette[];
  tags: string[];
  cat: string;
  sizes: number[];
  stockSizes: number[];
  story?: string;
  details?: ProductDetail[];
};

export const PRODUCTS: Product[] = [
  { id: "nb-2002r-protection",  brand: "New Balance", model: "2002R Protection Pack",     price: 749,  oldPrice: null, color: "grey",  colorways: ["grey","cream","black"], tags: ["bestseller"],          cat: "hombre", sizes: [40,41,42,43,44,45], stockSizes: [41,42,43,44,45] },
  { id: "asics-gel-1130-cream", brand: "ASICS",       model: "Gel-1130 Cream Black",       price: 519,  oldPrice: 599, color: "cream", colorways: ["cream","white","navy"], tags: ["bestseller","sale"],    cat: "unisex", sizes: [38,39,40,41,42,43,44], stockSizes: [38,40,41,42,43] },
  { id: "salomon-xt-6-phantom", brand: "Salomon",     model: "XT-6 Phantom Black",         price: 899,  oldPrice: null, color: "black", colorways: ["black","olive"],       tags: ["new","limited"],       cat: "hombre", sizes: [39,40,41,42,43,44,45], stockSizes: [40,41,42,43,44] },
  { id: "on-cloudmonster-white",brand: "On",          model: "Cloudmonster Undyed",        price: 689,  oldPrice: null, color: "white", colorways: ["white","black","navy"], tags: ["new"],                 cat: "mujer",  sizes: [36,37,38,39,40,41], stockSizes: [36,37,38,39,40] },
  { id: "veja-v10-white-green", brand: "Veja",        model: "V-10 Extra White Emeraude",  price: 489,  oldPrice: null, color: "white", colorways: ["white","cream"],       tags: ["bestseller"],          cat: "unisex", sizes: [36,37,38,39,40,41,42,43], stockSizes: [37,38,39,40,41] },
  { id: "diadora-n9000-italia", brand: "Diadora",     model: "N9000 Italia Made-in-Italy", price: 1199, oldPrice: null, color: "navy",  colorways: ["navy","red"],          tags: ["limited","italy"],     cat: "hombre", sizes: [40,41,42,43,44,45], stockSizes: [42,43,44] },
  { id: "autry-medalist-low",   brand: "Autry",       model: "Medalist Low White Red",     price: 549,  oldPrice: null, color: "red",   colorways: ["red","white","cream"], tags: ["new","italy"],         cat: "unisex", sizes: [38,39,40,41,42,43,44], stockSizes: [39,40,41,42,43,44] },
  { id: "hoka-clifton-9-bone",  brand: "Hoka",        model: "Clifton 9 Bone White",       price: 659,  oldPrice: null, color: "cream", colorways: ["cream","black","navy"], tags: ["bestseller"],         cat: "unisex", sizes: [38,39,40,41,42,43,44,45], stockSizes: [39,40,41,42,43,44] },
  { id: "nb-1906r-protein",     brand: "New Balance", model: "1906R Protein Pack",         price: 829,  oldPrice: null, color: "tan",   colorways: ["tan","grey","navy"],    tags: ["new","limited"],      cat: "hombre", sizes: [40,41,42,43,44,45], stockSizes: [41,42,43,44] },
  { id: "asics-gel-kayano-14",  brand: "ASICS",       model: "Gel-Kayano 14 Cream",        price: 569,  oldPrice: null, color: "cream", colorways: ["cream","white","grey"], tags: ["bestseller"],         cat: "mujer",  sizes: [36,37,38,39,40,41], stockSizes: [36,37,38,39,40] },
  { id: "salomon-acs-pro-olive",brand: "Salomon",     model: "ACS Pro Advanced Olive",     price: 949,  oldPrice: null, color: "olive", colorways: ["olive","black"],       tags: ["limited"],             cat: "hombre", sizes: [40,41,42,43,44,45], stockSizes: [42,43,44,45] },
  { id: "on-cloud-x-3-black",   brand: "On",          model: "Cloud X 3 All Black",        price: 619,  oldPrice: 689, color: "black", colorways: ["black","white"],       tags: ["sale"],                cat: "unisex", sizes: [38,39,40,41,42,43,44], stockSizes: [39,40,41,42,43] },
];
