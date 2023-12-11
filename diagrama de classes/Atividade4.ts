type Comida = {
  nome: string;
  valor: number;
};

type Estoque = {
  materia_prima: string;
  quantidade: number;
};

class Foodtruck {
  cardapio: Array<Comida>;
  estoque: Estoque;

  constructor(cardapio: Array<Comida>, estoque: Estoque) {
    this.cardapio = cardapio;
    this.estoque = estoque;
  }

  vender(quantidade: number) {
    if (quantidade > this.estoque.quantidade) {
      return `Não temos estoque suficiente pra isso. Material restante: ${this.estoque.quantidade}`;
    } else {
      this.estoque.quantidade -= quantidade;
      return `Aqui está seu pedido, muito obrigado volte sempre!`;
    }
  }

  verificar_estoque() {
    return this.estoque;
  }

  mostrar_cardapio() {
    return this.cardapio;
  }
}

const cardapio_hambugueria: Array<Comida> = [
  {
    nome: "x-bacon",
    valor: 7.0,
  },
  {
    nome: "x-tudo",
    valor: 9.0,
  },
  {
    nome: "Turbinado",
    valor: 15.0,
  },
];

const cardapio_pizzaria: Array<Comida> = [
  {
    nome: "Calabresa",
    valor: 10.0,
  },
  {
    nome: "Portuguesa",
    valor: 14.0,
  },
  {
    nome: "Quatro queijos",
    valor: 15.0,
  },
];

const estoque_hamburgueria: Estoque = {
  materia_prima: "carne de hamburguer",
  quantidade: 10,
};

const estoque_pizzaria: Estoque = {
  materia_prima: "Queijo",
  quantidade: 20,
};

const hamburgueria = new Foodtruck(cardapio_hambugueria, estoque_hamburgueria);
const pizzaria = new Foodtruck(cardapio_pizzaria, estoque_pizzaria);

console.log(hamburgueria.vender(3));
console.log(hamburgueria.vender(30));
console.log(hamburgueria.verificar_estoque());
console.log(hamburgueria.mostrar_cardapio());

console.log(pizzaria.vender(3));
console.log(pizzaria.vender(30));
console.log(pizzaria.verificar_estoque());
console.log(pizzaria.mostrar_cardapio());
