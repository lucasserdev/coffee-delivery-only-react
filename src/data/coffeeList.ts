import { CoffeType } from "@/types/CoffeType";

export const coffeList:CoffeType[] = [
    {
        id: 1,
        name: 'Expresso Tradicional',
        category: ['Tradicional'],
        description: 'O tradicional café feito com água quente e grãos moídos',
        image: '/coffees/Type=Expresso.svg',
        price: 9.90,
        quantity: 1
    },
    {
        id: 2,
        name: 'Expresso Americano',
        category: ['Tradicional'],
        description: 'Expresso diluído, menos intenso que o tradicional',
        image: '/coffees/Type=Americano.svg',
        price: 8.50,
        quantity: 1
    },
    {
        id: 3,
        name: 'Expresso Cremoso',
        category: ['Tradicional'],
        description: 'Café expresso tradicional com espuma cremosa',
        image: '/coffees/Type=Expresso Cremoso.svg',
        price: 10.90,
        quantity: 1
    },
    {
        id: 4,
        name: 'Expresso Gelado',
        category: ['Tradicional', 'Gelado'],
        description: 'Bebida preparada com café expresso e cubos de gelo',
        image: '/coffees/Type=Café Gelado.svg',
        price: 11.90,
        quantity: 1
    },
    {
        id: 5,
        name: 'Café com Leite',
        category: ['Tradicional', 'Com Leite'],
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        image: '/coffees/Type=Café com Leite.svg',
        price: 12.50,
        quantity: 1
    },
    {
        id: 6,
        name: 'Latte',
        category: ['Tradicional', 'Com Leite'],
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        image: '/coffees/Type=Latte.svg',
        price: 13.90,
        quantity: 1
    },
    {
        id: 7,
        name: 'Capuccino',
        category: ['Tradicional', 'Com Leite'],
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        image: '/coffees/Type=Capuccino.svg',
        price: 14.50,
        quantity: 1
    },
    {
        id: 8,
        name: 'Macchiato',
        category: ['Tradicional', 'Com Leite'],
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        image: '/coffees/Type=Macchiato.svg',
        price: 11.50,
        quantity: 1
    },
    {
        id: 9,
        name: 'Mocaccino',
        category: ['Tradicional', 'Com Leite'],
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        image: '/coffees/Type=Mochaccino.svg',
        price: 15.90,
        quantity: 1
    },
    {
        id: 10,
        name: 'Chocolate Quente',
        category: ['Especial', 'Com Leite'],
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        image: '/coffees/Type=Chocolate Quente.svg',
        price: 16.50,
        quantity: 1
    },
    {
        id: 11,
        name: 'Cubano',
        category: ['Especial', 'Alcoólico', 'Gelado'],
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        image: '/coffees/Type=Cubano.svg',
        price: 19.90,
        quantity: 1
    },
    {
        id: 12,
        name: 'Havaiano',
        category: ['Especial'],
        description: 'Bebida adocicada preparada com café e leite de coco',
        image: '/coffees/Type=Havaiano.svg',
        price: 17.90,
        quantity: 1
    },
    {
        id: 13,
        name: 'Árabe',
        category: ['Especial'],
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        image: '/coffees/Type=Árabe.svg',
        price: 18.50,
        quantity: 1
    },
    {
        id: 14,
        name: 'Irlandês',
        category: ['Especial', 'Alcoólico'],
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        image: '/coffees/Type=Irlandês.svg',
        price: 21.90,
        quantity: 1
    },
];
