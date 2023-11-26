// Atividade 1

class Contador {
  contagem: number;

  constructor(contagem: number) {
    this.contagem = contagem;
  }

  zerar() {
    this.contagem = 0;
  }

  incrementar(valor: number) {
    this.contagem += valor;
  }

  retornar_contagem() {
    return this.contagem;
  }
}

const minha_contagem = new Contador(2);

console.log(minha_contagem.retornar_contagem());
minha_contagem.incrementar(5);
console.log(minha_contagem.retornar_contagem());
minha_contagem.zerar();
console.log(minha_contagem.retornar_contagem());

// Atividade 2

class Bola {
  cor: string;
  circunferencia: number;
  material: string;

  constructor(cor: string, circuferencia: number, material: string) {
    this.cor = cor;
    this.circunferencia = circuferencia;
    this.material = material;
  }

  trocar_cor(cor: string) {
    this.cor = cor;
  }

  mostrar_cor() {
    return this.cor;
  }
}

const bola_um = new Bola("vermelha", 10, "borracha");
const bola_dois = new Bola("Amarela", 5, "Não borracha");

console.log(bola_um.mostrar_cor());
console.log(bola_dois.mostrar_cor());
bola_um.trocar_cor("azul");
bola_dois.trocar_cor("verde");
console.log(bola_um.mostrar_cor());
console.log(bola_dois.mostrar_cor());

// Atividade 3

class Conta {
  id: number;
  nome: string;
  saldo: number;

  constructor(id: number, nome: string, saldo?: number) {
    this.id = id;
    this.nome = nome;
    this.saldo = saldo ?? 0;
  }

  alterar_nome(nome: string) {
    this.nome = nome;
  }

  deposito(valor: number) {
    this.saldo += valor;
    console.log(
      `Realizado deposito de: R$${valor.toFixed(
        2
      )}\n Saldo da conta: R$${this.saldo.toFixed(2)}`
    );
  }

  saque(valor: number) {
    if (this.saldo - valor < 0) {
      console.log(
        `Saldo insuficiente para seguir com essa transação. Saldo disponivel: R$${this.saldo.toFixed(
          2
        )}`
      );
    } else {
      this.saldo -= valor;
      console.log(
        `Saque: R$${valor.toFixed(2)}\n Saldo restate: R$${this.saldo.toFixed(
          2
        )}`
      );
    }
  }

  mostrar_saldo() {
    console.log(`Saldo disponivel: R$${this.saldo.toFixed(2)}`);
  }

  exibir_conta() {
    return this;
  }
}

const conta_um = new Conta(0, "Gabriel", 10);

conta_um.saque(22);
console.log(conta_um.exibir_conta());
conta_um.mostrar_saldo();
conta_um.deposito(352);
conta_um.saque(300);
conta_um.alterar_nome("Fulano");
console.log(conta_um.exibir_conta());

// Atividade 4

class Calculadora {
  contador: number;
  historico: Array<object>;

  constructor() {
    this.contador = 0;
    this.historico = [];
  }

  somar(valor: number) {
    const calculo = {
      contador: this.contador,
      operacao: "soma",
      valor: valor,
      resultado: this.contador + valor,
    };
    this.historico.push(calculo);
    this.contador += valor;
  }

  diminuir(valor: number) {
    const calculo = {
      contador: this.contador,
      operacao: "subtração",
      valor: valor,
      resultado: this.contador - valor,
    };
    this.historico.push(calculo);
    this.contador -= valor;
  }

  multiplicar(valor: number) {
    const calculo = {
      contador: this.contador,
      operacao: "multiplicação",
      valor: valor,
      resultado: this.contador * valor,
    };
    this.historico.push(calculo);
    this.contador *= valor;
  }

  divisao(valor: number) {
    const calculo = {
      contador: this.contador,
      operacao: "divisão",
      valor: valor,
      resultado: this.contador / valor,
    };
    this.historico.push(calculo);
    this.contador /= valor;
  }

  visualizar_historico() {
    console.log(this.historico);
  }
}

const minha_calculadora = new Calculadora();

minha_calculadora.somar(2);
minha_calculadora.diminuir(1);
minha_calculadora.divisao(2);
minha_calculadora.multiplicar(2);
minha_calculadora.visualizar_historico();

// Atividade 5

class Bomba_combustivel {
  tipo_combustivel: string;
  valor_litro: number;
  quantidade_combustivel: number;

  constructor(tipo: string, valor: number, quantidade: number) {
    this.tipo_combustivel = tipo;
    this.valor_litro = valor;
    this.quantidade_combustivel = quantidade;
  }

  alterar_quantidade_restante_combustivel(quantidade: number) {
    this.quantidade_combustivel -= quantidade;
    console.log(
      `Combustivel restante na bomba: ${this.quantidade_combustivel.toFixed(
        3
      )} litros`
    );
  }

  abastecer_por_valor(valor: number) {
    const total_combustivel = valor / this.valor_litro;

    if (total_combustivel > this.quantidade_combustivel) {
      console.log(
        `Não é possivel seguir com esse abastecimento. Combustivel restante na bomba: ${this.quantidade_combustivel.toFixed(
          3
        )}`
      );
    } else {
      console.log(
        `Cliente abasteceu ${valor} reais, dando total de ${total_combustivel.toFixed(
          3
        )} litros de ${this.tipo_combustivel}.`
      );

      this.alterar_quantidade_restante_combustivel(total_combustivel);
    }
  }

  abastecer_por_litro(quantidade_litro: number) {
    const valor_total = quantidade_litro * this.valor_litro;

    if (quantidade_litro > this.quantidade_combustivel) {
      console.log(
        `Não é possivel seguir com esse abastecimento. Combustivel restante na bomba: ${this.quantidade_combustivel.toFixed(
          3
        )}`
      );
    } else {
      console.log(
        `Cliente abasteceu ${quantidade_litro.toFixed(3)} litros de ${
          this.tipo_combustivel
        }, dando total de R$${valor_total.toFixed(2)} reais.`
      );

      this.alterar_quantidade_restante_combustivel(quantidade_litro);
    }
  }

  alterar_valor(novo_valor: number) {
    this.valor_litro = novo_valor;

    console.log(
      `Atualizando valor do combustivel: R$${this.valor_litro.toFixed(2)} reais`
    );
  }

  alterar_combustivel(tipo_combustivel: string) {
    this.tipo_combustivel = tipo_combustivel;
  }

  exibir_dados_da_bomba() {
    console.log(
      `Dados da bomba: \n Tipo do combustivel: ${
        this.tipo_combustivel
      }\n Quantidade: ${this.quantidade_combustivel.toFixed(
        3
      )} litros\n Valor: R$${this.quantidade_combustivel.toFixed(2)}`
    );
  }
}

const bomba_combustivel = new Bomba_combustivel("Gasolina", 5.63, 100);

bomba_combustivel.abastecer_por_valor(200);
bomba_combustivel.abastecer_por_litro(5);
bomba_combustivel.exibir_dados_da_bomba();
bomba_combustivel.alterar_valor(100);
bomba_combustivel.exibir_dados_da_bomba();
bomba_combustivel.alterar_combustivel("Etanol");
bomba_combustivel.exibir_dados_da_bomba();

// Atividade 6

class Carro {
  consumo: number;
  combustivel_no_tanque: number;

  constructor(consumo: number) {
    this.consumo = consumo;
    this.combustivel_no_tanque = 0;
  }

  andar(distancia: number) {
    const total_consumo = this.consumo * distancia;

    if (total_consumo > this.combustivel_no_tanque) {
      console.log(
        `Não é possível seguir com o trajeto, tanque de combustivel está vazio.`
      );
    } else {
      this.combustivel_no_tanque -= total_consumo;
      console.log(
        `Distancia percorrida: ${distancia.toFixed(
          2
        )} KM.\n Comsumo durante o trajeto: ${total_consumo.toFixed(2)} L. `
      );
    }
  }

  obter_gasolina() {
    return `Combustivel disponivel no tanque: ${this.combustivel_no_tanque.toFixed(
      2
    )} L`;
  }

  adicionar_gasolina(litro: number) {
    this.combustivel_no_tanque += litro;
  }
}

const fiat_uno = new Carro(5);

fiat_uno.andar(1);
console.log(fiat_uno.obter_gasolina());
fiat_uno.adicionar_gasolina(50);
console.log(fiat_uno.obter_gasolina());
fiat_uno.andar(1);
console.log(fiat_uno.obter_gasolina());
