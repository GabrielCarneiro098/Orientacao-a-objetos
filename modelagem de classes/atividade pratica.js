// Atividade 1
var Contador = /** @class */ (function () {
    function Contador(contagem) {
        this.contagem = contagem;
    }
    Contador.prototype.zerar = function () {
        this.contagem = 0;
    };
    Contador.prototype.incrementar = function (valor) {
        this.contagem += valor;
    };
    Contador.prototype.retornar_contagem = function () {
        return this.contagem;
    };
    return Contador;
}());
var minha_contagem = new Contador(2);
console.log(minha_contagem.retornar_contagem());
minha_contagem.incrementar(5);
console.log(minha_contagem.retornar_contagem());
minha_contagem.zerar();
console.log(minha_contagem.retornar_contagem());
// Atividade 2
var Bola = /** @class */ (function () {
    function Bola(cor, circuferencia, material) {
        this.cor = cor;
        this.circunferencia = circuferencia;
        this.material = material;
    }
    Bola.prototype.trocar_cor = function (cor) {
        this.cor = cor;
    };
    Bola.prototype.mostrar_cor = function () {
        return this.cor;
    };
    return Bola;
}());
var bola_um = new Bola("vermelha", 10, "borracha");
var bola_dois = new Bola("Amarela", 5, "Não borracha");
console.log(bola_um.mostrar_cor());
console.log(bola_dois.mostrar_cor());
bola_um.trocar_cor("azul");
bola_dois.trocar_cor("verde");
console.log(bola_um.mostrar_cor());
console.log(bola_dois.mostrar_cor());
// Atividade 3
var Conta = /** @class */ (function () {
    function Conta(id, nome, saldo) {
        this.id = id;
        this.nome = nome;
        this.saldo = saldo !== null && saldo !== void 0 ? saldo : 0;
    }
    Conta.prototype.alterar_nome = function (nome) {
        this.nome = nome;
    };
    Conta.prototype.deposito = function (valor) {
        this.saldo += valor;
        console.log("Realizado deposito de: R$".concat(valor.toFixed(2), "\n Saldo da conta: R$").concat(this.saldo.toFixed(2)));
    };
    Conta.prototype.saque = function (valor) {
        if (this.saldo - valor < 0) {
            console.log("Saldo insuficiente para seguir com essa transa\u00E7\u00E3o. Saldo disponivel: R$".concat(this.saldo.toFixed(2)));
        }
        else {
            this.saldo -= valor;
            console.log("Saque: R$".concat(valor.toFixed(2), "\n Saldo restate: R$").concat(this.saldo.toFixed(2)));
        }
    };
    Conta.prototype.mostrar_saldo = function () {
        console.log("Saldo disponivel: R$".concat(this.saldo.toFixed(2)));
    };
    Conta.prototype.exibir_conta = function () {
        return this;
    };
    return Conta;
}());
var conta_um = new Conta(0, "Gabriel", 10);
conta_um.saque(22);
console.log(conta_um.exibir_conta());
conta_um.mostrar_saldo();
conta_um.deposito(352);
conta_um.saque(300);
conta_um.alterar_nome("Fulano");
console.log(conta_um.exibir_conta());
// Atividade 4
var Calculadora = /** @class */ (function () {
    function Calculadora() {
        this.contador = 0;
        this.historico = [];
    }
    Calculadora.prototype.somar = function (valor) {
        var calculo = {
            contador: this.contador,
            operacao: "soma",
            valor: valor,
            resultado: this.contador + valor,
        };
        this.historico.push(calculo);
        this.contador += valor;
    };
    Calculadora.prototype.diminuir = function (valor) {
        var calculo = {
            contador: this.contador,
            operacao: "subtração",
            valor: valor,
            resultado: this.contador - valor,
        };
        this.historico.push(calculo);
        this.contador -= valor;
    };
    Calculadora.prototype.multiplicar = function (valor) {
        var calculo = {
            contador: this.contador,
            operacao: "multiplicação",
            valor: valor,
            resultado: this.contador * valor,
        };
        this.historico.push(calculo);
        this.contador *= valor;
    };
    Calculadora.prototype.divisao = function (valor) {
        var calculo = {
            contador: this.contador,
            operacao: "divisão",
            valor: valor,
            resultado: this.contador / valor,
        };
        this.historico.push(calculo);
        this.contador /= valor;
    };
    Calculadora.prototype.visualizar_historico = function () {
        console.log(this.historico);
    };
    return Calculadora;
}());
var minha_calculadora = new Calculadora();
minha_calculadora.somar(2);
minha_calculadora.diminuir(1);
minha_calculadora.divisao(2);
minha_calculadora.multiplicar(2);
minha_calculadora.visualizar_historico();
// Atividade 5
var Bomba_combustivel = /** @class */ (function () {
    function Bomba_combustivel(tipo, valor, quantidade) {
        this.tipo_combustivel = tipo;
        this.valor_litro = valor;
        this.quantidade_combustivel = quantidade;
    }
    Bomba_combustivel.prototype.alterar_quantidade_restante_combustivel = function (quantidade) {
        this.quantidade_combustivel -= quantidade;
        console.log("Combustivel restante na bomba: ".concat(this.quantidade_combustivel.toFixed(3), " litros"));
    };
    Bomba_combustivel.prototype.abastecer_por_valor = function (valor) {
        var total_combustivel = valor / this.valor_litro;
        if (total_combustivel > this.quantidade_combustivel) {
            console.log("N\u00E3o \u00E9 possivel seguir com esse abastecimento. Combustivel restante na bomba: ".concat(this.quantidade_combustivel.toFixed(3)));
        }
        else {
            console.log("Cliente abasteceu ".concat(valor, " reais, dando total de ").concat(total_combustivel.toFixed(3), " litros de ").concat(this.tipo_combustivel, "."));
            this.alterar_quantidade_restante_combustivel(total_combustivel);
        }
    };
    Bomba_combustivel.prototype.abastecer_por_litro = function (quantidade_litro) {
        var valor_total = quantidade_litro * this.valor_litro;
        if (quantidade_litro > this.quantidade_combustivel) {
            console.log("N\u00E3o \u00E9 possivel seguir com esse abastecimento. Combustivel restante na bomba: ".concat(this.quantidade_combustivel.toFixed(3)));
        }
        else {
            console.log("Cliente abasteceu ".concat(quantidade_litro.toFixed(3), " litros de ").concat(this.tipo_combustivel, ", dando total de R$").concat(valor_total.toFixed(2), " reais."));
            this.alterar_quantidade_restante_combustivel(quantidade_litro);
        }
    };
    Bomba_combustivel.prototype.alterar_valor = function (novo_valor) {
        this.valor_litro = novo_valor;
        console.log("Atualizando valor do combustivel: R$".concat(this.valor_litro.toFixed(2), " reais"));
    };
    Bomba_combustivel.prototype.alterar_combustivel = function (tipo_combustivel) {
        this.tipo_combustivel = tipo_combustivel;
    };
    Bomba_combustivel.prototype.exibir_dados_da_bomba = function () {
        console.log("Dados da bomba: \n Tipo do combustivel: ".concat(this.tipo_combustivel, "\n Quantidade: ").concat(this.quantidade_combustivel.toFixed(3), " litros\n Valor: R$").concat(this.quantidade_combustivel.toFixed(2)));
    };
    return Bomba_combustivel;
}());
var bomba_combustivel = new Bomba_combustivel("Gasolina", 5.63, 100);
bomba_combustivel.abastecer_por_valor(200);
bomba_combustivel.abastecer_por_litro(5);
bomba_combustivel.exibir_dados_da_bomba();
bomba_combustivel.alterar_valor(100);
bomba_combustivel.exibir_dados_da_bomba();
bomba_combustivel.alterar_combustivel("Etanol");
bomba_combustivel.exibir_dados_da_bomba();
// Atividade 6
var Carro = /** @class */ (function () {
    function Carro(consumo) {
        this.consumo = consumo;
        this.combustivel_no_tanque = 0;
    }
    Carro.prototype.andar = function (distancia) {
        var total_consumo = this.consumo * distancia;
        if (total_consumo > this.combustivel_no_tanque) {
            console.log("N\u00E3o \u00E9 poss\u00EDvel seguir com o trajeto, tanque de combustivel est\u00E1 vazio.");
        }
        else {
            this.combustivel_no_tanque -= total_consumo;
            console.log("Distancia percorrida: ".concat(distancia.toFixed(2), " KM.\n Comsumo durante o trajeto: ").concat(total_consumo.toFixed(2), " L. "));
        }
    };
    Carro.prototype.obter_gasolina = function () {
        return "Combustivel disponivel no tanque: ".concat(this.combustivel_no_tanque.toFixed(2), " L");
    };
    Carro.prototype.adicionar_gasolina = function (litro) {
        this.combustivel_no_tanque += litro;
    };
    return Carro;
}());
var fiat_uno = new Carro(5);
fiat_uno.andar(1);
console.log(fiat_uno.obter_gasolina());
fiat_uno.adicionar_gasolina(50);
console.log(fiat_uno.obter_gasolina());
fiat_uno.andar(1);
console.log(fiat_uno.obter_gasolina());
