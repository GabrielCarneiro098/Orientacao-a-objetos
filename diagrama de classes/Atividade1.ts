class Pedido {
  itens: Item[];
  valorTotal: number;

  constructor() {
    this.itens = [];
    this.valorTotal = 0;
  }

  adicionarItem(item: Item): void {
    this.itens.push(item);
    this.calculaValorTotal();
  }

  calculaValorTotal(): void {
    this.valorTotal = this.itens.reduce((total, item) => total + item.valor, 0);
  }
}

class Item {
  valor: number;
  nome: string;
  descricao: string;

  constructor(valor: number, nome: string, descricao: string) {
    this.valor = valor;
    this.nome = nome;
    this.descricao = descricao;
  }
}
