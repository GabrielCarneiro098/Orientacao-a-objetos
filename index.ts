// Atividade 1

class Ingresso {
    valor: number
    
    constructor (valor:number) {
    this.valor = valor
    }
    
    imprime_valor (): string {
    return `Valor do ingresso: R$${this.valor.toFixed(2)}`
    }
    }
    
    class Normal extends Ingresso {
    
    }
    
    class Vip extends Ingresso {
    adicional: number
    
    constructor (valor: number, adicional: number) {
    super(valor)
    this.adicional = adicional
    }
    
    
    imprime_valor () {
    return (`Valor do ingresso: R$${this.valor.toFixed(2)}. Taxa Vip: R$${this.adicional.toFixed(2)}. Total: R$${(this.valor + this.adicional).toFixed(2)}`)
    }
    }
    
    class Camarote extends Vip {
    
    constructor (valor: number, adicional: number) {
    super(valor, adicional)
    this.adicional *= 2
    }
    
    imprime_valor () {
    return (`Valor do ingresso: R$${this.valor.toFixed(2)}. Taxa camarote: R$${this.adicional.toFixed(2)}. Total: R$${(this.valor + this.adicional).toFixed(2)}`)
    }
    }
    
    const ingresso_normal = new Normal(10)
    const ingresso_vip = new Vip(10, 5)
    const ingresso_camarote = new Camarote(10, 5)
    
    console.log(ingresso_normal.imprime_valor())
    console.log(ingresso_vip.imprime_valor())
    console.log(ingresso_camarote.imprime_valor())
    
    // Atividade 2
    
    class Imovel {
    endereco: string
    preco: number
    
    constructor(endereco:string, preco:number) {
    this.endereco = endereco,
    this.preco = preco
    }
    
    }
    
    class Novo extends Imovel {
    adicional: number
    
    constructor(endereco: string, preco: number) {
    super(endereco, preco)
    this.adicional = 0
    }
    
    adicionar_valor (valor:number) {
    this.adicional = valor
    }
    
    imprimir_valor() {
    return `Valor do imovel: ${this.preco.toFixed(2)} . Adicional: ${this.adicional.toFixed(2)} . Valor final: ${(this.preco+this.adicional).toFixed(2)}`
    }
    }
    
    class Velho extends Imovel {
    desconto: number
    
    constructor(endereco: string, preco: number) {
    super(endereco, preco)
    this.desconto = 0
    }
    
    adicionar_desconto (desconto: number) {
    this.desconto = desconto
    }
    
    imprimir_valor() {
    return `Valor do imovel: ${this.preco.toFixed(2)} . Desconto: ${this.desconto.toFixed(2)} . Valor final: ${(this.preco - this.desconto).toFixed(2)}`
    }
    }
    
    const imovel_novo = new Novo("Pelinca",30000)
    const imovel_velho = new Velho("Goytacazes", 3000)
    
    //Ativida 3
    
    class Animal {
    patas: number
    especie: string
    
    constructor() {
    this.patas = 4
    this.especie = ""
    }
    
    beber_aguar () {
    return `${this.especie} bebeu agua`
    }
    
    comer () {
    return `${this.especie} comeu`
    }
    
    dormir () {
    return `${this.especie} dormiu`
    }
    }
    
    class Cachorro extends Animal {
    constructor(especie: string){
    super()
    this.especie = especie
    }
    
    latir() {
    return `${this.especie} latiu`
    }
    }
    
    class Cavalo extends Animal {
    constructor(especie: string){
    super()
    this.especie = especie
    }
    
    galopar() {
    return `${this.especie} galapou`
    }
    }
    
    class Gato extends Animal {
    constructor(especie: string){
    super()
    this.especie = especie
    }
    
    miar() {
    return `${this.especie} miou`
    }
    }
    
    const gato = new Gato("Gato")
    const cachorro = new Cachorro("Cachorro")
    const cavalo = new Cavalo("Cavalo")