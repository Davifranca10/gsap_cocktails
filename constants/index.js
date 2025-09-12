const navLinks = [
  { id: 'cocktails', title: 'Produtos' },
  { id: 'about', title: 'Nossa História' }
];

const cocktailLists = [
 {
	name: "Coca-Cola Tradicional",
	country: "BRA",
	detail: "550 ml",
	price: "R$10",
 },
 {
	name: "Coca-Cola Sem Açúcar",
	country: "EUA",
	detail: "500 ml",
	price: "R$12",
 },
 {
	name: "Fanta Laranja",
	country: "URU",
	detail: "750 ml",
	price: "R$7",
 },
 {
	name: "Água Crystal",
	country: "BRA",
	detail: "600 ml",
	price: "R$5",
 },
];

const mocktailLists = [
 {
	name: "Coca-Cola Zero",
	country: "SWE",
	detail: "550 ml",
	price: "R$10",
 },
 {
	name: "Fanta Uva Zero",
	country: "JAP",
	detail: "550 ml",
	price: "R$11",
 },
 {
	name: "Sprite Sem Açúcar",
	country: "ARG",
	detail: "750 ml",
	price: "R$9",
 },
 {
	name: "Guaraná Jesus Zero",
	country: "BRA",
	detail: "600 ml",
	price: "R$8",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Sabor único e inconfundível",
 "Sempre gelada e refrescante",
 "Perfeita para qualquer momento",
 "Mais de 130 anos de tradição",
];

const goodLists = [
 "Ingredientes selecionados",
 "Receita secreta original",
 "Qualidade garantida mundialmente",
 "Refrescância que une pessoas",
];

const storeInfo = {
 heading: "Onde Nos Encontrar",
 address: "Avenida Brasil, 1234 - Rio de Janeiro, RJ",
 contact: {
	phone: "(21) 99999-1234",
	email: "contato@cocacola.com",
 },
};

const openingHours = [
 { day: "Seg–Qui", time: "09:00 – 22:00" },
 { day: "Sex", time: "09:00 – 23:30" },
 { day: "Sáb", time: "08:00 – 23:30" },
 { day: "Dom", time: "08:00 – 22:00" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Coca-Cola Tradicional",
	image: "/images/drink1.png",
	title: "O Sabor Original que Conquista",
	description:
	 "A clássica Coca-Cola que refresca gerações. Ideal para acompanhar refeições, encontros e momentos especiais. Sempre gelada, sempre inesquecível.",
 },
 {
	id: 2,
	name: "Coca-Cola Zero",
	image: "/images/drink2.png",
	title: "Zero Açúcar, Mesmo Sabor",
	description:
	 "Todo o sabor inconfundível da Coca-Cola, mas sem açúcar. Refrescante e perfeita para quem busca equilíbrio sem abrir mão do prazer.",
 },
 {
	id: 3,
	name: "Fanta Laranja",
	image: "/images/drink3.png",
	title: "Diversão e Refrescância em Cada Gole",
	description:
	 "Com seu sabor frutado e vibrante, a Fanta é a escolha ideal para quem quer refrescância e diversão a qualquer hora do dia.",
 },
 {
	id: 4,
	name: "Sprite Limão",
	image: "/images/drink4.png",
	title: "Refrescância que Surpreende",
	description:
	 "Sprite é sinônimo de frescor e leveza. Feita para matar sua sede com aquele sabor cítrico inconfundível que combina com tudo.",
 },
];

export {
 navLinks,
 cocktailLists,
 mocktailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails
};
