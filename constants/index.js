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
		url: "https://www.instagram.com/cocacola_br/",
	},
	{
		name: "Facebook",
		icon: "/images/fb.png",
		url: "https://www.facebook.com/cocacolafemsabrasiloficial/?locale=pt_BR",
	},
];

const allCocktails = [
	{
		id: 1,
		name: "Coca-Cola",
		image: "/images/drink1.png", 
		title: "O Clássico em Todas as Versões",
		description:
			"A Coca-Cola que todo mundo ama, agora também nas versões Tradicional e Zero Açúcar. O sabor inconfundível que combina com qualquer ocasião.",
	},
	{
		id: 2,
		name: "Fanta",
		image: "/images/drink2.png", 
		title: "Diversão e Variedade em Cada Gole",
		description:
			"Com 5 sabores diferentes, Fanta é a explosão de cores e gostos que transforma qualquer momento em diversão. Uma verdadeira festa de sabores!",
	},
	{
		id: 3,
		name: "Sprite",
		image: "/images/drink3.png", 
		title: "A Refrescância em Dobro",
		description:
			"Sprite Tradicional e Sprite Zero, ambas trazendo o sabor cítrico leve e marcante que refresca de verdade. A escolha perfeita para matar a sede.",
	},
	{
		id: 4,
		name: "Schweppes",
		image: "/images/drink4.png", 
		title: "Sofisticação e Sabor Equilibrado",
		description:
			"Schweppes em suas versões Clássica, Tônica Sem Açúcar e Citrus Leve em Açúcares. Uma linha sofisticada que une refrescância e intensidade única.",
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
