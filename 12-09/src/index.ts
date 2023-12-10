// interface Iconta {
//   depositar(deposito: number): void;
//   sacar(saque: number): void;
//   consultar_saldo(): void;
//   tipo_conta(): string;
// }

// class Conta implements Iconta {
//   protected saldo: number;
//   private tipo: string;

//   constructor(saldo: number, tipo: string) {
//     this.saldo = saldo;
//     this.tipo = tipo;
//   }

//   depositar(deposito: number) {
//     this.saldo += deposito;
//   }

//   sacar(saque: number) {
//     this.saldo -= saque;
//   }

//   consultar_saldo() {
//     console.log(this.saldo);
//   }

//   tipo_conta() {
//     return this.tipo;
//   }
// }

// class Conta_corrente extends Conta {
//   constructor() {
//     super(500, "corrente");
//   }

//   cobrar_taxa_manutencao(taxa: number) {
//     this.saldo -= taxa;
//   }
// }

// const nova_conta = new Conta_corrente();

// class Conta_poupança extends Conta {
//   constructor() {
//     super(500, "poupança");
//   }

//   aplicar_juros(juros: number) {
//     this.saldo *= 1 + juros / 100;
//   }
// }

// const conta_poupança = new Conta_poupança();
// console.log(nova_conta.tipo_conta());
// console.log(conta_poupança.tipo_conta());

//Atividade 1
// function calcular_media(n1: number, n2: number): object {
//   const calculo = {
//     nota1: n1,
//     nota2: n2,
//     media: (n1 + n2) / 2,
//     aprovado: false,
//   };

//   if (calculo.media >= 6) {
//     calculo.aprovado = true;
//   }

//   return calculo;
// }

// console.log(calcular_media(6, 5));

function calcular_nota_peso(objeto: object) {}

//Atividade 3
const carteira = {
  saldo: 0,
  lancar_entrada: function lancar_entrada(valor: number) {
    carteira.saldo += valor;
  },
  lancar_saida: function lancar_saida(valor: number) {
    if (this.saldo - valor == 0) {
      console.log("Seu saldo não é suficiente para fazer esse saque");
    } else {
      carteira.saldo -= valor;
    }
  },
};

function lancamento(valor: number, opcao: number) {
  if (opcao === 1) {
    carteira.lancar_entrada(valor);
  } else if (opcao === 2) {
    carteira.lancar_saida(valor);
  }
  console.log(carteira.saldo);
}

lancamento(3, 2);

//atividade 4
const lista_produto: string[] = [];

function crud_produto(produto: string, opcao: number) {
  const crud = {
    opcao1: function cadastrar_produto(produto: string): void {
      lista_produto.push(produto);
    },
  };
}
