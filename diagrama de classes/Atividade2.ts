class Formato_de_elemento {
  desenhar(): void {}
  redimensionar(): void {}
}

class Circulo extends Formato_de_elemento {
  raio: number;

  constructor(raio: number) {
    super();
    this.raio = raio;
  }

  desenhar(): void {
    console.log(`Desenhando um círculo com raio ${this.raio}.`);
  }

  redimensionar(): void {
    console.log("Redimensionando o círculo.");
  }
}

class Retangulo extends Formato_de_elemento {
  comprimento: number;
  altura: number;

  constructor(comprimento: number, altura: number) {
    super();
    this.comprimento = comprimento;
    this.altura = altura;
  }

  desenhar(): void {
    console.log(
      `Desenhando um retângulo com comprimento ${this.comprimento} e altura ${this.altura}.`
    );
  }

  redimensionar(): void {
    console.log("Redimensionando o retângulo.");
  }
}

const circulo = new Circulo(10);
circulo.desenhar();
circulo.redimensionar();

const retangulo = new Retangulo(18, 5);
retangulo.desenhar();
retangulo.redimensionar();
