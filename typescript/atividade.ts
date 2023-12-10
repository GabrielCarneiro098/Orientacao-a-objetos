//Atividade 1
interface media {
  nota1: number;
  nota2: number;
  media: number;
  aprovado: boolean;
}

function calcular_media(n1: number, n2: number): media {
  const media_aluno: media = {
    nota1: n1,
    nota2: n2,
    media: (this.nota1 + this.nota2) / 2,
    aprovado: false,
  };

  if (media_aluno.media >= 6) {
    media_aluno.aprovado = true;
  }
  return media_aluno;
}

//Atividade 2
interface NotaPeso {
  nota: number;
  peso: number;
}

function calcularMediaPonderada(notasPesos: NotaPeso[]): number {
  if (notasPesos.length === 0) {
    throw new Error("A lista de notas e pesos não pode estar vazia.");
  }

  const somaProdutos = notasPesos.reduce((acumulador, { nota, peso }) => {
    return acumulador + nota * peso;
  }, 0);

  const somaPesos = notasPesos.reduce((acumulador, { peso }) => {
    return acumulador + peso;
  }, 0);

  const mediaPonderada = somaProdutos / somaPesos;
  return mediaPonderada;
}

const listaNotasPesos: NotaPeso[] = [
  { nota: 8, peso: 2 },
  { nota: 7, peso: 3 },
];

const resultado = calcularMediaPonderada(listaNotasPesos);
console.log(`A média ponderada é: ${resultado}`);

//Atividade 3
const carteira = {
  saldo: 0,
  entrada: function depositar_dinheiro(valor: number) {
    this.saldo += valor;
  },
  saida: function sacar_dinheiro(valor: number) {
    if (this.saldo - valor < 0) {
      console.log("Saldo insufinciente");
    } else {
      this.saldo -= valor;
    }
  },
};

console.log(carteira.entrada(2));
console.log(carteira.entrada(2));
console.log(carteira.entrada(2));
console.log(carteira.entrada(0));
console.log(carteira.saida(2));
console.log(carteira.saida(2));
console.log(carteira.saida(2));
console.log(carteira.saida(2));

//Atividade 4
interface produto {
  id: number;
  nome: string;
  valor: number;
}

const produtos: Array<object> = [];

function listar_produtos() {
  return produtos;
}

function cadastrar_produto(nome: string, valor: number) {
  const produto: produto = {
    id: produtos.length,
    nome: nome,
    valor: valor,
  };

  produtos.push(produto);
  return produtos;
}

function excluir_produto(posicao: number) {
  var index = posicao - 1;
  produtos.splice(index, 1);
}

console.log(listar_produtos());
cadastrar_produto("bala", 2);
cadastrar_produto("doce", 4);
cadastrar_produto("doce", 4);
cadastrar_produto("doce", 4);
cadastrar_produto("doce", 4);
cadastrar_produto("doce", 4);
console.log(listar_produtos());
excluir_produto(1);
console.log(listar_produtos());

//Atividade 5

type User = {
  nome: string;
  idade: number;
  ocupacao: string;
  salario?: number;
};

const usuarios: Array<object> = [];

function cadastrar_usuario(
  nome: string,
  idade: number,
  ocupacao: string,
  salario?: number
) {
  const user: User = {
    nome: nome,
    idade: idade,
    ocupacao: ocupacao,
    salario: salario,
  };

  usuarios.push;

  return user;
}

//Atividade 6
type Diretor = {
  nome: string;
  idade: number;
  salario?: number; // Salário é opcional
  nivelComissionamento: number;
};

function mostrarInformacoesDiretor(diretor: Diretor): string {
  const salario =
    diretor.salario !== undefined ? `R$ ${diretor.salario}` : "N/A";
  return `Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, salário ${salario}`;
}

const diretor1: Diretor = {
  nome: "Daphne",
  idade: 23,
  nivelComissionamento: 5,
  salario: 1000,
};
const diretor2: Diretor = {
  nome: "Daphne",
  idade: 23,
  nivelComissionamento: 5,
};

console.log(mostrarInformacoesDiretor(diretor1));
console.log(mostrarInformacoesDiretor(diretor2));

//Atividade 7
type UsuarioOuDiretor = User | Diretor;

function mostrarInformacoes(usuarioOuDiretor: UsuarioOuDiretor): string {
  if ("ocupacao" in usuarioOuDiretor) {
    const salario =
      usuarioOuDiretor.salario !== undefined
        ? `R$ ${usuarioOuDiretor.salario}`
        : "N/A";
    return `${usuarioOuDiretor.nome}, ${usuarioOuDiretor.idade} anos, ${usuarioOuDiretor.ocupacao}, salário ${salario}`;
  } else {
    const salario =
      usuarioOuDiretor.salario !== undefined
        ? `R$ ${usuarioOuDiretor.salario}`
        : "N/A";
    return `Diretor(a) ${usuarioOuDiretor.nome}, ${usuarioOuDiretor.idade} anos, comissão nível ${usuarioOuDiretor.nivelComissionamento}, salário ${salario}`;
  }
}

const usuario: UsuarioOuDiretor = {
  nome: "Daphne",
  idade: 23,
  ocupacao: "analista de TI",
  salario: 1000,
};
const diretor: UsuarioOuDiretor = {
  nome: "Daphne",
  idade: 23,
  nivelComissionamento: 5,
  salario: 1000,
};

console.log(mostrarInformacoes(usuario));
console.log(mostrarInformacoes(diretor));
