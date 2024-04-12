class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'soco';
      }
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  const villager = new Heroi('Aldeão', 40, 'villager');
  villager.atacar();

  const monge = new Heroi('Jack Shan', 100, 'monge');
  monge.atacar();

  const ninja = new Heroi('Samuca', 20, 'ninja');
  ninja.atacar();

  const mago = new Heroi('NatanCarFF', 1000, 'mago');
  mago.atacar();
  
  const guerreiro = new Heroi('Leyde', 35, 'guerreiro');
  guerreiro.atacar();
  